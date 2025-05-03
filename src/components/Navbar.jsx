import React from 'react';
import { Nav } from 'react-bootstrap';
// import {
//   BxHome,
//   BxUser,
//   BxFileBlank,
//   BxBookContent,
//   BxEnvelope,
//   BxServer
// } from 'react-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faFileAlt,
  faBook,
  faFolderOpen,
  faBlog
} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/style.css';


const SidebarNav = () => {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <Nav defaultActiveKey="#hero" className="flex-column navbar nav-menu">
        <Nav.Link href="/home" className="nav-link scrollto active">
          <FontAwesomeIcon icon={faHome} /> <span><p>Home</p></span>
        </Nav.Link>
        <Nav.Link href="/about" className="nav-link scrollto">
          <FontAwesomeIcon icon={faUser} /> <span><p>About</p></span>
        </Nav.Link>
        <Nav.Link href="/resume" className="nav-link scrollto">
          <FontAwesomeIcon icon={faFileAlt} /> <span><p>Resume</p></span>
        </Nav.Link>
        <Nav.Link href="/services" className="nav-link scrollto">
          <FontAwesomeIcon icon={faBook} /> <span><p>Services</p></span>
        </Nav.Link>
        <Nav.Link href="/projects" className="nav-link scrollto">
          <FontAwesomeIcon icon={faFolderOpen} /> <span><p>Projects</p></span>
        </Nav.Link>
        <Nav.Link href="/blogs" className="nav-link scrollto">
          <FontAwesomeIcon icon={faBlog} /> <span><p>Blogs</p></span>
        </Nav.Link>
      </Nav>
    </header>
  );
};

export default SidebarNav;



// import { Navbar, Nav, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/css/style.css';

// export default function CustomNavbar() {
//   return (
//     <Navbar
//       expand="lg"
//       variant="dark"
//       className="ftco-navbar site-navbar-target"
//       id="ftco-navbar"
//       fixed="top"
//     >
//       <Container>
//         <Navbar.Brand href="#home-section">Clark</Navbar.Brand>
//         <Navbar.Toggle aria-controls="ftco-nav" />
//         <Navbar.Collapse id="ftco-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home-section">Home</Nav.Link>
//             <Nav.Link href="#about-section">About</Nav.Link>
//             <Nav.Link href="#resume-section">Resume</Nav.Link>
//             <Nav.Link href="#services-section">Services</Nav.Link>
//             <Nav.Link href="#skills-section">Skills</Nav.Link>
//             <Nav.Link href="#projects-section">Projects</Nav.Link>
//             <Nav.Link href="#blog-section">My Blog</Nav.Link>
//             <Nav.Link href="#contact-section">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
