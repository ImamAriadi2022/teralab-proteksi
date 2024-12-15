import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

const MyWebinars = () => {
  const [registeredWebinars, setRegisteredWebinars] = useState([]);
  const [attendedWebinars, setAttendedWebinars] = useState([]);

  useEffect(() => {
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

  return (
    <>
      <UserNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Webinar Saya</h2>
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

export default MyWebinars;