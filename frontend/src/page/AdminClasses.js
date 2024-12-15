import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';

const AdminClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch classes (replace with actual API call)
    const fetchedClasses = [
      { id: 1, title: 'Kelas 1', description: 'Deskripsi 1' },
      { id: 2, title: 'Kelas 2', description: 'Deskripsi 2' },
    ];
    setClasses(fetchedClasses);
  }, []);

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Daftar Kelas</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Judul</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((kelas) => (
                  <tr key={kelas.id}>
                    <td>{kelas.id}</td>
                    <td>{kelas.title}</td>
                    <td>{kelas.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AdminClasses;