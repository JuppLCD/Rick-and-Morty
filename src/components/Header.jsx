import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" sticky="top">
				<Container className="justify-content-end">
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/search">
								Buscador
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
