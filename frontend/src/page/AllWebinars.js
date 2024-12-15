import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Card, Button, Modal } from 'react-bootstrap';
import UserNavbar from '../components/UserNavbar';
import Footer from '../components/Footer';

const AllWebinars = () => {
  const [webinars, setWebinars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedWebinar, setSelectedWebinar] = useState(null);

  useEffect(() => {
    // Fetch all webinars (replace with actual API call)
    const allWebinars = [
      { id: 1, title: 'Webinar 1', description: 'Deskripsi 1', time: '2023-10-01 10:00', thumbnail: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Webinar 2', description: 'Deskripsi 2', time: '2023-10-02 14:00', thumbnail: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Webinar 3', description: 'Deskripsi 3', time: '2023-10-03 16:00', thumbnail: 'https://via.placeholder.com/150' },
    ];
    setWebinars(allWebinars);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRegister = (webinar) => {
    setSelectedWebinar(webinar);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWebinar(null);
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
            <h2>Semua Webinar</h2>
            <Form.Control
              type="text"
              placeholder="Cari webinar"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Col>
        </Row>
        <Row>
          {filteredWebinars.map((webinar) => (
            <Col md={4} key={webinar.id} className="mb-3">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={webinar.thumbnail} />
                <Card.Body>
                  <Card.Title>{webinar.title}</Card.Title>
                  <Card.Text>{webinar.description}</Card.Text>
                  <Card.Text>Waktu: {webinar.time}</Card.Text>
                  <Button variant="primary" onClick={() => handleRegister(webinar)}>
                    Daftar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Berhasil Mendaftar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <img src="https://via.placeholder.com/50" alt="Checkmark" className="mb-3" />
            <p>Anda telah berhasil mendaftar untuk webinar {selectedWebinar?.title}.</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AllWebinars;