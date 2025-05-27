import React from 'react';

const InterestCard = ({ icon, title, description }) => {
  return (
    <div className="interest-card">
      <i className={`fa ${icon}`}></i>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default InterestCard;
