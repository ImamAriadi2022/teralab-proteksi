import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table, Modal } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer'

const AdminVerifyMentors = () => {
  const [mentors, setMentors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  useEffect(() => {
    // Fetch mentors to verify (replace with actual API call)
    const fetchedMentors = [
      { id: 1, name: 'Mentor 1', email: 'mentor1@example.com', identity: 'Identitas Mentor 1' },
      { id: 2, name: 'Mentor 2', email: 'mentor2@example.com', identity: 'Identitas Mentor 2' },
    ];
    setMentors(fetchedMentors);
  }, []);

  const handleVerify = (mentorId) => {
    // Verify mentor (replace with actual API call)
    setMentors(mentors.filter((mentor) => mentor.id !== mentorId));
  };

  const handleReject = (mentorId) => {
    // Reject mentor (replace with actual API call)
    setMentors(mentors.filter((mentor) => mentor.id !== mentorId));
  };

  const handleViewIdentity = (mentor) => {
    setSelectedMentor(mentor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMentor(null);
  };

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Verifikasi Mentor Baru</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {mentors.map((mentor) => (
                  <tr key={mentor.id}>
                    <td>{mentor.id}</td>
                    <td>{mentor.name}</td>
                    <td>{mentor.email}</td>
                    <td>
                      <Button variant="info" className="me-2" onClick={() => handleViewIdentity(mentor)}>
                        Lihat Identitas
                      </Button>
                      <Button variant="success" className="me-2" onClick={() => handleVerify(mentor.id)}>
                        Verifikasi
                      </Button>
                      <Button variant="danger" onClick={() => handleReject(mentor.id)}>
                        Tolak
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer/>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Identitas Mentor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedMentor && (
            <div>
              <p><strong>ID:</strong> {selectedMentor.id}</p>
              <p><strong>Nama:</strong> {selectedMentor.name}</p>
              <p><strong>Email:</strong> {selectedMentor.email}</p>
              <p><strong>Identitas:</strong> {selectedMentor.identity}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdminVerifyMentors;