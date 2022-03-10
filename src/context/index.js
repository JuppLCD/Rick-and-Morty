import { createContext } from "react";

const charactersContext = createContext();

import { useFetchData } from "./hooks/useFetchCharacters";

export const charactersProvider = () => {
	const { data: charactersData, loading, error } = useFetchData("https://rickandmortyapi.com/api/character");

	if (error) {
		return <p className="text-center h3 pt-5 text-danger">Error</p>;
	}
	if (loading) {
		return <p className="text-center h3 pt-5">loading...</p>;
	}
	return <charactersContext.Provider>index</charactersContext.Provider>;
};
