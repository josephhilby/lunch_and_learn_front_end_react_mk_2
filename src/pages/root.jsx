import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet } from "react-router-dom"
import Footer from '../components/footer';

export default function Root() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="border-bottom sticky-top mb-2">
        <Container>
          <Navbar.Brand href="/">Lunch And Learn</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Log In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      <Footer/>
    </div>
  );
}