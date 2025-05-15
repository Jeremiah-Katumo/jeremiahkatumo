import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/assets/css/resume.css'; // Ensure styles are loaded

const ResumeCard = ({ date, title, school }) => {
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
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        More content to make the div scrollable...
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae augue sed mauris bibendum porttitor.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Integer ac turpis eu mi tincidunt sodales. Mauris quis ex sed sapien laoreet imperdiet nec at velit.
      </p>

      {/* Optional: Show scroll position below for debugging or interaction */}
      <div className="scroll-indicator">Scroll Y: {scrollY}px</div>
    </div>
  );
};

ResumeCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
};

export default ResumeCard;
