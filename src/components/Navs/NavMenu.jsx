import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavMenu = () => {

    return (
        <>
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
        </>
    )
}

export default NavMenu