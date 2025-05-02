import React from 'react'

function Skills() {
  return (
    <>
      <section class="skills-content-section" id="skills">
        <div class="section-header">
          <h2 class="section-title">My Skills</h2>
          <p>Here are some of my proficiencies</p>
        </div>

        <div class="skills-container">
          <div class="skill zoom-element">
            <i class="fas fa-code"></i>
            <p class="skill-name">Web Development</p>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-mobile-alt"></i>
            <p class="skill-name">App Development</p>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-paint-brush"></i>
            <p class="skill-name">UI/UX Design</p>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-server"></i>
            <p class="skill-name">Backend Development</p>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-pen-nib"></i>
            <p class="skill-name">Data Science</p>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-pen-nib"></i>
            <p class="skill-name">Content Writing</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Skills;