import { useEffect, useState } from "react";
import { useFetchData } from "../../hooks/useFetchCharacters";
import { useModal } from "../../hooks/useModal";
import { useDebounce } from "../../hooks/useDebounce";

import { getUtrl } from "./getUtrl";

import InfiniteScroll from "react-infinite-scroll-component";

import { CardsGridCharacter } from "./../CardsGridCharacter";
import { Search } from "./components/Search";

import { useQuery } from "../../hooks/useQuery";

export const SearchCharacter = () => {
	const [page, setPage] = useState(1);
	const [characters, setCharacters] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	const query = useDebounce(useQuery().get("search"), 700, setPage);
	const url = getUtrl(query, page);
	const { data: charactersData, loading, error } = useFetchData(url);
	const [show, handleClose, handleShow] = useModal();

	useEffect(() => {
		if (charactersData.length !== 0) {
			setCharacters((prevCharacters) => {
				if (url.includes("page=1")) {
					return [...charactersData.results];
				} else {
					return [...new Set([...prevCharacters.concat(charactersData.results)])];
				}
			});
			setHasMore(!!charactersData.info.next && !error);
		} else {
			setCharacters([]);
		}
	}, [charactersData]);

	if (error) {
		if (!error === "Personaje no encontrado") {
			return <p>Error: {error}</p>;
		}
	}
	return (
		<main className="text-center container-lg">
			<h2>
				Busca un personaje de <span>Rick and Morty</span>
			</h2>
			<p className="text-muted">Search Query and infinite scroll</p>
			<Search />
			{!charactersData.results && error && <h4>{error}</h4>}
			{characters.length !== 0 && (
				<InfiniteScroll
					dataLength={characters.length}
					hasMore={hasMore}
					next={() => setPage((prevPage) => prevPage + 1)}
					loader={<h4>Loading...</h4>}
				>
					<CardsGridCharacter
						charactersPage={characters}
						show={show}
						handleShow={handleShow}
						handleClose={handleClose}
					/>
				</InfiniteScroll>
			)}
		</main>
	);
};
