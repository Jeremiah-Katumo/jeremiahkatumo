import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/assets/css/project.css';
import HireMe from './HireMe';
import ProjectCard from './ProjectCard';
import SectionHeader from '../Fragments/SectionHeader';
import { data, sectionHeaderData } from '../Utils/Database';
// import { groupProjectsInRows } from '../Utils/Dependencies';
import SlidingText from '../Common/SlidingText';

function Projects() {
  // const rows = groupProjectsInRows(data);

  return (
    <Container id="projects" className="project-container">
      <div class="lines-wrap">
        <div class="lines-inner">
          <div class="lines"></div>
        </div>
      </div>

      <Container className="projects-section">
        <div class="lines-wrap">
          <div class="lines-inner">
            <div class="lines"></div>
          </div>
        </div>
        <SlidingText />
        <SectionHeader data={sectionHeaderData} />

        <Container className="project-card-container">
          {data.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              link={project.link}
              imageLink={project.imageLink}
            />
          ))}
        </Container>

        <HireMe />
      </Container>
    </Container>
  );
}

export default Projects;
