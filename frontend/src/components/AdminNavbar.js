import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
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
            <p className="mb-0 fs-6">Admin Dashboard</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/admin-dashboard" className="text-white fw-bold px-4">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#logout" className="text-white fw-bold px-4" onClick={handleLogout}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;