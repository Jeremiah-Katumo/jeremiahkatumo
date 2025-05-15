import React from 'react';
import '../../styles/assets/css/interest.css';
import InterestCard from './InterestCard'; // Adjust the path if needed
import { interests } from '../Objects/Database'

const Interests = () => {
  return (
    <section className="content-section" id="interests">
      <div className="section-header">
        <h2 className="section-title">My Interests</h2>
        <p>Here is what I like most:</p>
      </div>
      <div className="interests-grid">
        {interests.map((interest, index) => (
          <InterestCard
            key={index}
            icon={interest.icon}
            title={interest.title}
            description={interest.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Interests;
