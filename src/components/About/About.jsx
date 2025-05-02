import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import Interests from './Interests'
import Skills from './Skills'

function About() {
  return (
    <>
      <Skills />

      <section>
        <div id="github" class="skills-content-section">
          <h2>GitHub Contributions</h2>
          <GitHubCalendar
            username="Jeremiah-Katumo"
            blockSize={15}
            blockMargin={5}
            color="#196127"
            fontSize={14}
          />
          <div class="calendar">Loading GitHub contributions...</div>
        </div>
      </section>

      <Interests />

    </>
  )
}

export default About