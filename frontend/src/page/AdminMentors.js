import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';

const AdminMentors = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors (replace with actual API call)
    const fetchedMentors = [
      { id: 1, name: 'Mentor 1', email: 'mentor1@example.com' },
      { id: 2, name: 'Mentor 2', email: 'mentor2@example.com' },
    ];
    setMentors(fetchedMentors);
  }, []);

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Daftar Mentor</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {mentors.map((mentor) => (
                  <tr key={mentor.id}>
                    <td>{mentor.id}</td>
                    <td>{mentor.name}</td>
                    <td>{mentor.email}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminMentors;