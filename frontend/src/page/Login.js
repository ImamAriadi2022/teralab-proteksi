import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';

const Login = () => {
  const [key, setKey] = useState('signin');
  const navigate = useNavigate();

  const handleBackToLandingPage = () => {
    navigate('/');
  };

  return (
    <div className="loginPage">
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Selamat datang di TeraLab</h2>
            <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
              <Nav variant="pills" className="justify-content-center mb-3">
                <Nav.Item>
                  <Nav.Link eventKey="signin">Sign In</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="signin">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Sign In
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="signup">
                  <Form>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="mt-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Sign Up
                    </Button>
                  </Form>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            <Button variant="secondary" className="mt-3 w-100" onClick={handleBackToLandingPage}>
              Back to Landing Page
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;