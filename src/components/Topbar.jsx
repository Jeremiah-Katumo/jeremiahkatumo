import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../assets/css/topbar.css"; // this will hold your custom styles

const TopBar = () => {
    return (
        <Navbar
            id="ftco-navbar"
            expand="lg"
            variant="dark"
            className="ftco_navbar ftco-navbar-light site-navbar-target"
            fixed="top"
        >
            <Container className="nav-content-container">
                <Container>
                    <Navbar.Brand className="brand-name" href="/home">JEREMY</Navbar.Brand>
                    {/* <Navbar.Toggle className="brand-logo" aria-controls="ftco-nav" /> */}
                </Container>
                <Container>
                    <Navbar.Collapse id="ftco-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            {/* <Nav.Link href="#skills-section">Skills</Nav.Link> */}
                            <Nav.Link href="/projects">Projects</Nav.Link>
                            <Nav.Link href="/blogs">Blog</Nav.Link>
                            <Nav.Link href="/contacts">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default TopBar;
