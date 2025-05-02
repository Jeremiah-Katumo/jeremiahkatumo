import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import profile from '../../assets/img/profile.png';
import Tilt from 'react-parallax-tilt';
import '../../assets/css/style.css';

function HomeTwo() {
  return (
    <>
      <Container fluid id="about" className="home-about-section">
        <Container>
          <h2 className="section-title">Let Me Introduce Myself</h2>
          <Row className="content-section wrapper">
            <Col md={8} className="home-about-desc base-box">
              <div className="section-header">
                <p className="about-paragraph">
                  I fell in ❤️ with tech and since then I'm proud to think that
                  earned something in programming... 🤷‍♂️🤷‍♂️.
                  I am proficent in the following languages:{" "}
                  <i>
                    <b className="#0563bb">R, Python, Javascript, Go and Kotlin. </b>
                  </i>
                  My interest's rely in building new&nbsp;
                  <i>
                    <b className="purple">ML and Web Technologies Products.</b>
                  </i>
                  <br />
                  <br />
                  Whenever possible, my passion for coding relies on{" "}
                  <b className="purple">JavaScript, Python, Golang, R, MongoDB, MySQL</b> and
                  <i> Modern Library and Frameworks</i>
                  &nbsp; like{" "}
                  <i>
                    <b className="purple">
                      React.js, Nest.js, Next.js, Express.js, FastAPI, Django, Shiny, Laravel and Codeigniter4.
                    </b>
                  </i>
                </p>
              </div>
            </Col>

            <Col md={4} className="top-box">
              <div className="about-content">
                <div className="about-text">
                  <p>
                    With years of experience, I specialize in creating visually appealing designs that enhance user
                    experience. My approach combines creativity with technical expertise to develop unique and functional
                    designs. Whether it's branding, UI/UX, or print media, I am committed to bringing ideas to life.
                  </p>

                  <div className="about-btn-container" data-aos="zoom-out">
                    <div className="download-btn-container">
                      <a
                        href="../portfolio/Jeremiah Katumo Kurwa, CV.pdf"
                        download="Jeremiah_Katumo_Resume.pdf"
                        className="download-btn"
                      >
                        Download Resume
                      </a>
                    </div>

                    <div className="call-to-action-btn">
                      <h3>Call To Action</h3>
                      <a
                        href="https://www.youtube.com/watch"
                        className="cta-button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-play-circle"></i> Watch Video
                      </a>
                    </div>
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
