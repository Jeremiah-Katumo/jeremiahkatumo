import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../../styles/assets/css/topbar.css";
import brand from "../../styles/assets/img/brand-name.png";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";

const TopBar = () => {
    return (
        <Navbar
            id="ftco-navbar"
            expand="lg"
            variant="dark"
            className="ftco_navbar ftco-navbar-light site-navbar-target"
            fixed="top"
        >
            <Container className="nav-content-container d-flex justify-content-between align-items-center">
                <div className="logo-container">
                    <Navbar.Brand className="brand-name" href="/">
                        <img src={brand} alt="Logo" className="brand-logo" />
                    </Navbar.Brand>
                </div>

                {/* Show MobileNav toggle only on small screens */}
                <div className="d-lg-none">
                    <MobileNav />
                </div>

                {/* NavMenu shown directly for large screens, dropdown for mobile */}
                <div className="d-none d-lg-block">
                    <NavMenu />
                </div>

                {/* <div className="mobile-dropdown-nav d-lg-none">
                    <NavMenu />
                </div> */}
            </Container>

            {/* Mobile dropdown nav — shown only on mobile toggle */}

        </Navbar>
    );
};

export default TopBar;
