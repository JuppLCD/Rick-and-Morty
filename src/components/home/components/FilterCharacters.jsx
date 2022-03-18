import { Button, ButtonGroup } from 'react-bootstrap';
export const FilterCharacters = ({ characters, aplicarFiltroPersonaje }) => {
	const arrEspecies = [];
	for (let i = 0; i < characters.length; i++) {
		if (!arrEspecies.includes(characters[i].species)) {
			arrEspecies.push(characters[i].species);
		}
	}
	return (
		<section className='d-md-flex justify-content-between py-3'>
			<h2>Filtro Personajes: </h2>
			<div>
				<ButtonGroup aria-label='Filtros de los personajes'>
					<Button variant='primary' onClick={() => aplicarFiltroPersonaje(characters)}>
						Mostrar Todos
					</Button>
					{arrEspecies.map((especie) => (
						<Button
							variant='dark'
							key={especie}
							onClick={() => aplicarFiltroPersonaje(characters.filter((character) => character.species === especie))}
						>
							{especie}
						</Button>
					))}
				</ButtonGroup>
			</div>
		</section>
	);
};
