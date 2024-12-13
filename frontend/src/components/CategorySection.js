// src/components/CategorySection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const categories = [
  { img: "Robot.svg", title: "AI" },
  { img: "Programmer coding on laptop.svg", title: "Front End" },
  { img: "Coding and api on laptop.svg", title: "Back End" },
  { img: "Artificial Intelligence powers sound, data analysis and image neural network.svg", title: "UI/UX" },
];

const CategorySection = () => {
  return (
    <section className="category position-relative">
      <span className="title_category bg-white text-black py-1 fs-4 fw-bold">
        Kategori
      </span>
      <Container>
        <div className="wrapper_category">
          <Row>
            {categories.map((category, index) => (
              <Col key={index} xl={3} md={6} className="mb-5 px-4">
                <Card className="box_category bg-white overflow-hidden">
                  <Card.Img
                    variant="top"
                    src={`img/${category.img}`}
                    className="img-fluid" style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="text_category text-center py-2 fw-bold fs-3">
                    {category.title}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
