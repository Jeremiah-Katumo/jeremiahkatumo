import react from 'react'
import '../../styles/assets/css/project.css'
import { Container } from 'react-bootstrap'

const HireMe = () => {
    return (
        <>
        <Container id='freelance' className='hire-me ftco-section img margin-top'>
			<Container className='hire-me-container'>
                {/* <Container className='hire-me-card'> */}
                    <Container className='text-container'>
                        <h2>I'm <span>Available </span>for freelancing</h2>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <p class="mb-0"><a href="#" class="btn btn-primary py-3 px-5 hire-me-btn">Hire me</a></p>
                    </Container>
                {/* </Container> */}
            </Container>
		</Container>
        </>
    )
}

export default HireMe