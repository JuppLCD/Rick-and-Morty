import { ChangeEvent } from 'react';
import { Query } from '../../../types/inputs';

interface Props {
	placeholder: string;
	label: string;
	value: string;
	name?: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>, query: Query) => void;
	type: Query;
}
function InputText({ placeholder, label, name, value, handleChange, type }: Props) {
	const idInput = label.trim().replaceAll(' ', '_');
	return (
		<div>
			<label htmlFor={idInput} className='block mb-2 text-sm font-mediumtext-gray-300'>
				{label}
			</label>
			<input
				type='text'
				id={idInput}
				name={name}
				value={value}
				className=' border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputText;
