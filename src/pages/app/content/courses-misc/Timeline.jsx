import React from 'react';
import TrainingCard from '../../../../components/cards/TrainingCards';
import '../assets/Content.css';

const Timeline = ({cards}) => {
  return (
    <div className="timeline">
      {cards.map((card, index) => (
        <div className="timeline-item" key={index}>
          <div className='timeline-item-date'>
            <span className="month">{card.date}</span>
            <span className="status">{card.status}</span>
          </div>
          <div className="timeline-item-title">
            <img src={card.image} alt="Azure Fundamentals" />
            <h2>{card.title}</h2>
          </div>
          <TrainingCard
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Timeline;