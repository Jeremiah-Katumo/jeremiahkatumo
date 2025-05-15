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
        <p></p>
      </Container>

      <Container className='blogs-section'>
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            date={blog.date}
            author={blog.author}
            desc={blog.description}
            link={blog.link}
          />
        ))}
      </Container>
    </Container>
  );
};

export default Blogs;
