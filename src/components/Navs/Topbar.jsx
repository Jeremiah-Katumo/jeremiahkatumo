import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../../styles/assets/css/topbar.css";
import brand from "../../styles/assets/img/brand-name.png";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

const TopBar = () => {
    // Theme Toggle Functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    // Update toggle position based on current theme
    if (themeToggle) {
        if (savedTheme === 'dark') {
            themeToggle.querySelector('.theme-toggle-ball').style.transform = 'translateX(28px)';
        }
        
        // Toggle theme when switch is clicked
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update the theme
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Move the toggle ball
            const ball = this.querySelector('.theme-toggle-ball');
            if (newTheme === 'dark') {
                ball.style.transform = 'translateX(28px)';
            } else {
                ball.style.transform = 'translateX(0)';
            }
        });
    }
    
    return (
        <Navbar
            id="ftco-navbar"
            expand="lg"
            variant="dark"
            className="ftco_navbar ftco-navbar-light site-navbar-target"
            fixed="top"
        >
            <Container className="nav-content-container">
                <div className="logo-container">
                    <Navbar.Brand className="brand-name" href="/">
                        <img src={brand} alt="Logo" className="brand-logo" />
                    </Navbar.Brand>
                </div>

                <div className="d-lg-none">
                    <MobileNav />
                </div>

                <div className="d-none d-lg-block">
                    <NavMenu />
                </div>

                {/* <div class="theme-toggle">
                    <i class="fas fa-sun"></i>
                    <i class="fas fa-moon"></i>
                    <div class="theme-toggle-ball"></div>
                </div> */}
                <ThemeToggle />
            </Container>

        </Navbar>
    );
};

export default TopBar;
