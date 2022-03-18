import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<header className='sticky-top mb-5 bg-dark'>
			<Navbar bg='dark' variant='dark' expand='lg'>
				<Container className='justify-content-end'>
					<Navbar.Brand as={Link} to='/' className='me-auto'>
						Scroll and Search
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link as={Link} to='/'>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to='/search'>
								Buscador
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
