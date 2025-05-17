import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../styles/assets/css/topbar.css";
import brand from "../../styles/assets/img/brand-name.png"
import NavMenu from "./NavMenu";
// import MobileNav from "./MobileNav";

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
                <Container className="logo-container">
                    <Navbar.Brand className="brand-name" href="/">
                        <img src={brand} alt="Logo" className="brand-logo"/>
                    </Navbar.Brand>
                    {/* <Navbar.Toggle className="brand-logo" aria-controls="ftco-nav" /> */}
                </Container>

                {/* <MobileNav /> */}
                
                <NavMenu />
            </Container>
        </Navbar>
    );
};

export default TopBar;
