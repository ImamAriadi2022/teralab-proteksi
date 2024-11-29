// src/components/LandingPage.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LandingPage = () => {
  return (
    <section className="landing_page">
      <Container>
        <div className="box_landing">
          <Row>
            <Col lg={5} className="mb-lg-0 mb-5">
              <div className="d-flex align-items-center h-100">
                <div>
                  <h1 className="fw-bold mb-3" style={{ color: "#22177A", fontSize: "50px" }}>
                    Selamat datang di TeraLab
                  </h1>
                  <p style={{ color: "#00000099" }}>
                    Belajar Mudah, Terjangkau, dan Inklusif dengan TeraLab. Jelajahi berbagai course untuk membangun masa depanmu bersama TeraLab.
                  </p>
                  <Button
                    href="#mulai-belajar"
                    style={{ backgroundColor: "#605EA1" }}
                    className="text-white p-3"
                  >
                    Mulai Belajar
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={7} className="d-flex align-items-center">
              <img
                src="img/image3.png"
                alt="Landing"
                className="img-fluid"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default LandingPage;
