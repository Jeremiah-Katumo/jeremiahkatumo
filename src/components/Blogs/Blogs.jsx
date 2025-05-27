// components/Blogs.jsx
import React from 'react';
import '../../styles/assets/css/blog.css';
import { Container } from 'react-bootstrap';
import { blogData } from '../Objects/Database';
import BlogCard from './BlogCard';
import { SectionHeaderDouble } from '../Fragments/SectionHeader';

const Blogs = () => {
  return (
    <Container id='blogs' className='blogs-container'>
      <SectionHeaderDouble bigTitle="Blog"
        sectionTitle="My Blog"
        sectionText={
          <>
            A collection of thoughts, tutorials, and personal reflections on technology,<br />
            problem-solving, and continuous learning. I share what I learn as I grow.
          </>
        }
      />

      <Container className='blogs-section'>
        <div class="row row-flex margintop-lg">
          {blogData.map((blog, index) => (
            <BlogCard key={index} title={blog.title} description={blog.description} />
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Blogs;
