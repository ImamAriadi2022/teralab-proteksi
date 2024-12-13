// src/components/Navbar.jsx
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; 

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

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
            <Nav.Link href="/" className="text-white fw-bold px-4">
              Beranda
            </Nav.Link>
            <Nav.Link href="/about" className="text-white fw-bold px-4">
              Tentang Kami
            </Nav.Link>
            <Nav.Link
              href="#login"
              className="btn_masuk nav-link px-5 py-2 fw-bold ms-4"
              onClick={handleLogin}
              >
              Masuk/Daftar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
