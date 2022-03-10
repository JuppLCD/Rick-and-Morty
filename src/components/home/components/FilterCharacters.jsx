import { Button, ButtonGroup } from "react-bootstrap";
export const FilterCharacters = ({ characters, aplicarFiltroPersonaje }) => {
	const arrEspecies = [];
	for (let i = 0; i < characters.length; i++) {
		if (!arrEspecies.includes(characters[i].species)) {
			arrEspecies.push(characters[i].species);
		}
	}
	return (
		<section className="d-flex justify-content-between pt-3">
			<h2>Filtro Personajes: </h2>
			<ButtonGroup aria-label="Filtros de los personajes">
				<Button variant="success" onClick={() => aplicarFiltroPersonaje(characters)}>
					Mostrar Todos
				</Button>
				{arrEspecies.map((especie) => (
					<Button
						variant="secondary"
						key={especie}
						onClick={() => aplicarFiltroPersonaje(characters.filter((character) => character.species === especie))}
					>
						{especie}
					</Button>
				))}
			</ButtonGroup>
		</section>
	);
};
