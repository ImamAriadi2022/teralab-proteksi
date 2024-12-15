import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer'

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users (replace with actual API call)
    const fetchedUsers = [
      { id: 1, name: 'User 1', email: 'user1@example.com' },
      { id: 2, name: 'User 2', email: 'user2@example.com' },
    ];
    setUsers(fetchedUsers);
  }, []);

  return (
    <>
      <AdminNavbar />
      <Container>
        <Row className="my-4">
          <Col>
            <h2>Daftar User</h2>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nama</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
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

export default AdminUsers;