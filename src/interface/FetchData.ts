export interface DATA {
	info: {
		count: 826;
		pages: 42;
		next: 'https://rickandmortyapi.com/api/character?page=2';
		prev: null;
	};
	results: Character[];
}
export interface Character {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: {
		name: string;
		url: string;
	};
	location: {
		name: string;
		url: string;
	};
	image: string;
	episode: string[];
	url: string;
	created: string;
}
