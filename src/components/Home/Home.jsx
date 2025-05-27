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
                <h1 className='display-4'>Jeremiah Katumo</h1>
                <Row >
                  <Type />
                </Row>
              </Col>
            </Row>

            <Container className='bio-text'>
              <Row>
                <h5>Passionate about building tech for social impact.</h5>
              </Row>
            </Container>
          </Container>
          <CustomButton href={"#my-about"} className="find-out-more-btn" label="Find Out More" />
        </Container>
      </Container>
      <HomeTwo id="my-about" />
    </>
  )
}

export default Home