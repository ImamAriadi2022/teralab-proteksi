import React, { useState, useEffect } from 'react';
import axios from '../../utils/api';
import { Container, Table, Button, Modal, Form, Spinner, Alert } from 'react-bootstrap';

const DashboardMentor = () => {
  const [webinars, setWebinars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [newWebinar, setNewWebinar] = useState({
    title: '',
    date: '',
    zoomLink: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch webinars created by mentor
    axios
      .get('/mentor/webinars')
      .then((res) => {
        setWebinars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch webinars');
        setLoading(false);
      });
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleChange = (e) => {
    setNewWebinar({
      ...newWebinar,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddWebinar = (e) => {
    e.preventDefault();
    axios
      .post('/mentor/webinars', newWebinar)
      .then((res) => {
        setWebinars([...webinars, res.data]);
        handleClose();
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to add webinar');
      });
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Mentor Dashboard</h1>

      {error && <Alert variant="danger">{error}</Alert>}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Your Webinars</h2>
        <Button variant="primary" onClick={handleShow}>
          Add Webinar
        </Button>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : webinars.length === 0 ? (
        <p className="text-center">No webinars found. Add your first webinar!</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
              <th>Zoom Link</th>
            </tr>
          </thead>
          <tbody>
            {webinars.map((webinar) => (
              <tr key={webinar.id}>
                <td>{webinar.id}</td>
                <td>{webinar.title}</td>
                <td>{webinar.date}</td>
                <td>
                  <a href={webinar.zoomLink} target="_blank" rel="noopener noreferrer">
                    Zoom Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Modal for adding a new webinar */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Webinar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddWebinar}>
            <Form.Group className="mb-3" controlId="formWebinarTitle">
              <Form.Label>Webinar Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter webinar title"
                name="title"
                value={newWebinar.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWebinarDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newWebinar.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formWebinarZoomLink">
              <Form.Label>Zoom Link</Form.Label>
              <Form.Control
                type="url"
                placeholder="Enter Zoom link"
                name="zoomLink"
                value={newWebinar.zoomLink}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Webinar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default DashboardMentor;
