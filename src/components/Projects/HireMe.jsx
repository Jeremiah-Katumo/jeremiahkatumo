import React from 'react';
import '../../styles/assets/css/project.css';
import { Container } from 'react-bootstrap';
import CustomButton from '../Common/CustomButton';

const HireMe = () => {
  return (
    <>
      <Container id="freelance" className="hire-me ftco-section img margin-top">
        <Container className="hire-me-container">
          <Container className="text-container">
            <h2>
              I'm <span>Available </span>for freelancing
            </h2>
            <p>
              If you're looking for someone to help with web development, data analysis, or building custom solutions, feel free to reach out.
            </p>
            <CustomButton href="#contact" label="Hire Me" className="bi bi-briefcase" />
          </Container>
        </Container>
      </Container>
    </>
  );
};

export default HireMe;
