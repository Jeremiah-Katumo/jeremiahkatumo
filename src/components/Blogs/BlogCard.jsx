// components/BlogCard.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const BlogCard = ({ title, date, author, description, link = "single_blog.html" }) => {
  return (
    <div class="col-lg-4 col-md-12 d-flex">
      <div class="blog-post col">
        <div class="label-tag">
          <span>Popular Article</span>
        </div>
        <a href={link}>
          <h4>{title}</h4>
        </a>
        <p>{description}</p>
        <a href={link} class="blog-link">Read on Medium <i
          class="bi bi-play-circle"></i></a>
      </div>
    </div>
  );
};

export default BlogCard;
