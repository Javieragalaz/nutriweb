import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/imgs/nutrilogo.png'


function NavBar() {
  return (
    <div>
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary ps-5">
      <Container>
        <Navbar.Brand className='ps-5 m-3'> <img src= {Logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto p-5">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Enfoque</Nav.Link>
            <NavDropdown title="Especialidades" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pediatría</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Alimentación intuitiva
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Trastornos de la conducta alimentaria</NavDropdown.Item>
          
          
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;