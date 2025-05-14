import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/assets/css/project.css';
import HireMe from './HireMe';
import ProjectCard from './ProjectCard';
import SectionHeader from '../fragments/SectionHeader';
import { data, sectionHeaderData } from '../Objects/Database';
import { groupProjectsInRows } from '../Utils/Dependencies';

// const data = [
//   { id: 1, imageNum: 'one', title: 'Branding & Illustration Design', category: 'Web Design', link: 'project1' },
//   { id: 2, imageNum: 'two', title: 'Creative Website Development', category: 'Web Development', link: 'project2' },
//   { id: 3, imageNum: 'one', title: 'E-commerce Platform Design', category: 'UI/UX Design', link: 'project3' },
//   { id: 4, imageNum: 'two', title: 'Mobile App Design', category: 'App Design', link: 'project4' },
//   { id: 5, imageNum: 'one', title: 'Portfolio Showcase Design', category: 'Web Design', link: 'project5' },
//   { id: 6, imageNum: 'two', title: 'SaaS Dashboard UI', category: 'Dashboard UI', link: 'project6' },
// ];

// const sectionHeaderData = [
//   {sectionHeading: "Projects", sectionText: "Take a look at some of my projects."}
// ];

// const groupProjectsInRows = (projects) => {
//   const grouped = [];
//   const ones = projects.filter(p => p.imageNum === 'one');
//   const twos = projects.filter(p => p.imageNum === 'two');

//   const minLength = Math.min(ones.length, twos.length);

//   for (let i = 0; i < minLength; i++) {
//     grouped.push([ones[i], twos[i]]);
//   }

//   return grouped;
// };

function Projects() {
  const rows = groupProjectsInRows(data);

  return (
    <Container id="projects" className="project-container">
      <Container className="bg-line-container">
        <Container className="bg-line-box"></Container>
        <Container className="bg-line-box"></Container>
        <Container className="bg-line-box"></Container>
        <Container className="bg-line-box"></Container>
        <Container className="bg-line-box-end"></Container>
      </Container>

      <Container className="projects-section">
        <SectionHeader data={sectionHeaderData} />

        <Container className="project-card-container">
          {rows.map((row, i) => (
            <Container className="portfolio-container" key={i}>
              {row.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </Container>
          ))}
        </Container>

        <HireMe />
      </Container>
    </Container>
  );
}

export default Projects;
