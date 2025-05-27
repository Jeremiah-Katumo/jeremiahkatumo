import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const ProjectCard = ({ title, category, link, imageNum, imageLink }) => {
  const [hovered, setHovered] = useState(false);
  const cardClass = `project-card project-img ${imageNum}`;
  const dynamicStyles = hovered
          ? {
              backgroundImage: `url(${imageLink})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
              transition: 'opacity 0.3s ease'
            }
          : {
              opacity: 0,
              transition: 'opacity 0.3s ease'
            };

  return (
    <Container
      className={cardClass + (hovered ? ' hovered' : '')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={dynamicStyles}
    >
      {hovered && (
        <>
          <Container className="overlay"></Container>
          <Container className="text">
            <h3><a href={link}>{title}</a></h3>
            <span>{category}</span>
          </Container>
        </>
      )}
    </Container>
  );
};

export default ProjectCard;