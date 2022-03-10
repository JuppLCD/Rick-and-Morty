export const getUtrl = (query, page) => {
	let url = "";
	if (!query) {
		url = `https://rickandmortyapi.com/api/character/?page=${page}`;
	} else {
		url = `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`;
	}
	return url;
};
