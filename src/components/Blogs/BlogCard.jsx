import React from "react";
import '../../styles/assets/css/cards/blogCard.css'


const BlogCard = ({ data }) => {

    return (
        <>
            {
                data.map((item, idx) => (
                    <Container key={idx} className="blog-card">
                        <Container className="blog-entry">
                            <a href={item.link} className="blog-img"></a>
                            <Container className="text">
                                <Container className="author-container">
                                    <p className="paragraph">
                                        <span className="date">{item.date}</span>
                                        <span><a href="#" className="mr-2 author">{item.author}</a></span>
                                        <a href="#" className="meta-chat"><span class="icon-chat"></span> </a>
                                    </p>
                                </Container>
                                <h3 className="heading"><a href={item.link}>{item.title}</a></h3>
                                <p className='blog-desc'>{item.description}</p>
                            </Container>
                        </Container>
                    </Container>
                ))
            }
        </>
    )
}

export default BlogCard