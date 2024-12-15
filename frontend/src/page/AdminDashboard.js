import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Admin Dashboard</h2>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Daftar User</Card.Title>
                <Card.Text>Kelola daftar pengguna di platform ini.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/admin-users')}>
                  Lihat
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Daftar Mentor</Card.Title>
                <Card.Text>Kelola daftar mentor di platform ini.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/admin-mentors')}>
                  Lihat
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Daftar Webinar</Card.Title>
                <Card.Text>Kelola daftar webinar di platform ini.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/admin-webinars')}>
                  Lihat
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Daftar Kelas</Card.Title>
                <Card.Text>Kelola daftar kelas di platform ini.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/admin-classes')}>
                  Lihat
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Kelola Merchandise</Card.Title>
                <Card.Text>Kelola daftar merchandise di platform ini.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/admin-merchandise')}>
                  Lihat
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Verifikasi Mentor</Card.Title>
                <Card.Text>Verifikasi mentor baru di platform ini.</Card.Text>
                <Button variant="primary" onClick={() => navigate('/admin-verify-mentors')}>
                  Lihat
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdminDashboard;