import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ResumeCard from './ResumeCard'; // new component
import { education, experience } from '../Objects/Database';
import '../../styles/assets/css/resume.css';


const Resume = () => {
  return (
    <section id="resume-section">
      <Container>
        <Row className="justify-content-center pb-5">
          <Col md={10} className="heading-section text-center ftco-animate">
            <div className="section-header">
              <h2 className="section-title">My Resume</h2>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </Col>
        </Row>

        <Col>
          <Row md={4} className="resume-card-container">
            {education.map((item, idx) => (
              <ResumeCard
                key={idx}
                date={item.date}
                title={item.title}
                school={item.school}
              />
            ))}
          </Row>

          <Row md={4} className="resume-card-container">
            {experience.map((item, idx) => (
              <ResumeCard
                key={idx}
                date={item.date}
                title={item.title}
                school={item.school}
              />
            ))}
          </Row>
        </Col>

        <Row className="justify-content-center mt-5 resume-btn-container">
          <Col md={6} className="text-center ftco-animate">
            <Button href="#" className="btn btn-primary resume-btn">
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
