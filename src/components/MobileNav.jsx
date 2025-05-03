import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../assets/css/style.css';

export default function MobileNav() {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="ftco-navbar site-navbar-target"
      id="ftco-navbar"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home-section">Clark</Navbar.Brand>
        <Navbar.Toggle aria-controls="ftco-nav" />
        <Navbar.Collapse id="ftco-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home-section">Home</Nav.Link>
            <Nav.Link href="#about-section">About</Nav.Link>
            <Nav.Link href="#resume-section">Resume</Nav.Link>
            <Nav.Link href="#services-section">Services</Nav.Link>
            <Nav.Link href="#skills-section">Skills</Nav.Link>
            <Nav.Link href="#projects-section">Projects</Nav.Link>
            <Nav.Link href="#blog-section">My Blog</Nav.Link>
            <Nav.Link href="#contact-section">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
