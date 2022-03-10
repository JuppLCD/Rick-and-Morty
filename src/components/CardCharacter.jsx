import { Card, Button } from "react-bootstrap";

export const CardCharacter = ({ character, handleShow }) => {
	return (
		<Card style={{ width: "18rem" }} className="m-2">
			<Card.Img variant="top" src={character.image} />
			<Card.Body>
				<Card.Title>{character.name}</Card.Title>
				<div className="pb-3">
					<p className="mb-0">Estado: {character.status === "unknown" ? "Desconocido" : character.status}</p>
					<p className="mb-0">Especie: {character.species}</p>
					<p className="mb-0"> Sexo: {character.gender === "unknown" ? "Desconocido" : character.gender}</p>
				</div>
				<Button variant="primary" onClick={() => handleShow(character.id)}>
					Ver mas
				</Button>
			</Card.Body>
		</Card>
	);
};
