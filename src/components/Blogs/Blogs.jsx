import React from 'react'
import '../../styles/assets/css/blog.css'
import { Container } from 'react-bootstrap'

function Blogs() {
  return (
    <>
      <Container id='blogs' className='blogs-container'>
        <Container className='heading-section'>
          <h1 className="big big-2">Blog</h1>
          <h2 className='section-title mb-4'>My Blog</h2>
          <p></p>
        </Container>
        <Container className='blogs-section'>
          <Container className="blog-card">
            <Container className="blog-entry">
              <a href="single.html" className="blog-img">
              </a>
              <Container className="text">
                <Container className="author-container">
                  <p className="mb-0 paragraph">
                    <span className="mr-2 date">June 21, 2019</span>
                    <span><a href="#" className="mr-2 author">Admin</a></span>
                    <a href="#" className="meta-chat"><span class="icon-chat"></span> </a>
                  </p>
                </Container>
                <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p className='blog-desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </Container>
            </Container>
          </Container>
          <Container className="blog-card">
            <Container className="blog-entry">
              <a href="single.html" className="blog-img">
              </a>
              <Container className="text">
                <Container className="author-container">
                  <p className="mb-0 paragraph">
                    <span className="mr-2 date">June 21, 2019</span>
                    <span><a href="#" className="mr-2 author">Admin</a></span>
                    <a href="#" className="meta-chat"><span class="icon-chat"></span></a>
                  </p>
                </Container>
                <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p className='blog-desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </Container>
            </Container>
          </Container>
          <Container className="blog-card">
            <Container className="blog-entry">
              <a href="single.html" className="blog-img">
              </a>
              <Container className="text">
                <Container className="author-container">
                  <p className="mb-0 paragraph">
                    <span className="mr-2 date">June 21, 2019</span>
                    <span><a href="#" className="mr-2 author">Admin</a></span>
                    <a href="#" className="meta-chat"><span class="icon-chat"></span> </a>
                  </p>
                </Container>
                <h3 className="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
                <p className='blog-desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </Container>
            </Container>
          </Container>
        </Container>

      </Container>
    </>
  )
}

export default Blogs

// <section section section class="ftco-section" id = "blog-section" >
//   <div class="container">
//     <div class="row justify-content-center mb-5 pb-5">
//       <div class="col-md-7 heading-section text-center ftco-animate">
//         <h1 class="big big-2">Blog</h1>
//         <h2 class="mb-4">Our Blog</h2>
//         <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
//       </div>
//     </div>
//     <div class="row d-flex">
//       <div class="col-md-4 d-flex ftco-animate">
//         <div class="blog-entry justify-content-end">
//           <a href="single.html" class="block-20" style="background-image: url('images/image_1.jpg');">
//           </a>
//           <div class="text mt-3 float-right d-block">
//             <div class="d-flex align-items-center mb-3 meta">
//               <p class="mb-0">
//                 <span class="mr-2">June 21, 2019</span>
//                 <a href="#" class="mr-2">Admin</a>
//                 <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
//               </p>
//             </div>
//             <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
//             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
//           </div>
//         </div>
//       </div>
//       <div class="col-md-4 d-flex ftco-animate">
//         <div class="blog-entry justify-content-end">
//           <a href="single.html" class="block-20" style="background-image: url('images/image_2.jpg');">
//           </a>
//           <div class="text mt-3 float-right d-block">
//             <div class="d-flex align-items-center mb-3 meta">
//               <p class="mb-0">
//                 <span class="mr-2">June 21, 2019</span>
//                 <a href="#" class="mr-2">Admin</a>
//                 <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
//               </p>
//             </div>
//             <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
//             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
//           </div>
//         </div>
//       </div>
//       <div class="col-md-4 d-flex ftco-animate">
//         <div class="blog-entry">
//           <a href="single.html" class="block-20" style="background-image: url('images/image_3.jpg');">
//           </a>
//           <div class="text mt-3 float-right d-block">
//             <div class="d-flex align-items-center mb-3 meta">
//               <p class="mb-0">
//                 <span class="mr-2">June 21, 2019</span>
//                 <a href="#" class="mr-2">Admin</a>
//                 <a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a>
//               </p>
//             </div>
//             <h3 class="heading"><a href="single.html">Why Lead Generation is Key for Business Growth</a></h3>
//             <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </section >