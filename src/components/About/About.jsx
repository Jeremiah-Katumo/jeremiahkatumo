import React from 'react'
import GithubCalendar from './GitHubCalendar'
import Interests from './Interests/Interests'
import Skills from './Skills/Skills'

function About() {
  return (
    <>
      <Skills />

      <GithubCalendar />

      <Interests />

    </>
  )
}

export default About