// import React from 'react';
// import '../../../styles/assets/css/interest.css'
// import InterestCard from './InterestCard'; // Adjust the path if needed
// import { interests } from '../../Objects/Database'

// const Interests = () => {
//   return (
//     <section className="content-section" id="interests">
//       <div className="section-header">
//         <h2 className="section-title">My Interests</h2>
//         <p>Here is what I like most:</p>
//       </div>
//       <div className="interests-grid">
//         {interests.map((interest, index) => (
//           <InterestCard
//             key={index}
//             icon={interest.icon}
//             title={interest.title}
//             description={interest.description}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Interests;

// Interests.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/assets/css/interest.css';
import InterestCard from './InterestCard';
import { interests } from '../../Objects/Database';

const Interests = () => {
  return (
    <section className="content-section" id="interests">
      <div className="section-header">
        <h2 className="section-title">My Interests</h2>
        <p>Here is what I like most:</p>
      </div>
      <div className="interests-carousel">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
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
  );
};

export default Interests;

