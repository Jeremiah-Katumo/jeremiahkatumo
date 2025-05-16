import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profile from '../../styles/assets/img/profile.png';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import '../../styles/assets/css/style.css';

function HomeTwo() {
  return (
    <>

      <Container fluid id="about" className="home-about-section">
        <Container>
          <h2 className="section-title">Let Me Introduce Myself</h2>
          <Row className="content-section wrapper">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <Col md={8} className="home-about-desc base-box">
                <div className="section-header">
                  <p className="about-paragraph">
                    Hi, I’m Jeremiah Katumo Kurwa - a design, data and software enthusiast from Kilifi,
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

                    {/* With years of experience, I also specialize in creating visually appealing designs that 
                    enhance user experience. My approach combines creativity with technical expertise to 
                    develop unique and functional designs. Whether it's branding, UI/UX, or print media, I am 
                    committed to bringing ideas to life. */}

                    {/* My interest's rely in building new&nbsp;
                    <i>
                      <b className="purple">ML and Web Technologies Products.</b>
                    </i>
                    <br />
                    <br />
                    Whenever possible, my passion for coding relies on{" "}
                    <b className="purple">JavaScript, Python, Golang, R, MongoDB, MySQL</b> and
                    <i> Modern Library and Frameworks</i>
                    &nbsp; like{" "} */}

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
                    <div className="download-btn-container">
                      <a
                        href="../portfolio/Jeremiah Katumo Kurwa, CV.pdf"
                        download="Jeremiah_Katumo_Resume.pdf"
                        className="download-btn"
                      >
                        <i className="fa fa-download"></i> Resume
                      </a>
                    </div>

                    {/* <div className="call-to-action-btn"> */}
                    {/* <a
                        href="https://www.youtube.com/watch"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-play-circle"></i> Watch Video
                      </a> */}
                    <Button href="https://www.youtube.com/watch" className="call-to-action-btn btn btn-primary resume-btn">
                      <i className="fa fa-play-circle"></i> Watch Video
                    </Button>
                    {/* </div> */}
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
