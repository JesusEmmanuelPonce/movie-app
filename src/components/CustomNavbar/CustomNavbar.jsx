import SearchInput from 'components/SearchInput';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const CustomNavbar = () => {
    return (
        <Navbar expand='md' className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
            <Navbar.Offcanvas
              id='offcanvasNavbar-expand-md'
              aria-labelledby='offcanvasNavbar-expand-md'
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id='offcanvasNavbar-expand-md'>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                <SearchInput />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )
}

export default CustomNavbar