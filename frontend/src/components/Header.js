import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar bg="light" expand="lg" variant="light" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">MyStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarColor03" />
        <Navbar.Collapse id="navbarColor03">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i className="fas fa-user"></i> Log In
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
