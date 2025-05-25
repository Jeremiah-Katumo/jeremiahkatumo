// components/Skills.jsx
import React, { useEffect, useRef } from 'react';
import SkillCard from './SkillCard';
import '../../../styles/assets/css/skill.css';
import { skillsData } from '../../Utils/Database';
import 'animate.css';

function Skills() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50) {
            card.classList.add('animate__animated', 'animate__fadeInUp');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger on mount in case cards are already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="skills-content-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">My Skills</h2>
        {/* <p>
          A mix of what I do and what I love. From programming languages and <br />
          frameworks to design tools and personal passions - this section <br />
          reflects my professional strengths and what keeps me curious.
        </p> */}
      </div>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            className="skill-card-wrapper"
          >
            <SkillCard
              iconClass={skill.iconClass}
              title={skill.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
