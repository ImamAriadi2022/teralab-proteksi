import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
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
            <Nav.Link href="/user-dashboard" className="text-white fw-bold px-4">
              Home
            </Nav.Link>
            <Nav.Link href="/user-webinars" className="text-white fw-bold px-4">
              My Webinars
            </Nav.Link>
            <Nav.Link href="/all-webinars" className="text-white fw-bold px-4">
              All Webinars
            </Nav.Link>
            <Nav.Link href="/merchandise" className="text-white fw-bold px-4">
              Merchandise
            </Nav.Link>
            <Nav.Link href="/profile" className="text-white fw-bold px-4">
              Profile
            </Nav.Link>
            <Nav.Link
              href="#"
              className="btn_masuk nav-link px-5 py-2 fw-bold ms-4"
              onClick={handleLogout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;