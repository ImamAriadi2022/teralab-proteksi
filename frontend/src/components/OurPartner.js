import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../assets/css/OurPartner.css';

const partners = [
  { name: 'Teknik Informatika', logo: 'partner/ti.png' },
  { name: 'Goshi', logo: 'partner/goshi.png' },
  // Tambahkan logo mitra lainnya jika diperlukan
];

const OurPartner = () => {
  const chunkSize = 4; // Jumlah logo per item carousel
  const partnerChunks = [];
  for (let i = 0; i < partners.length; i += chunkSize) {
    partnerChunks.push(partners.slice(i, i + chunkSize));
  }

  return (
    <section className="our-partner py-5">
      <Container>
        <h2 className="text-center mb-4">Our Partners</h2>
        <Carousel>
          {partnerChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                {chunk.map((partner, idx) => (
                  <Col key={idx} md={3} className="d-flex align-items-center justify-content-center">
                    <img
                      src={`${partner.logo}`}
                      alt={partner.name}
                      className="img-fluid partner-logo"
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

export default OurPartner;