// components/SkillCard.jsx
import React from 'react';

function SkillCard({ iconClass, title }) {
  return (
    <div className="skill zoom-element">
      <i className={iconClass}></i>
      <h3 className="skill-name">{title}</h3>
    </div>
  );
}

export default SkillCard;
