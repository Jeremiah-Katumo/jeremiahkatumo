// components/Skills.jsx
import React from 'react';
import SkillCard from './SkillCard';
import '../../../styles/assets/css/skill.css';
import { skillsData } from '../../Objects/Database';

function Skills() {
  return (
    <section className="skills-content-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        <p>Here are some of my proficiencies</p>
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            iconClass={skill.iconClass}
            title={skill.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
