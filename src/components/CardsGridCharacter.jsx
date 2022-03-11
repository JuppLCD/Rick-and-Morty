import { CardCharacter } from "./CardCharacter";
import { ModalCharacter } from "./ModalCharacter";

export const CardsGridCharacter = ({ charactersPage, show, handleShow, handleClose }) => {
	return (
		<>
			{show.status && <ModalCharacter handleClose={handleClose} show={show} />}
			<section className="d-flex flex-wrap justify-content-center">
				{charactersPage &&
					charactersPage.map((character) => (
						<CardCharacter character={character} key={character.id} handleShow={handleShow} />
					))}
			</section>
		</>
	);
};
