import React from 'react';
import '../../styles/assets/css/home.css';
import { Container, Button, Col } from 'react-bootstrap';
import Type from './Type';
import HomeTwo from './HomeTwo';
import { Row } from 'react-bootstrap';
import CustomButton from '../Common/CustomButton';

function Home() {
  return (
    <>
      <Container id="hero" className=''>
        <Container className="container hero-container" data-aos="zoom-in" data-aos-delay="100">
          <Container className='hero-content'>
            <Row>
              <Col>
                <h1>Jeremiah Katumo</h1>
                <Row >
                  <Type />
                </Row>
              </Col>
            </Row>

            <Container>
              <Row>
                <h5>Passionate about building tech for social impact.</h5>
              </Row>
            </Container>

            <Container>
              <Row className="social-links">
                <a href="x.com/jeremy_warku" className="x-twitter"><i className="bi bi-twitter"></i></a>
                <a href="github.com/Jeremiah-Katumo" className="facebook"><i className="bi bi-github"></i></a>
                <a href="instagram.com" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="linkedin.com" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </Row>
            </Container>
          </Container>
          {/* <Container className='social-links'> */}
          {/* <Button href="#my-about">
            <a className="find-out-more-btn" href="#about">Find Out More</a>
          </Button> */}
          {/* </Container> */}
          <CustomButton href={"#my-about"} className="find-out-more-btn" label="Find Out More" />
        </Container>
      </Container>
      <HomeTwo id="my-about" />
    </>
  )
}

export default Home