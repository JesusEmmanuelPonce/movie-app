import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';

import SearchInput from 'components/SearchInput';
import "./styles.scss";

const CustomNavbar = () => {
  return (
    <Navbar bg='light' expand='md' className="mb-3 p-3 customNavbar">
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbar-expand-md'
          placement="end"
        >
          <Offcanvas.Body>
            <Nav className="align-items-center justify-content-end flex-grow-1 pe-3">
              
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? "customNavbar__linkItems active" : "customNavbar__linkItems";
                }}
              >
                Movies
              </NavLink>
            
              <NavLink
                to="/tv"
                className={({ isActive }) => {
                  return isActive ? "customNavbar__linkItems active" : "customNavbar__linkItems";
                }}
              >
                TV
              </NavLink>
            </Nav>
            <SearchInput />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar