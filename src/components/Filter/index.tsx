import { useSearchParams } from 'react-router-dom';

import { ChangeEvent, FormEvent } from 'react';
import { Query } from '../../types/inputs';

import InputSelect from './InputSelect';
import InputText from './InputText';

function Filter() {
	const [query, setQuery] = useSearchParams();

	const status = query.get('status') ?? '';
	const species = query.get('species') ?? '';
	const type = query.get('type') ?? '';
	const gender = query.get('gender') ?? '';

	const handleChange = (e: ChangeEvent<HTMLInputElement>, query: Query) => {
		console.log(e.target.value);
		// setQuery({ [query]: e.target.value });
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const dataFilters = {
		inputSelectStatus: {
			nameOfTheDataToSelect: 'status',
			options: [
				{ value: 'alive', text: 'Alive' },
				{ value: 'dead', text: 'Dead' },
				{ value: 'unknown', text: 'Unknown' },
			],
			value: status,
			type: 'status',
		},
		inputSelectGender: {
			nameOfTheDataToSelect: 'gender',
			options: [
				{ value: 'female', text: 'Female' },
				{ value: 'male', text: 'Male' },
				{ value: 'genderless', text: 'Genderless' },
				{ value: 'unknown', text: 'Unknown' },
			],
			value: gender,
			type: 'gender',
		},
		inputTextSpecies: {
			placeholder: 'example: Human...',
			label: 'Species',
			value: species,
			type: 'species',
		},
		inputTextType: {
			placeholder: 'example: Genetic experiment...',
			label: 'Type',
			value: type,
			type: 'type',
		},
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputSelect
				{...dataFilters.inputSelectStatus}
				handleChange={handleChange}
				type={dataFilters.inputSelectStatus.type as Query}
			/>
			<InputSelect
				{...dataFilters.inputSelectGender}
				handleChange={handleChange}
				type={dataFilters.inputSelectGender.type as Query}
			/>
			<InputText
				{...dataFilters.inputTextSpecies}
				handleChange={handleChange}
				type={dataFilters.inputTextSpecies.type as Query}
			/>
			<InputText
				{...dataFilters.inputTextType}
				handleChange={handleChange}
				type={dataFilters.inputTextType.type as Query}
			/>
		</form>
	);
}

export default Filter;
