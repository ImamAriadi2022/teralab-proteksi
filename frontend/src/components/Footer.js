import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
  return (
    <footer className="py-5 text-white" style={{ backgroundColor: '#201D50' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src="img/logo.svg"
              alt="TeraLab Logo"
              className="icon_teralab_footer mb-2"
            />
            <p className="mb-0">TeraLab - Build Your Future</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p className="mb-0">&copy; {new Date().getFullYear()} TeraLab. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
