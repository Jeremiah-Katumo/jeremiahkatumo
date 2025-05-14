// import React from 'react'
// import { Container } from 'react-bootstrap';
// import '../../styles/assets/css/project.css'

// // const projectsCardData = [
// //   {
// //     id: 1,
// //     imageNum: 'one',
// //     title: 'Branding &amp; Illustration Design',
// //     category: 'Web Design',
// //     image: 'project-img-one',
// //     link: 'project1'
// //   },
// //   {
// //     id: 2,
// //     imageNum: 'two',
// //     title: 'Branding &amp; Illustration Design',
// //     category: 'Web Design',
// //     image: 'project-img-two',
// //     link: 'project1'
// //   }
// // ]

// const ProductCard = ({ id, title, category, imageNum, link }) => {

//   return (
//     <>
//       <Container key={id} className={`project-card project-img project-img-` + imageNum}>
//         <Container className='overlay'></Container>
//         <Container className='text'>
//           <h3><a href={link}>{title}</a></h3>
//           <span>{category}</span>
//         </Container>
//       </Container>
//     </>
//   )
// }

// function ProjectCardOne({ title, category, image, link }) {
//   // const [hover, setHover] = useState(false);
//   // const handleMouseEnter = () => setHover(true);
//   // const handleMouseLeave = () => setHover(false);
//   // const hoverClass = hover ? 'hover' : '';

//   return (
//     <>
//       <Container className='project-card project-img project-img-one'>
//         <Container className='overlay'></Container>
//         <Container className='text'>
//           <h3><a href="project1">Branding &amp; Illustration Design</a></h3>
//           <span>Web Design</span>
//         </Container>
//       </Container>
//     </>
//   )
// }

// function ProjectCardTwo({ id, title, category, image, link }) {
//   return (
//     <>
//       <Container className='project-card project-img project-img-two'>
//         <Container className='overlay'></Container>
//         <Container className='text'>
//           <h3><a href={link}>{title}</a></h3>
//           <span>{category}</span>
//         </Container>
//       </Container>
//     </>
//   )
// }

// export { ProjectCardOne, ProjectCardTwo, ProductCard }


import React from 'react';
import { Container } from 'react-bootstrap';

const ProjectCard = ({ title, category, link, imageNum }) => {
  const cardClass = `project-card project-img project-img-${imageNum}`;

  return (
    <Container className={cardClass}>
      <Container className="overlay"></Container>
      <Container className="text">
        <h3><a href={link}>{title}</a></h3>
        <span>{category}</span>
      </Container>
    </Container>
  );
};

export default ProjectCard;
