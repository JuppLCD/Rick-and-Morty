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

	const debouncedSearch = useDebounce(search, 300);
	const debouncedStatus = useDebounce(status, 300);
	const debouncedSpecies = useDebounce(species, 300);
	const debouncedType = useDebounce(type, 300);
	const debouncedGender = useDebounce(gender, 300);

	useEffect(() => {
		resetPage();
		resetCharacters();
	}, [debouncedSearch, debouncedStatus, debouncedSpecies, debouncedType, debouncedGender]);

	const queryName = `name=${debouncedSearch || ''}`;
	const queryStatus = debouncedStatus ? `&status=${debouncedStatus}` : '';
	const querySpecies = debouncedSpecies ? `&species=${debouncedSpecies}` : '';
	const queryType = debouncedType ? `&type=${debouncedType}` : '';
	const queryGender = debouncedGender ? `&gender=${debouncedGender}` : '';

	const url = `${urlAPI}/?${queryName + queryStatus + querySpecies + queryType + queryGender}&page=${page}`;

	return url;
};
