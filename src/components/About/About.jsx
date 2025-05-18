import React from 'react'
import GithubCalendar from './GitHubCalendar'
import Interests from './Interests/Interests'
import Skills from './Skills/Skills'
import '../../styles/assets/css/about.css'

function About() {
  return (
    <>
      <div id='skills-interests' className='about-container'>
        <div className='section-header'>
          {/* <h1 className="big big-2">About Me</h1> */}
          <h2 className='section-title mb-4'>About Me</h2>
          <p>I'm a passionate data scientist with some interest in software engineering and, a love for technology and problem-solving. I enjoy exploring new programming languages, frameworks, and tools. In my free time, I like to work on personal projects, contribute to open-source, and stay updated with the latest trends in the tech world.</p>
        </div>

        <Skills />
        <Interests />
        <GithubCalendar />
      </div>

    </>
  )
}

export default About