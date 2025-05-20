import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import '../../styles/assets/css/github-calendar.css'

const GithubCalendar = () => {
  return (
    <div id="github" class="github-content-section">
      <h2>GitHub Contributions</h2>
      <div className='github-calendar'>
        <GitHubCalendar
          username="Jeremiah-Katumo"
          // blockSize={15}
          // blockMargin={5}
          // color="#FF6500"
          // fontSize={14}
        />
      </div>
      <div class="calendar">Loading GitHub contributions...</div>
    </div>
  );
};

export default GithubCalendar;
