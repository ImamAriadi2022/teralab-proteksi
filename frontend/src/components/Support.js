import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../assets/css/Support.css';

const supports = [
  { name: 'Support 1', logo: 'support1.png' },
  { name: 'Support 2', logo: 'support2.png' },
  { name: 'Support 3', logo: 'support3.png' },
  { name: 'Support 4', logo: 'support4.png' },
  { name: 'Support 5', logo: 'support5.png' },
  { name: 'Support 6', logo: 'support6.png' },
  // Tambahkan logo support lainnya jika diperlukan
];

const Support = () => {
  const chunkSize = 4; // Jumlah logo per item carousel
  const supportChunks = [];
  for (let i = 0; i < supports.length; i += chunkSize) {
    supportChunks.push(supports.slice(i, i + chunkSize));
  }

  return (
    <section className="support-section py-5">
      <Container>
        <h2 className="text-center mb-4">Our Supporters</h2>
        <Carousel>
          {supportChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map((support, idx) => (
                  <Col key={idx} md={3} className="d-flex align-items-center justify-content-center">
                    <img
                      src={`img/${support.logo}`}
                      alt={support.name}
                      className="img-fluid support-logo"
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Support;