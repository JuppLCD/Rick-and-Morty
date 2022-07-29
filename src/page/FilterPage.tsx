import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useUrlApi } from '../hooks/useUrlApi';

import { Character, DATA } from '../interface/FetchData';

import InfiniteScroll from 'react-infinite-scroll-component';

import Container from '../components/Container';
import GridCharacter from '../components/GridCharacter';
import Search from '../components/Search';
import Filter from '../components/Filter';
import CardCharacter from '../components/CardCharacter';
import Spinner from '../components/Spinner';

function FilterPage() {
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [charactersData, setCharactersData] = useState<Character[]>([]);

	const resetPage = () => setPage(1);
	const resetCharacters = () => setCharactersData([]);

	const url = useUrlApi(page, resetPage, resetCharacters);

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
			<Filter />
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
