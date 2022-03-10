import { Button, Modal } from "react-bootstrap";

import { useFetchData } from "../hooks/useFetchCharacters";
import { InfoModal } from "./InfoModal";

export const ModalCharacter = ({ handleClose, show }) => {
	const {
		data: characterDetail,
		loading,
		error,
	} = useFetchData(`https://rickandmortyapi.com/api/character/${show.id}`);

	if (error) {
		return (
			<>
				<Modal show={show.status} onHide={handleClose}>
					<Modal.Header closeButton flex-column>
						<Modal.Title>Error</Modal.Title>
					</Modal.Header>
				</Modal>
			</>
		);
	}
	return (
		<>
			{!loading && (
				<Modal show={show.status} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{characterDetail.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img src={characterDetail.image} alt={characterDetail.name} className="mx-auto d-block" />
						<InfoModal characterDetail={characterDetail} />
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							Cerrar
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</>
	);
};
