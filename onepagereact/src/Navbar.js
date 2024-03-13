// Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#section1">BrandName</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#section1">Section 1</Nav.Link>
        <Nav.Link href="#section2">Section 2</Nav.Link>
        <Nav.Link href="#section3">Section 3</Nav.Link>
        <Nav.Link href="#section4">Section 4</Nav.Link>
        <Nav.Link href="#section5">Section 5</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;