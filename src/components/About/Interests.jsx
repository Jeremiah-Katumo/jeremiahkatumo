import React from 'react'
import '../../styles/assets/css/interest.css'

const Interests = () => {
    return (
        <>
        <section class="content-section" id="interests">
            <div class="section-header">
                <h2 class="section-title">My Interests</h2>
                <p>Here is what I like most:</p>
            </div>
            <div class="interests-grid">
                <div class="interest-card">
                    <i class="fa fa-code"></i>
                    <h3>Coding</h3>
                    <p>I love creating software and solving real-world problems.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-music"></i>
                    <h3>Music</h3>
                    <p>Music fuels my creativity and keeps me inspired.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-book"></i>
                    <h3>Reading</h3>
                    <p>I'm passionate about learning through books and articles.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-plane"></i>
                    <h3>Travel</h3>
                    <p>Exploring new cultures broadens my perspective.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-camera"></i>
                    <h3>Photography</h3>
                    <p>Capturing moments and visual storytelling is one of my passions.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-gamepad"></i>
                    <h3>Gaming</h3>
                    <p>I enjoy immersive game worlds and competitive strategy games.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-hands-helping"></i>
                    <h3>Volunteering</h3>
                    <p>Giving back to the community gives me purpose and joy.</p>
                </div>
                <div class="interest-card">
                    <i class="fa fa-blog"></i>
                    <h3>Tech Blogging</h3>
                    <p>I write about technology trends, tutorials, and coding tips.</p>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Interests;