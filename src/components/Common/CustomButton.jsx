import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/assets/css/button.css';

const CustomButton = ({ href, label, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyle = {
    transform: isHovered ? 'scale(1)' : 'scale(0.9)',
    transition: 'transform 0.3s ease',
  };

  return (
    <button
      href={href}
      className={`btn btn-primary ${className}`}
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      &nbsp; {label}
    </button>
  );
};

export default CustomButton;