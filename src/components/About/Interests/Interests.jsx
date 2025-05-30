import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Removed Navigation
import 'swiper/css';
import '../../../styles/assets/css/interest.css';
import InterestCard from './InterestCard';
import { interests } from '../../Objects/Database';
import SlidingText from '../../Common/SlidingText';

const Interests = () => {
  return (
    <>
    
    <section className="content-section" id="interests">
      <div className="section-header">
        <h2 className="section-title">My Interests</h2>
        {/* <SlidingText /> */}
        <p>Here is what I like most:</p>
      </div>
      <div className="interests-carousel">
        <Swiper
          modules={[Autoplay]} // Removed Navigation
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          speed={2000}
          cssMode={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            456: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            999: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 6,
            },
          }}
        >
          {interests.map((interest, index) => (
            <SwiperSlide key={index}>
              <InterestCard
                icon={interest.icon}
                title={interest.title}
                description={interest.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  );
};

export default Interests;
