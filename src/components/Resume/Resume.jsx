import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../assets/css/resume.css'; // Keep your custom CSS

const ResumeSection = () => {
  return (
    <section id="resume-section">
      <Container>
        <Row className="justify-content-center pb-5">
          <Col md={10} className="heading-section text-center ftco-animate">
            <div className="section-header">
              <h2 className='section-title'>My Resume</h2>
              <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </Col>
        </Row>
        <Col>
          <Row md={4} className='resume-card-container'>
            {[
              { date: "2018-2023", title: "Bsc in Statistics" , school: "Taita Taveta University"},
              { date: "2025-Ongoing", title: "Software Engineering" , school: "Power Learn Project"},
              { date: "2025-Ongoing", title: "Data Science" , school: "ALX Africa"},
            ].map((item, idx) => (
              <div className="resume-wrap ftco-animate" key={idx}>
                <span className="date">{item.date}</span>
                <h2>{item.title}</h2>
                <span className="position"><h3>{item.school}</h3></span>
                <p className="mt-4">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            ))}
          </Row>
          <Row md={4} className='resume-card-container'>
            {[
              { date: "2014-2015", title: "Art & Creative Director" },
              { date: "2014-2015", title: "Wordpress Developer" },
              { date: "2017-2018", title: "UI/UX Designer" },
            ].map((item, idx) => (
              <div className="resume-wrap ftco-animate" key={idx}>
                <span className="date">{item.date}</span>
                <h2>{item.title}</h2>
                <span className="position"><h3>Cambridge University</h3></span>
                <p className="mt-4">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.
                  It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
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

export default ResumeSection;
