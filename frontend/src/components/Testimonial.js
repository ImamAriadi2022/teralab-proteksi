import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';


const testimonials = [
  {
    name: 'Andi Saputra',
    feedback: 'TeraLab memberikan pengalaman belajar yang luar biasa dengan mentor-mentor profesional dan materi yang relevan.',
    image: 'wd 1.png',
    position: 'Software Engineer',
  },
  {
    name: 'Siti Aisyah',
    feedback: 'Saya sangat terbantu oleh TeraLab, terutama dalam membangun portofolio untuk karier saya di bidang teknologi.',
    image: 'dekan.png',
    position: 'UI/UX Designer',
  },
  {
    name: 'Rendra Permana',
    feedback: 'Lingkungan belajar yang mendukung dan materi berkualitas membuat saya lebih percaya diri untuk menghadapi tantangan karier.',
    image: 'image3.png',
    position: 'Data Scientist',
  },
  // Tambahkan data testimonial lainnya jika diperlukan
];

const Testimonial = () => {
  return (
    <section className="testimonial py-5">
      <Container>
        <div className="text-center mb-4">
          <h1 className="fw-bold mb-3">Apa Kata Mereka?</h1>
          <p className="fs-5">Cerita dari mereka yang telah merasakan manfaat dari TeraLab.</p>
        </div>
        <Carousel indicators={false} interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} className="text-center">
                  <img
                    src={`img/${testimonial.image}`}
                    alt={`${testimonial.name}`}
                    className="img-fluid rounded-circle mb-4"
                    style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                  />
                  <blockquote className="blockquote">
                    <p className="mb-4">{`"${testimonial.feedback}"`}</p>
                  </blockquote>
                  <h5 className="fw-bold">{testimonial.name}</h5>
                  <p className="text-muted">{testimonial.position}</p>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonial;
