import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

import { urlAPI } from '../config';

import { Character, DATA } from '../interface/FetchData';

import InfiniteScroll from 'react-infinite-scroll-component';

import Container from '../components/Container';
import Spinner from '../components/Spinner';
import CardCharacter from '../components/CardCharacter';
import GridCharacter from '../components/GridCharacter';

function HomePage() {
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [charactersData, setCharactersData] = useState<Character[]>([]);

	const url = `${urlAPI}/?page=${page}`;

	const { value } = useFetch<DATA>(url, {}, [url]);

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

	return (
		<Container>
			<h1 className='text-center text-2xl md:text-4xl mb-4'>
				All characters of <span>Rick and Morty</span>
			</h1>
			<InfiniteScroll
				dataLength={charactersData.length}
				hasMore={hasMore}
				next={() => setPage((prevPage) => prevPage + 1)}
				loader={<Spinner />}
			>
				<GridCharacter>
					{charactersData.map((character) => (
						<CardCharacter {...character} key={character.id} />
					))}
				</GridCharacter>
			</InfiniteScroll>
		</Container>
	);
}

export default HomePage;
