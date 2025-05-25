import React from 'react';
import ResumeCard from './ResumeCard';

const ResumeTimeline = ({ items }) => (
  <div className="timeline-container">
    <div className="timeline">
      {items.map((item, index) => (
        <ResumeCard
          key={index}
          date={item.date}
          title={item.title}
          school={item.school}
          description={item.description}
        />
      ))}
    </div>
  </div>
);

export default ResumeTimeline;
