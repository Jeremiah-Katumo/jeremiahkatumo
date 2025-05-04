import React from "react";
import '../../assets/css/contact.css'
import { Container } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <>
            <Container id="contacts">
                <Container className='bg-line-box'></Container>
                <Container className='bg-line-box'></Container>
                <Container className='bg-line-box'></Container>
                {/* <Container className='bg-line-box'>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box-end'></Container>
                </Container> */}
                {/* <Container className='bg-line-box-end'>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box'></Container>
                    <Container className='bg-line-horizon-box-end'></Container>
                </Container> */}

                <Container className="contacts-section">
                    <Container className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                    </Container>

                    <ContactForm />
                </Container>
            </Container>
            {/* <Container id="contacts" className='contact-container'>
            <Container className='bg-line-container'>
                <Container className='bg-line-box'></Container>
                <Container className='bg-line-box'></Container>
                <Container className='bg-line-box'></Container>
                <Container className='bg-line-box'></Container>
                <Container className='bg-line-box-end'></Container>
            </Container>
        </Container> */}
        </>
    )
}

export default Contact