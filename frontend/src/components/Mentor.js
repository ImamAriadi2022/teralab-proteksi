import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const mentors = [
  { name: 'Muhammad Fatih Alvarendra', role: 'Back-End', image: 'dekan.png' },
  { name: 'Rahmawati Zahra', role: 'Front-End', image: 'wd 1.png' },
  { name: 'Joko Susilo', role: 'AI Specialist', image: 'wd 1.png' },
  // Tambahkan mentor lainnya jika diperlukan
];

const Mentor = () => {
  return (
    <section className="mentor position-relative py-5">
      <Container>
        <div className="text-center desc_mentor mb-5">
          <h1 className="fw-bold mb-3">Mentor TeraLab</h1>
          <p className="fs-5 mb-4">
            Bagikan keahlian, inspirasi, dan dampak positif bersama TeraLab.
          </p>
          <Button variant="primary" className="px-4 py-2" style={{ backgroundColor: '#605EA1' }}>
            Gabung Mentor
          </Button>
        </div>
        <div className="d-flex overflow-auto wrapper_mentor">
          {mentors.map((mentor, index) => (
            <div className="wrapper_box_mentor flex-shrink-0 mx-3" key={index}>
              <div className="box_mentor d-flex h-100">
                <div className="text_mentor p-3 pe-4 d-flex flex-column justify-content-between">
                  <div className="h-100 d-flex align-items-center text-center">
                    <h3 className="fs-6 fw-semibold">{mentor.name}</h3>
                  </div>
                  <Button variant="light" className="role_mentor fw-bold">
                    {mentor.role}
                  </Button>
                </div>
                <div className="wrapper_image_mentor">
                  <img
                    src={`img/${mentor.image}`}
                    alt={`${mentor.name}`}
                    className="img-fluid rounded"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Mentor;
