import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Tab, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackVariant, setFeedbackVariant] = useState('danger');
  const navigate = useNavigate();

  const handleBackToLandingPage = () => {
    navigate('/');
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else if (user.role === 'user') {
        navigate('/user-dashboard');
      } else if (user.role === 'mentor') {
        navigate('/mentor-dashboard');
      }
    } else {
      setFeedback('Invalid credentials. Please try again.');
      setFeedbackVariant('danger');
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { name, email, password, role: 'user' };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    setFeedback('Sign up successful! Please sign in.');
    setFeedbackVariant('success');
  };

  return (
    <div className="loginPage">
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2 className="text-center mb-4">Selamat datang di TeraLab</h2>
            <Tab.Container defaultActiveKey="signin">
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
                  {feedback && <Alert variant={feedbackVariant}>{feedback}</Alert>}
                  <Form onSubmit={handleSignIn}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                      Sign In
                    </Button>
                  </Form>
                </Tab.Pane>
                <Tab.Pane eventKey="signup">
                  {feedback && <Alert variant={feedbackVariant}>{feedback}</Alert>}
                  <Form onSubmit={handleSignUp}>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="mt-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mt-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
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