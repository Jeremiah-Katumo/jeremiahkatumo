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
          <div className="hero-content">
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
    </main>
  );
};

export default Hero;
