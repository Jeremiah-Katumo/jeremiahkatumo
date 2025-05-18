import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ResumeCard from './ResumeCard'; // new component
import { education, experience } from '../Utils/Database';
import '../../styles/assets/css/resume.css';


const Resume = () => {
  return (
    <section id="resume-section">
      <Container>
        <Row className="justify-content-center pb-5">
          <Col md={10} className="heading-section text-center ftco-animate">
            <div className="section-heading">
              <h2 className="section-title">My Resume</h2>
              <p>
                An overview of my education, professional experience, and technical background. Download my resume or browse through the highlights of my journey so far.
              </p>
            </div>
          </Col>
        </Row>

        <Col>
          <div className="resume-card-container">
            {education.map((item, idx) => (
              <ResumeCard
                key={idx}
                date={item.date}
                title={item.title}
                school={item.school}
              />
            ))}
          </div>

          <div className="resume-card-container">
            {experience.map((item, idx) => (
              <ResumeCard
                key={idx}
                date={item.date}
                title={item.title}
                school={item.school}
              />
            ))}
          </div>
        </Col>

        <Row className="justify-content-center mt-5 resume-btn-container">
          <Col className="text-center ftco-animate main-btn-container">
            <Button href="#" className="btn btn-primary resume-btn">
              <icon href="/send-message" className="bi bi-download"></icon> Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
