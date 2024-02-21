import React from 'react';
import {Navbar, Container, Nav } from "react-bootstrap";


export default function NavBar() {
  return (
    <div>
          <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Facenotbook</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/signin">Login</Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>
    </div>
  )
}