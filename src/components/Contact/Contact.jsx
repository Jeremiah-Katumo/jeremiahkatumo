import React from "react";
import '../../styles/assets/css/contact.css'
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";
import SectionHeaderDouble from "../Fragments/SectionHeader";

const Contact = () => {
    return (
        <>
            <Container id="contacts">

                <Container className="contacts-section">
                    <div class="lines-wrap">
                        <div class="lines-inner">
                            <div class="lines"></div>
                        </div>
                    </div>
                    <Container className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                    </Container>
                    

                    <ContactForm />
                </Container>
            </Container>
        </>
    )
}

export default Contact