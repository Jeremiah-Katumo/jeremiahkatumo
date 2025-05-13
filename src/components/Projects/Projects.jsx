import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import '../../styles/assets/css/project.css'
import HireMe from './HireMe';

function Projects() {
	return (
		<>
			<Container id="projects" className='project-container'>
				<Container className='bg-line-container'>
					<Container className='bg-line-box'></Container>
					<Container className='bg-line-box'></Container>
					<Container className='bg-line-box'></Container>
					<Container className='bg-line-box'></Container>
					<Container className='bg-line-box-end'></Container>
				</Container>

				<Container className='projects-section'>
					<Container className='section-header'>
						<h2 className='section-title'>Projects</h2>
						<p>Take a look at some of my projects.</p>
					</Container>
					<Container className='project-card-container'>
						<Container className='portfolio-container'>
							<Container className='project-card project-img project-img-one'>
								<Container className='overlay'></Container>
								<Container className='text'>
									<h3><a href="project1">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container>

							<Container className='project-card project-img project-img-two'>
								<Container className='overlay'></Container>
								<Container className='text'>
									<h3><a href="project1">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container>

							{/* <Container className="project" style="background-image: url(../../assets/img/project-5.jpg);">
								<Container></Container>
								<Container>
									<h3><a href="#">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container> */}
						</Container>
						<Container className='portfolio-container'>
							<Container className='project-card project-img project-img-two'>
								<Container className='overlay'></Container>
								<Container className='text'>
									<h3><a href="project1">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container>

							<Container className='project-card project-img project-img-one'>
								<Container className='overlay'></Container>
								<Container className='text'>
									<h3><a href="project1">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container>
						</Container>
						<Container className='portfolio-container'>
						<Container className='project-card project-img project-img-one'>
								<Container className='overlay'></Container>
								<Container className='text'>
									<h3><a href="project1">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container>

							<Container className='project-card project-img project-img-two'>
								<Container className='overlay'></Container>
								<Container className='text'>
									<h3><a href="project1">Branding &amp; Illustration Design</a></h3>
									<span>Web Design</span>
								</Container>
							</Container>
						</Container>
					</Container>

					<HireMe />
					
				</Container>
			</Container>

		</>
	)
}

export default Projects
