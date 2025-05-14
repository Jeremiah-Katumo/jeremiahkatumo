import React from 'react';
import '../../styles/assets/css/home.css';
import { Container } from 'react-bootstrap';
import Type from './Type';
import HomeTwo from './HomeTwo';
import { Row } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container id="hero" className='section-tag d-flex flex-column justify-content-start align-items-center'>
        <Container className="container hero-container" data-aos="zoom-in" data-aos-delay="100">
          <Container className='hero-content'>
            <Row>
              <h1>Jeremiah Katumo</h1>
            </Row>
            <Row >
              <Type />
            </Row>
            <Row className="social-links">
              <a href="twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
              {/* <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> */}
              <a href="linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </Row>
          </Container>
          <Container className='social-links'>
            <a class="find-out-more-btn" href="#about">Find Out More</a>
          </Container>
        </Container>
      </Container>
      <HomeTwo />
    </>
  )
}

export default Home