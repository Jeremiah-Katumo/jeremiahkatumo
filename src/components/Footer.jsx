import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import '../styles/assets/css/footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
    <Container id="footer">
      <Col className="footer-content d-flex flex-direction-column align-items-center justify-contents-center">
        <h3>Jeremiah Katumo</h3>
        <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
        <Row className="social-links">
          <a 
            href="https://twitter.com" 
            className="twitter"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineTwitter />
          </a>
          <a 
            href="https://github.com/Jeremiah-Katumo" 
            className="github"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a 
            href="instagram.com" 
            className="instagram"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
          {/* <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a> */}
          <a 
            href="linkedin.com" 
            className="linkedin"
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </Row>
        <Row className="copyright d-flex">
          <p>&copy; Copyright <strong><span>{year} MyPortfolio</span></strong>. All Rights Reserved</p>
        </Row>
        <Row className="credits">
          <p>Designed by @JeremyKatush</p>
        </Row>
      </Col>
    </Container>
    </>
  );
}

export default Footer;