// src/components/Navbar.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="img/logo.svg"
            alt="Logo"
            className="icon_teralab me-3"
          />
          <div>
            <span className="fw-bold fs-5">TeraLab</span>
            <p className="mb-0 fs-6">Build Your Future</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#kursus" className="text-white fw-bold px-4">
              Kursus
            </Nav.Link>
            <Nav.Link href="#mentor" className="text-white fw-bold px-4">
              Mentor
            </Nav.Link>
            <Nav.Link href="#forum" className="text-white fw-bold px-4">
              Forum
            </Nav.Link>
            <Nav.Link href="#about" className="text-white fw-bold px-4">
              Tentang Kami
            </Nav.Link>
            <Nav.Link
              href="#login"
              className="btn_masuk nav-link px-5 py-2 fw-bold ms-4"
            >
              Masuk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
