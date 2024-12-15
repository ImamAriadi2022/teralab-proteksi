import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

const UserDashboard = () => {
  const [webinars, setWebinars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [registeredWebinars, setRegisteredWebinars] = useState([]);
  const [attendedWebinars, setAttendedWebinars] = useState([]);

  useEffect(() => {
    // Fetch all webinars (replace with actual API call)
    const allWebinars = [
      { id: 1, title: 'Webinar 1', description: 'Deskripsi 1', thumbnail: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Webinar 2', description: 'Deskripsi 2', thumbnail: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Webinar 3', description: 'Deskripsi 3', thumbnail: 'https://via.placeholder.com/150' },
    ];
    setWebinars(allWebinars);

    // Fetch registered webinars (replace with actual API call)
    const registered = [
      { id: 1, title: 'Webinar 1', description: 'Deskripsi 1', thumbnail: 'https://via.placeholder.com/150' },
    ];
    setRegisteredWebinars(registered);

    // Fetch attended webinars (replace with actual API call)
    const attended = [
      { id: 2, title: 'Webinar 2', description: 'Deskripsi 2', thumbnail: 'https://via.placeholder.com/150' },
    ];
    setAttendedWebinars(attended);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredWebinars = webinars.filter((webinar) =>
    webinar.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <UserNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Webinar</h2>
            <Form.Control
              type="text"
              placeholder="Cari webinar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Semua Webinar</h3>
            <Row>
              {filteredWebinars.map((webinar) => (
                <Col md={4} key={webinar.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Img variant="top" src={webinar.thumbnail} />
                    <Card.Body>
                      <Card.Title>{webinar.title}</Card.Title>
                      <Card.Text>{webinar.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Webinar yang Terdaftar</h3>
            <Row>
              {registeredWebinars.map((webinar) => (
                <Col md={4} key={webinar.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Img variant="top" src={webinar.thumbnail} />
                    <Card.Body>
                      <Card.Title>{webinar.title}</Card.Title>
                      <Card.Text>{webinar.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Webinar yang Telah Diikuti</h3>
            <Row>
              {attendedWebinars.map((webinar) => (
                <Col md={4} key={webinar.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Img variant="top" src={webinar.thumbnail} />
                    <Card.Body>
                      <Card.Title>{webinar.title}</Card.Title>
                      <Card.Text>{webinar.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default UserDashboard;