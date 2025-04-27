
import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="timeline-item">
      <div className="font-bold text-guarani-green">{year}</div>
      <h4 className="text-xl font-semibold text-guarani-dark mt-1">{title}</h4>
      <p className="mt-1 text-guarani-dark/80">{description}</p>
    </div>
  );
};

export default TimelineItem;
