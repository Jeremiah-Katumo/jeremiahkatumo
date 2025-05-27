import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavMenu = () => {
    return (
        <div className="navmenu-container">
            <Nav className="flex-column flex-lg-row text-end text-lg-start w-30">
                <NavLink to="/" end className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/about" className="nav-link">
                    About
                </NavLink>
                <NavLink to="/resume" className="nav-link">
                    Resume
                </NavLink>
                <NavLink to="/services" className="nav-link">
                    Services
                </NavLink>
                <NavLink to="/projects" className="nav-link">
                    Projects
                </NavLink>
                <NavLink to="/blogs" className="nav-link">
                    Blog
                </NavLink>
                <NavLink to="/contacts" className="nav-link">
                    Contact
                </NavLink>
            </Nav>
        </div>
    );
};

export default NavMenu;
