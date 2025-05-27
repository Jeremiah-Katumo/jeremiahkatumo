import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/assets/css/project.css';
import HireMe from './HireMe';
import ProjectCard from './ProjectCard';
import SectionHeader, { SectionHeaderDouble } from '../Fragments/SectionHeader';
import { data, sectionHeaderData } from '../Utils/Database';
// import { groupProjectsInRows } from '../Utils/Dependencies';
import SlidingText from '../Common/SlidingText';

function Projects() {
  // const rows = groupProjectsInRows(data);

  return (
    <Container id="projects" className="project-container">

      <Container className="projects-section">
        <div class="lines-wrap">
          <div class="lines-inner">
            <div class="lines"></div>
          </div>
        </div>
        {/* <SlidingText /> */}
        {/* <SectionHeader data={sectionHeaderData} /> */}
        <SectionHeaderDouble bigTitle="Projects"
          sectionTitle="Featured Projects"
          sectionText={
            <>
              A showcase of selected projects where I applied my skills in web development, data analysis, <br/>and machine learning to solve real-world problems. Each project highlights my approach <br/>to building practical, scalable solutions.
            </>
          }
        />

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
