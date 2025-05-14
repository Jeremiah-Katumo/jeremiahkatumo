import React from "react";
import { Navbar } from "react-bootstrap";
import "../../styles/assets/css/topbar.css";

const Logo = () => {
    return (
        <>
            {/* <div className="brand-name">
                <a href="/">
                    <img src="../../styles/img/my-brand.png" alt="Logo" />
                </a>
            </div> */}
            <Navbar.Brand className="brand-name" href="/">
                <img src="../../styles/img/my-brand.png" alt="Logo" />
            </Navbar.Brand>
        </>
    )
}

export default Logo;