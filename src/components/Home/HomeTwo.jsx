import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profile from '../../styles/assets/img/profile.jpg';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import '../../styles/assets/css/style.css';
import CustomButton from '../Common/CustomButton';

function HomeTwo() {
  return (
    <>

      <Container fluid id="about" className="home-about-section">
        <Container>
          <h2 className="section-title display-3">Let Me Introduce Myself</h2>
          <Row className="content-section wrapper">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <Col md={8} className="home-about-desc base-box">
                <div className="section-header">
                  <p className="about-paragraph">
                    Hi, I’m Jeremiah Katumo Kurwa - a data and software enthusiast from Kilifi,
                    Kenya. With a background in Statistics and further training in software engineering and
                    data science through PLP Academy and ALX Africa, I’ve built and deployed full-stack
                    applications using languages like:
                    <i>
                      <b className="#0563bb"> R, Python, Javascript and PHP. </b>
                    </i>
                    and frameworks like:
                    <i>
                      <b className="purple"> React.js, Express.js, FastAPI, Django, Shiny and Codeigniter4. </b>
                    </i>
                    I’ve also volunteered as a Data Analyst at CIPK, where I applied data skills to solve real-world challenges.
                  </p>
                </div>
              </Col>
            </motion.div>

            <Col md={4} className="middle-box">
              <p>Black</p>
            </Col>

            <Col md={4} className="top-box">
              <div className="about-content">
                <div className="about-text">
                  <p className='about-paragraph'>
                    In addition to coding, I specialize in creating visually appealing and user-friendly designs. 
                    My work spans branding, UI/UX, and print media - combining creativity with technical skill to 
                    develop meaningful, functional experiences. I’m passionate about building AI-driven tools 
                    and design solutions that improve everyday life, especially for underserved communities.
                  </p>

                  <div className="about-btn-container" data-aos="zoom-out">
                      <CustomButton href={"/Jeremiah Katumo Kurwa, CV.pdf"} className={"bi bi-download"} label={"Resume"} />
                    <CustomButton href={"https://youtube.com/watch"} className={"bi bi-play-circle"} label={"Watch Video"} />
                  </div>
                </div>

                <Tilt className="about-image">
                  <img src={profile} alt="Jeremiah Katumo" className="img-about" />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default HomeTwo;
