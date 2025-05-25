import React from 'react'
import GithubCalendar from './GitHubCalendar'
import Interests from './Interests/Interests'
import Skills from './Skills/Skills'
import '../../styles/assets/css/about.css'

function About() {
  return (
    <>
      <div id='skills-interests' className='about-container'>
        <div class="lines-wrap">
          <div class="lines-inner">
            <div class="lines"></div>
          </div>
        </div>

        <div className='section-header'>
          {/* <h1 className="big big-2">About Me</h1> */}
          {/* <h2 className='section-title mb-4'>About Me</h2> */}
          <p className='pt-4'>
            A mix of what I do and what I love. From programming languages and <br />
            frameworks to design tools and personal passions - this section <br />
            reflects my professional strengths and what keeps me curious.
          </p>
        </div>

        <Skills />
        <Interests />
        <GithubCalendar />
      </div>

    </>
  )
}

export default About