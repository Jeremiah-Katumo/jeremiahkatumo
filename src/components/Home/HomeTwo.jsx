import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import profile from '../../assets/img/profile.png';
import Tilt from 'react-parallax-tilt';
import '../../assets/css/style.css';


function HomeTwo() {
  return (
    <>
      <Container fluid id='about' className='home-about-section'>
        <Container>
          <h2 class="section-title">LET ME INTRODUCE MYSELF</h2>
          <Row className='content-section wrapper'>
            <Col md={8} className='home-about-desc base-box'>
              <div class="section-header">

                <p class="about-paragraph">
                  {/* I am a passionate and dedicated designer with a keen eye for detail and a strong foundation in web
                    and graphic design.
                    I have collaborated with various clients, including startups, multinational corporations, and
                    corporate events,
                    delivering creative solutions that stand out. */}
                  I fell in ❤️ with tech and since then I'm proud to think that
                  earned something in programming... 🤷‍♂️🤷‍♂️.
                  I am proficent in the following languages: <i><b className='#0563bb'>R, Python, Javascript, Go and Kotlin. </b></i>
                  My interest's rely in building new &nbsp;
                  <i>
                    <b className="purple">ML and Web Technologies Products.</b>
                  </i>
                  <br />
                  <br />
                  Whenever possible, my passion for coding relies on
                  <b className="purple"> JavaScript, Python, Golang, R, MongoDB, MySQL</b> and
                  <i>
                    {" "}
                    Modern Library and Frameworks
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> React.js, Nest.js, Next.js, Express.js, FastAPI, Django, Shiny, Laravel and Codeigniter4.</b>
                  </i>
                </p>
              </div>

            </Col>
            <Col md={4} className="top-box">
              {/* <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt> */}
              <div class="about-content">
                <div class="about-text">
                  {/* <div> */}
                    <p>
                      With years of experience, I specialize in creating visually appealing designs that enhance user
                      experience. My approach combines creativity with technical expertise to develop unique and functional
                      designs. Whether it's branding, UI/UX, or print media, I am committed to bringing ideas to life.
                    </p>
                  {/* </div> */}

                  <div className="about-btn-container" data-aos="zoom-out">
                    <div class="download-btn-container">
                      <a href="../portfolio/Jeremiah Katumo Kurwa, CV.pdf" download="Jeremiah_Katumo_Resume.pdf"
                        class="download-btn">Download Resume</a>
                    </div>
                    <div class="call-to-action-btn">
                      <h3>Call To Action</h3>
                      <a href="https://www.youtube.com/watch" class="cta-button" target="_blank">
                        <i class="fa fa-play-circle"></i> Watch Video
                      </a>
                    </div>
                  </div>

                </div>
                <Tilt class="about-image">
                  <img src={profile} alt="Jeremiah Katumo" class="img-about" />
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default HomeTwo