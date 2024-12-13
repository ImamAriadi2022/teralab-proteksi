import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/About.css';

const teamMembers = [
  { name: 'Muhammad Fatih Alvarendra', role: 'CEO', image: 'ceo.png' },
  { name: 'Rahmawati Zahra', role: 'CTO', image: 'cto.png' },
  { name: 'Joko Susilo', role: 'AI Specialist', image: 'ai_specialist.png' },
  // Tambahkan anggota tim lainnya jika diperlukan
];

const About = () => {
  return (
    <div>
      <Navbar />
      <Container className="about-section py-5">
        <h2 className="text-center mb-4">Tentang TeraLab</h2>
        <p className="text-center mb-5">
          TeraLab adalah platform pendidikan yang bertujuan untuk menyediakan kursus berkualitas tinggi
          dalam berbagai bidang teknologi. Kami berkomitmen untuk membantu Anda membangun masa depan yang lebih baik
          dengan menyediakan akses ke sumber daya pendidikan yang mudah diakses dan terjangkau.
        </p>
        <h3 className="text-center mb-4">Tim Kami</h3>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="team-card">
                <Card.Img variant="top" src={`img/${member.image}`} className="team-image" />
                <Card.Body className="text-center">
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.role}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default About;