import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent() {
  return (
    <Navbar id='top' bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">Iraku Harry</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">Biography</Nav.Link>
              <Nav.Link as={Link} to="https://github.com/iraqooh/">Projects</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarComponent