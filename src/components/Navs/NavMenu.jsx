import React from "react";
import { Nav } from "react-bootstrap";

const NavMenu = () => {
    return (
        <div className="navmenu-container">
            <Nav className="flex-column flex-lg-row text-end text-lg-start w-30">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/resume">Resume</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/projects">Projects</Nav.Link>
                <Nav.Link href="/blogs">Blog</Nav.Link>
                <Nav.Link href="/contacts">Contact</Nav.Link>
            </Nav>
        </div>
    );
};

export default NavMenu;
