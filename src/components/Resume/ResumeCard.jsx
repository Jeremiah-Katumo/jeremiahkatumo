import React, { useEffect, useRef } from 'react';

const ResumeCard = ({ date, title, school, description, position }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.maxHeight = '120px';
      scrollRef.current.style.overflowY = 'auto';
    }
  }, []);

  return (
    <div className={`timeline-item ${position}`}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <span className="timeline-date">{date}</span>
        <p className="h4">{school}</p>
        <div ref={scrollRef}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
