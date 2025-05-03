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


const NavBar = () => {
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

export default NavBar;
