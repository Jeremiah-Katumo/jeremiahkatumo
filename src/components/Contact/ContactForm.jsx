import React from 'react';
import { Row, Col, Form, Container, Button } from 'react-bootstrap';
import CustomButton from '../Common/CustomButton';


function ContactForm() {
    return (
        <div id='contact-form'>
            <Col md={4} className='contact-form-container'>
                <form method="post" className="form-outline-style-v1" id="contactForm">
                    <div className="form-group contact-form-details row mb-0">
                        <Col lg={6} className="form-group input-container gsap-reveal">
                            <Form.Label htmlFor="name">Name</Form.Label>
                            <Form.Control name="name" type="text" id="name" className="form-control" />
                        </Col>
                        <Col lg={6} className="form-group input-container gsap-reveal">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control name="email" type="email" id="email" className="form-control" cols="30" />
                        </Col>
                        <Col lg={12} className="form-group input-container gsap-reveal">
                            <Form.Label htmlFor="message">Write your message...</Form.Label>
                            <Form.Control as="textarea" name="message" id="message" cols="50" rows="7" className="form-control" />
                        </Col>
                    </div>

                    <CustomButton href="/send-message" className="bi bi-send contact-btn" label="Send Message" />
                </form>
            </Col>

            <Col md={4} className='contact-info'>
                <div className="contact-info-v1">
                    <div className='d-block contact-card'>
                        <div className="social-links">
                            <a
                                href="https://x.com/jeremy_warku"
                                className="footer-icon"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className='bi bi-twitter'></i>
                            </a>
                            <a
                                href="https://github.com/Jeremiah-Katumo"
                                className="footer-icon"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className='bi bi-github'></i>
                            </a>
                            <a
                                href="https://www.instagram.com/jeremykatumo/profilecard/?igsh=N2pwaDlpcmU4b3k4"
                                className="footer-icon"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className='bi bi-instagram'></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jeremiah-kurwa-27556b230/"
                                className="footer-icon"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className='bi bi-linkedin'></i>
                            </a>
                            <a
                                href="https://medium.com/@jeremykatush"
                                className="footer-icon"
                                style={{ color: "white" }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className='bi bi-medium'></i>
                            </a>
                        </div>
                    </div>
                    <div className="d-block contact-card">
                        <span className="d-block contact-info-label"><p>Email</p></span>
                        <a href="#" className="contact-info-val">jeremykurwa02@gmail.com</a>
                    </div>
                    <div className="d-block contact-card">
                        <span className="d-block contact-info-label"><p>Phone</p></span>
                        <a href="#" className="contact-info-val">+2547 4561 2869</a>
                    </div>
                    <div className="d-block contact-card">
                        <span className="d-block contact-info-label"><p>Address</p></span>
                        <address className="contact-info-val">
                            Kilifi - Mombasa Road. <br /> Kilifi Town - Vidazini Road
                        </address>
                    </div>
                </div>
            </Col>
        </div>
    );
}

export default ContactForm;
