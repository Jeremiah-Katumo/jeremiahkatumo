// components/Blogs.jsx
import React from 'react';
import '../../styles/assets/css/blog.css';
import { Container } from 'react-bootstrap';
import { blogData } from '../Objects/Database';
import BlogCard from './BlogCard';

const Blogs = () => {
  return (
    <Container id='blogs' className='blogs-container'>
      <Container className='heading-section'>
        <h1 className="big big-2">Blog</h1>
        <h2 className='section-title mb-4'>My Blog</h2>
        <p>A collection of thoughts, tutorials, and personal reflections on technology, <br />problem-solving, and continuous learning. I share what I learn as I grow.</p>
      </Container>

      <Container className='blogs-section'>
        <div class="row row-flex margintop-lg">
          <div class="col-lg-4 col-md-12 d-flex">
            <div class="blog-post col">
              <div class="label-tag">
                <span>Popular Article</span>
              </div>
              <a href="#">
                <h4>Aesthetics & Usability </h4>
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ullamcorper dui, id
                molestie ligula. Vestibulum a urna vel est rhoncus semper et sed libero.
              </p>
              <a href="#" class="blog-link">Read on Medium <i
                class="bi bi-play-circle"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 d-flex">
            <div class="blog-post col">
              <div class="label-tag">
                <span>Popular Article</span>
              </div>
              <a href="#">
                <h4>Developing an App</h4>
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ullamcorper dui, id
                molestie ligula. Vestibulum a urna vel est rhoncus semper et sed libero.</p>
              <a href="#" class="blog-link">Read on Medium <i
                class="bi bi-play-circle"></i></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 d-flex">
            <div class="blog-post col">
              <div class="label-tag">
                <span>Popular Article</span>
              </div>
              <a href="#">
                <h4>Becoming a Software Architect</h4>
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae ullamcorper dui, id
                molestie ligula. Vestibulum a urna vel est rhoncus semper et sed libero.</p>
              <a href="#" class="blog-link">Read on Medium <i
                class="bi bi-play-circle"></i></a>
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Blogs;
