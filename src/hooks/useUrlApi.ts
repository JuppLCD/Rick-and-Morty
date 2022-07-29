import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { urlAPI } from '../config';
import { useDebounce } from './useDebounce';

type useUrlApi = (page: number, resetPage: () => void, resetCharacters: () => void) => string;

export const useUrlApi: useUrlApi = (page, resetPage, resetCharacters) => {
	const [query] = useSearchParams();

	const search = query.get('search');
	const status = query.get('status');
	const species = query.get('species');
	const type = query.get('type');
	const gender = query.get('gender');

	const debouncedFilter = useDebounce({ search, status, species, type, gender }, 300);

	useEffect(() => {
		resetPage();
		resetCharacters();
	}, [
		debouncedFilter.search,
		debouncedFilter.status,
		debouncedFilter.species,
		debouncedFilter.type,
		debouncedFilter.gender,
	]);

	const queryName = `name=${debouncedFilter.search || ''}`;
	const queryStatus = debouncedFilter.status ? `&status=${debouncedFilter.status}` : '';
	const querySpecies = debouncedFilter.species ? `&species=${debouncedFilter.species}` : '';
	const queryType = debouncedFilter.type ? `&type=${debouncedFilter.type}` : '';
	const queryGender = debouncedFilter.gender ? `&gender=${debouncedFilter.gender}` : '';

	const url = `${urlAPI}/?${queryName + queryStatus + querySpecies + queryType + queryGender}&page=${page}`;

	return url;
};
