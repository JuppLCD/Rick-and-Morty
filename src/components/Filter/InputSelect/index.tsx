import { ChangeEvent } from 'react';
import { Query } from '../../../types/inputs';

interface Props {
	nameOfTheDataToSelect: string;
	options: {
		value: string;
		text: string;
	}[];
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>, query: Query) => void;
	type: Query;
}
function InputSelect({ nameOfTheDataToSelect, options, value, handleChange, type }: Props) {
	return (
		<div>
			<label htmlFor={nameOfTheDataToSelect} className='block mb-2 text-sm font-medium text-gray-400'>
				Select an option
			</label>
			<select
				id={nameOfTheDataToSelect}
				className=' border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
			>
				<option value=''>Choose a {nameOfTheDataToSelect}</option>
				{options.map((option) => (
					<option
						key={option.value}
						// {option.value === value ? 'select': ''}
						value={option.value}
					>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
}

export default InputSelect;
