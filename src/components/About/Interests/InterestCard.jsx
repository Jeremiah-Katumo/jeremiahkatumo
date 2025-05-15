import React from 'react';

const InterestCard = ({ icon, title, description }) => {
  return (
    <div className="interest-card">
      <i className={`fa ${icon}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default InterestCard;
