import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/mobile-nav.css';

export default function MobileNav() {
    return (
    <Navbar expand="lg" className="mobile-navbar" fixed="top">
    <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="mobile-navbar-nav" />
        <Navbar.Collapse id="mobile-navbar-nav">
            <Nav className="me-auto">
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
