import React from 'react';
import '../../assets/css/style.css';
import { Container } from 'react-bootstrap';
import Type from './Type';
import HomeTwo from './HomeTwo';
import { Row } from 'react-bootstrap';

function Home() {
  return (
    <>
    <Container id="hero" className='section-tag d-flex flex-column justify-content-center align-items-center'>
      <Container className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Jeremiah Katumo</h1>
        <Type />
        <Row className="social-links">
          <a href="twitter.com" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="facebook.com" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="instagram.com" className="instagram"><i className="bx bxl-instagram"></i></a>
          {/* <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> */}
          <a href="linkedin.com" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </Row>
      </Container>
    </Container>
    <HomeTwo />
    </>
  )
}

export default Home