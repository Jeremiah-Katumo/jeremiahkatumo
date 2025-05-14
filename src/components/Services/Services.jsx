import React from 'react'
import '../../styles/assets/css/service.css'
import ServiceCard from './ServiceCard'
import SectionHeader from '../fragments/SectionHeader'


function Services() {
  const serviceTopCardData = [
    { category: "top", icon: "flaticon-analysis", heading: "Web Design", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "top", icon: "flaticon-flasks", heading: "Photography", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "top", icon: "flaticon-ideas", heading: "Web Developer", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
  ]
  const serviceBottomCardData = [
    { category: "bottom", icon: "flaticon-analysis", heading: "App Developing", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "bottom", icon: "flaticon-flasks", heading: "Branding", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" },
    { category: "bottom", icon: "flaticon-ideas", heading: "Product Strategy", sectionHeading: "Services", sectionText: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia" }
  ]

  return (

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
  )
}

export default Services