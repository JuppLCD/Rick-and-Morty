import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="mb-5">
			<Navbar bg="dark" variant="ligth" expand="lg" sticky="top" className="py-3 text-white">
				<Container className="justify-content-end">
					<Navbar.Brand as={Link} to="/">
						SCROLL AND PAGES
					</Navbar.Brand>
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
