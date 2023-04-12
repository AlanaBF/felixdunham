import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";
import favicon from "../../assets/images/favicon-32x32.png";
import { NavLink } from 'react-bootstrap';

// Navbar that links all pages
function Header() {

  return (
    <Navbar expand="lg">
      <Container>
        <LinkContainer to="/Home">
          <Navbar.Brand className="navBarName"><a href="/Home"> <img src={favicon} alt=""></img></a>Felix Dunham</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/Home"><Nav.Link >Home</Nav.Link></LinkContainer>
            <LinkContainer to="/Photos"><NavLink>My Photos</NavLink></LinkContainer>
            <LinkContainer to="/Videos"><Nav.Link >My Videos</Nav.Link></LinkContainer>
            <LinkContainer to="/Contact"><Nav.Link >Follow Me</Nav.Link></LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;