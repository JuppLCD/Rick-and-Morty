import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../../hooks/useQuery";

export const Search = () => {
	const query = useQuery();
	const search = query.get("search");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Control
					type="text"
					placeholder="Busca un personaje"
					value={search ?? ""}
					onChange={(e) => {
						if (e.target.value !== "") {
							navigate("/search/?search=" + e.target.value);
						} else {
							navigate("/search/");
						}
					}}
				/>
			</Form.Group>
		</Form>
	);
};
