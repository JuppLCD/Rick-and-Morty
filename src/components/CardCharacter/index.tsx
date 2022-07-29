import { Character } from '../../interface/FetchData';
interface Props extends Character {}

function CardCharacter(props: Props) {
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg m-2 min-h-[400px] border border-lime-900'>
			<img className='w-full' src={props.image} alt={props.name} />
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2 text-white-400'>{props.name}</div>

				<div className='text-neutral-400 text-base'>
					<p>Created: {props.created}</p>
					<p>Location: {props.location.name}</p>
					<p>Origin: {props.origin.name}</p>
					<p>Gender: {props.gender}</p>
					<p>Species: {props.species || 'null'}</p>
					<p>Type: {props.type || 'null'}</p>
				</div>
			</div>
		</div>
	);
}

export default CardCharacter;
