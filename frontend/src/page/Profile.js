import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

const Profile = () => {
  const [user, setUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user data (replace with actual API call)
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      profilePicture: 'https://via.placeholder.com/150',
    };
    setUser(userData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save user data (replace with actual API call)
    setIsEditing(false);
  };

  return (
    <>
      <UserNavbar />
      <Container>
        <Row className="my-4">
          <Col md={4}>
            <img src={user.profilePicture} alt="Profile" className="img-fluid rounded-circle" />
          </Col>
          <Col md={8}>
            <h2>Profil Saya</h2>
            {isEditing ? (
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBio" className="mt-3">
                  <Form.Label>Bio</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="bio"
                    rows={3}
                    value={user.bio}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" className="mt-3" onClick={handleSave}>
                  Simpan
                </Button>
                <Button variant="secondary" className="mt-3 ms-2" onClick={() => setIsEditing(false)}>
                  Batal
                </Button>
              </Form>
            ) : (
              <div>
                <p><strong>Nama:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
                <Button variant="primary" onClick={() => setIsEditing(true)}>
                  Edit Profil
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;