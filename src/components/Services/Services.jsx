import React from 'react'
import '../../styles/assets/css/service.css'

function Services() {
  return (
    
      <div id='services' class="container">
        <div class="section-header">
          <h2 class="section-title">Services</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div class="service-card-container">
          <div className='top-service-cards-container'>
            <div class="col-md-4 text-center d-flex service-card">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-analysis"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Web Design</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex service-card">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-flasks"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Photography</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex service-card">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-ideas"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Web Developer</h3>
                </div>
              </a>
            </div>
          </div>

          <div className='bottom-service-cards-container'>
            <div class="col-md-4 text-center d-flex service-card">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-analysis"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">App Developing</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex service-card">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-flasks"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Branding</h3>
                </div>
              </a>
            </div>
            <div class="col-md-4 text-center d-flex service-card">
              <a href="#" class="services-1">
                <span class="icon">
                  <i class="flaticon-ideas"></i>
                </span>
                <div class="desc">
                  <h3 class="mb-5">Product Strategy</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services