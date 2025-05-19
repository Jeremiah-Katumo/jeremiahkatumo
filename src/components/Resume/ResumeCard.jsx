import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/assets/css/resume.css'; // Ensure styles are loaded

const ResumeCard = ({ date, title, school, description: text }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop } = event.target;
    setScrollY(scrollTop);
  };

  return (
    <div className="resume-wrap ftco-animate">
      <span className="date">{date}</span>
      <h2>{title}</h2>
      <span className="position">
        <h3>{school}</h3>
      </span>

      <p className="mt-4 scrollable" onScroll={handleScroll}>
        {text}
      </p>

      {/* Optional: Show scroll position below for debugging or interaction */}
      {/* <div className="scroll-indicator">Scroll Y: {scrollY}px</div> */}
    </div>
  );
};

ResumeCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ResumeCard;
