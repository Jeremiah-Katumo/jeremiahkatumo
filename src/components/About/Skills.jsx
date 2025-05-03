import React from 'react'
import '../../assets/css/skill.css'

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
            <h3 class="skill-name">Web Development</h3>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-mobile-alt"></i>
            <h3 class="skill-name">App Development</h3>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-paint-brush"></i>
            <h3 class="skill-name">UI/UX Design</h3>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-server"></i>
            <h3 class="skill-name">Backend Development</h3>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-pen-nib"></i>
            <h3 class="skill-name">Data Science</h3>
          </div>
          <div class="skill zoom-element">
            <i class="fas fa-pen-nib"></i>
            <h3 class="skill-name">Content Writing</h3>
            {/* <div class="progress">
              <div class="progress-bar color-6 filled-80">
                <span>80%</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

    </>
  )
}

export default Skills;