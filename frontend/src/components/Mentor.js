import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';

const mentors = [
  { name: 'Muhammad Fatih Alvarendra', role: 'Back-End', image: 'dekan.png' },
  { name: 'Rahmawati Zahra', role: 'Front-End', image: 'wd 1.png' },
  { name: 'Joko Susilo', role: 'AI Specialist', image: 'wd 1.png' },
  // Tambahkan mentor lainnya jika diperlukan
];

const Mentor = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form data: ', formData);
    setFormData({
      name: '',
      email: '',
      role: '',
      message: '',
    });
    handleClose();
  };



  return (
    <section className="mentor position-relative py-5">
      <Container>
        <div className="text-center desc_mentor mb-5">
          <Row>
              <Col>
                  <img
                    src="siger.svg"
                    alt="Siger"
                    className="img-fluid"
                  />
              </Col>
              <Col>
                <h1 className="fw-bold mb-3">Mentor TeraLab</h1>
                <p className="fs-5 mb-4">
                  Bagikan keahlian, inspirasi, dan dampak positif bersama TeraLab.
                </p>
                <Button variant="primary" className="px-4 py-2" style={{ backgroundColor: '#605EA1' }} onClick={handleShow}>
                  Gabung Mentor
                </Button>
              </Col>
              <Col>
                  <img
                    src="siger.svg"
                    alt="Siger"
                    className="img-fluid"
                  />
              </Col>
          </Row>
        </div>

        {/* ini bagian pop up */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulir Pendaftaran Mentor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Nama</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Masukkan bidang yang anda tekuni"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Link Portofolio</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Masukkan link portofolio anda"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
          </Modal.Body>
          </Modal>





        {/* card mentornya */}
        <div className="d-flex overflow-auto wrapper_mentor d-flex justify-content-center">
          {mentors.map((mentor, index) => (
            <div className="wrapper_box_mentor flex-shrink-0 mx-3" key={index}>
              <div className="box_mentor d-flex h-100">
                <div className="text_mentor p-3 pe-4 d-flex flex-column justify-content-between">
                  <div className="h-100 d-flex align-items-center text-center">
                    <h3 className="fs-6 fw-semibold">{mentor.name}</h3>
                  </div>
                  <Button variant="light" className="role_mentor fw-bold">
                    {mentor.role}
                  </Button>
                </div>
                <div className="wrapper_image_mentor">
                  <img
                    src={`img/${mentor.image}`}
                    alt={`${mentor.name}`}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mentor;
