import { Paginacion } from "./components/Paginacion";
import { FilterCharacters } from "./components/FilterCharacters";
import { CardsGridCharacter } from "../CardsGridCharacter";

import { usePaginacion } from "../../hooks/usePaginacion";
import { useFetchData } from "../../hooks/useFetchCharacters";
import { useModal } from "../../hooks/useModal";

export const HomePage = () => {
	const { data: charactersData, loading, error } = useFetchData("https://rickandmortyapi.com/api/character");
	const [page, totalPages, charactersPage, changePage, aplicarFiltroPersonaje] = usePaginacion(charactersData.results);
	const [show, handleClose, handleShow] = useModal();

	if (error) {
		return <p className="text-center h3 pt-5 text-danger">Error</p>;
	}
	if (loading) {
		return <p className="text-center h3 pt-5">loading...</p>;
	}
	return (
		<div className="container-lg ">
			{charactersData.results && (
				<FilterCharacters
					characters={charactersData.results}
					aplicarFiltroPersonaje={aplicarFiltroPersonaje}
					changePage={changePage}
				/>
			)}
			<CardsGridCharacter
				charactersPage={charactersPage}
				show={show}
				handleShow={handleShow}
				handleClose={handleClose}
			/>
			<Paginacion totalPages={totalPages} actualPage={page} changePage={changePage} />
		</div>
	);
};
