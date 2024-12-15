import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';

const AdminWebinars = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    // Fetch webinars (replace with actual API call)
    const fetchedWebinars = [
      { id: 1, title: 'Webinar 1', description: 'Deskripsi 1', time: '2023-10-01 10:00' },
      { id: 2, title: 'Webinar 2', description: 'Deskripsi 2', time: '2023-10-02 14:00' },
    ];
    setWebinars(fetchedWebinars);
  }, []);

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Daftar Webinar</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Judul</th>
                  <th>Deskripsi</th>
                  <th>Waktu</th>
                </tr>
              </thead>
              <tbody>
                {webinars.map((webinar) => (
                  <tr key={webinar.id}>
                    <td>{webinar.id}</td>
                    <td>{webinar.title}</td>
                    <td>{webinar.description}</td>
                    <td>{webinar.time}</td>
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

export default AdminWebinars;