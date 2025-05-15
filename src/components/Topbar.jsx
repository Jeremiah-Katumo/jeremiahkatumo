import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/assets/css/topbar.css"; // this will hold your custom styles
import brand from "../styles/assets/img/brand.png"

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
                    <Navbar.Brand className="brand-name" href="/">
                        <img src={brand} alt="Logo" className="brand-logo"/>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle className="brand-logo" aria-controls="ftco-nav" /> */}
                </Container>
                <Container className="nav-list-content">
                    <Navbar.Collapse id="ftco-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
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
