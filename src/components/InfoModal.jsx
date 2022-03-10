export const InfoModal = ({ characterDetail }) => {
	return (
		<>
			<div className="text-center mt-2">
				<p className="mb-0">Estado: {characterDetail.status === "unknown" ? "Desconocido" : characterDetail.status}</p>
				<p className="mb-0">Especie: {characterDetail.species}</p>
				<p className="mb-0">Sexo: {characterDetail.gender === "unknown" ? "Desconocido" : characterDetail.gender}</p>
				<p className="mb-0">
					Origen: {characterDetail.origin?.name === "unknown" ? "Desconocido" : characterDetail.origin?.name}
				</p>
			</div>
		</>
	);
};
