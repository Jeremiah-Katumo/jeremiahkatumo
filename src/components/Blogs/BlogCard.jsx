// components/BlogCard.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const BlogCard = ({ title, date, author, desc, link = "single.html" }) => {
  return (
    <Container className="blog-card">
      <Container className="blog-entry">
        <a href={link} className="blog-img">
          {/* Optional: Insert an image tag here if needed */}
        </a>
        <Container className="text">
          <Container className="author-container">
            <p className="mb-0 paragraph">
              <span className="mr-2 date">{date}</span>
              <span><a href="#" className="mr-2 author">{author}</a></span>
              <a href="#" className="meta-chat">
                <span className="icon-chat"></span>
              </a>
            </p>
          </Container>
          <h3 className="heading">
            <a href={link}>{title}</a>
          </h3>
          <p className='blog-desc'>{desc}</p>
        </Container>
      </Container>
    </Container>
  );
};

export default BlogCard;
