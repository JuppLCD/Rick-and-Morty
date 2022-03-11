import { useEffect, useState } from "react";

export const usePaginacion = (characters) => {
	// Paginacion
	const [page, setPage] = useState(1);
	const [characterPerPage] = useState(6);
	// Personajes que se muestran al usuario (con o sin filtros)
	const [charactersToShow, setCharactersToShow] = useState([]);

	useEffect(() => {
		if (characters) setCharactersToShow(characters);
	}, [characters]);

	const aplicarFiltroPersonaje = (newCharactersToShow) => {
		setCharactersToShow(newCharactersToShow);
		changePage(1);
	};

	// Paginacion
	const indexOfLastCharacter = page * characterPerPage;
	const indexOfFirstCharacter = indexOfLastCharacter - characterPerPage;
	const charactersPage = charactersToShow.slice(indexOfFirstCharacter, indexOfLastCharacter);
	const totalPages = Math.ceil(charactersToShow.length / characterPerPage);

	const changePage = (nexPage) => setPage(nexPage);

	return [page, totalPages, charactersPage, changePage, aplicarFiltroPersonaje, setCharactersToShow, charactersToShow];
};
