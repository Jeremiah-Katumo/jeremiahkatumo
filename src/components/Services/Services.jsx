import React from 'react'
<<<<<<< HEAD
import '../../assets/css/service.css'
=======
import '../../styles/assets/css/fragments/sectionHeader.css'
import ServiceCard from './ServiceCard'
import SectionHeader from '../fragments/SectionHeader'
import { serviceTopCardData, serviceBottomCardData } from '../Objects/Database'

>>>>>>> fix-refactoring-code

function Services() {
  // const serviceTopCardData = [
  //   { category: "top", icon: "flaticon-analysis", heading: "Web Design", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
  //   { category: "top", icon: "flaticon-flasks", heading: "Photography", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
  //   { category: "top", icon: "flaticon-ideas", heading: "Web Developer", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
  // ]
  // const serviceBottomCardData = [
  //   { category: "bottom", icon: "flaticon-analysis", heading: "App Developing", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
  //   { category: "bottom", icon: "flaticon-flasks", heading: "Branding", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
  //   { category: "bottom", icon: "flaticon-ideas", heading: "Product Strategy", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" }
  // ]

  return (
<<<<<<< HEAD
    
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
=======

    <div id='services' class="container">
      <SectionHeader data={serviceTopCardData} />
      <div class="service-card-container">
        <div className='top-service-cards-container'>
          <ServiceCard data={serviceTopCardData} />
        </div>

        <div className='bottom-service-cards-container'>
          <ServiceCard data={serviceBottomCardData} />
        </div>
      </div>
    </div>
>>>>>>> fix-refactoring-code
  )
}

export default Services