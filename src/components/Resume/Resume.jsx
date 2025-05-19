import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ResumeCard from './ResumeCard';
import { education, experience } from '../Utils/Database';
import '../../styles/assets/css/resume.css';
import CustomButton from '../Common/CustomButton';


const ttuDescription = `
Graduated with a Bachelor's Degree in Statistics Second Class Honours (Lower Division).
Some of the modules that I went through during this time are:

1. Calculus,
2. Parametric and Non-parametric Methods,
3. Time Series Analysis,
4. Demographic Techniques,
5. Epidemiology,
6. Stochastic Processes,
7. Survival Analysis,
8. Experimental Design Analysis,
9. Bayesian Inference,
10. Statistical Quality Control Methods,
11. Probability and Statistics,
...and more.
`;

const plpDescription = `
The topics and skills covered were: 
1. Python Programming,
2. Database Design and Programming with SQL,
3. Startup Building for Developers, 
4. Software Engineering,
5. Web Development V2,
6. Ethics in Artificial Intelligence.
`;

const alxDescription = `
The topics and skills covered included the following: 
1. Self Awareness, 
2. Teamwork and Leadership, 
3. Communication and Quantitative Reasoning, 
4. Entrepreneurial Thinking, 
5. Critical Thinking, 
6. Task Management, 
7. Technical Skills.
`;

const udemyDescription = `
Completed a comprehensive course on full-stack web development, covering both front-end and back-end technologies: 
1. HTML and CSS, 
2. JavaScript, jquery, 
3. Node.js, Express.js, APIs,
4. PostgreSQL, 
5. React.js, 
6. Web design and deployment, 
7. Web3 and Blockchain, 
8. Token contract development, 
9. NFT minting, buying and selling logic.
`;

const Resume = () => {
  
  return (
    <section id="resume-section">
      <Container className='resume-content'>
        <Row className="justify-content-center pb-5">
          <Col md={10} className="heading-section text-center ftco-animate">
            <div className="section-heading">
              <h2 className="section-title">My Resume</h2>
              <p>
                An overview of my education, professional experience, and technical background. Download my resume or browse through the highlights of my journey so far.
              </p>
            </div>
          </Col>
        </Row>

        <Col>
          <div className="resume-card-container">
            {/* {education.map((item, idx) => (
              <ResumeCard
                key={idx}
                date={item.date}
                title={item.title}
                school={item.school}
                description={item.text}
              />
            ))} */}
            <ResumeCard date={education[0].date} title={education[0].title} school={education[0].school} description={ttuDescription} />
            <ResumeCard date={education[1].date} title={education[1].title} school={education[1].school} description={plpDescription} />
            <ResumeCard date={education[2].date} title={education[2].title} school={education[2].school} description={alxDescription} />
          </div>

          <div className="resume-card-container">
            {/* {experience.map((item, idx) => (
              <ResumeCard
                key={idx}
                date={item.date}
                title={item.title}
                school={item.school}
                description={item.text}
              />
            ))} */}
            <ResumeCard date={experience[0].date} title={experience[0].title} school={experience[0].school} description={udemyDescription} />
          </div>
        </Col>
        <CustomButton href={"/download-cv"} className={"bi bi-download"} label={" Download CV"} />
      </Container>
    </section>
  );
};

export default Resume;
