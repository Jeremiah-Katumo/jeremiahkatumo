import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
// import { FaLinkedinIn } from 'react-icons/fa';
import '../styles/assets/css/footer.css'

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <>
    <footer id="footer">
      <Col className="footer-content d-flex flex-direction-column align-items-center justify-contents-center">
        <h3>Jeremiah Katumo</h3>
        <p className='footer-description'>I’m a passionate software developer focused on building accessible, user-friendly web applications with React, Node.js, and modern web technologies.</p>
        <Row className="social-links">
          <a 
            href="https://x.com/jeremy_warku" 
            className="footer-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='bi bi-twitter'></i>
          </a>
          <a 
            href="https://github.com/Jeremiah-Katumo" 
            className="footer-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='bi bi-github'></i>
          </a>
          <a 
            href="https://www.instagram.com/jeremykatumo/profilecard/?igsh=N2pwaDlpcmU4b3k4" 
            className="footer-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='bi bi-instagram'></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/jeremiah-kurwa-27556b230/" 
            className="footer-icon"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='bi bi-linkedin'></i>
          </a>
        </Row>
        <Row className="copyright d-flex">
          <p>&copy; Copyright <strong><span>{year} MyPortfolio</span></strong>. All Rights Reserved</p>
        </Row>
        <Row className="credits">
          <p>Designed by @JeremyKatush</p>
        </Row>
      </Col>
    </footer>
    </>
  );
}

export default Footer;