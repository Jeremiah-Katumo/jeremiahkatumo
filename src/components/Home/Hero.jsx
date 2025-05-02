import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <Container>
          <div className="hero-content text-center">
            <h2>Jeremiah Katumo</h2>
            <p>
              I'm a <span id="typed"></span>
            </p>
            <div className="social-links">
              <Button href="#about" className="find-out-more-btn">
                Find Out More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer Section (uncomment if needed) */}
      {/* 
      <footer className="footer">
        <Container>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="social-link" href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link" href="https://x.com/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="list-inline-item">
              <a className="social-link" href="https://github.com/Jeremiah-Katumo">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
          <p className="text-muted">Copyright &copy; Jeremiah Katumo Kurwa 2025</p>
        </Container>
      </footer>
      */}
    </main>
  );
};

export default Hero;
