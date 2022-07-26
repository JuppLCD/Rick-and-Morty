import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce';
import { useFetch } from '../hooks/useFetch';

import { urlAPI } from '../config';

import { Character, DATA } from '../interface/FetchData';

import InfiniteScroll from 'react-infinite-scroll-component';

import Container from '../components/Container';
import GridCharacter from '../components/GridCharacter';
import Search from '../components/Search';
import CardCharacter from '../components/CardCharacter';
import Spinner from '../components/Spinner';

function FilterPage() {
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [charactersData, setCharactersData] = useState<Character[]>([]);

	const [query] = useSearchParams();
	const search = query.get('search');
	const debouncedSearch = useDebounce(search, 300);

	useEffect(() => {
		setPage(1);
		setCharactersData([]);
	}, [debouncedSearch]);

	const url = `${urlAPI}/?name=${debouncedSearch || ''}&page=${page}`;

	const { loading, error, value } = useFetch<DATA>(url, {}, [url]);

	useEffect(() => {
		if (!!value?.results) {
			setCharactersData((prevState) => {
				if (page === 1 && prevState.length !== 0) {
					return prevState;
				}
				return [...prevState].concat(value.results);
			});
			setHasMore(page < value.info.pages);
		}
	}, [value]);

	const nexPage = () => setPage((prevPage) => prevPage + 1);
	return (
		<Container>
			<h1 className='text-center text-2xl md:text-4xl'>
				Search character of <span>Rick and Morty</span>
			</h1>
			<Search />
			{!loading && error ? (
				<p className='text-center mt-2'>No found</p>
			) : (
				<InfiniteScroll
					dataLength={charactersData.length}
					hasMore={hasMore}
					next={nexPage}
					loader={<Spinner />}
					className='overflow-hidden'
				>
					<GridCharacter>
						{charactersData.map((character) => (
							<CardCharacter {...character} key={character.id} />
						))}
					</GridCharacter>
				</InfiniteScroll>
			)}
		</Container>
	);
}

export default FilterPage;
