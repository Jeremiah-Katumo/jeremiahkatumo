// components/SkillCard.jsx
import React from 'react';

function SkillCard({ iconClass, title }) {
  return (
    <div className="skill zoom-element">
      <div className='skill-content'>
        <i className={iconClass}></i>
        <h3 className="skill-name">{title}</h3>
      </div>
    </div>
  );
}

export default SkillCard;
