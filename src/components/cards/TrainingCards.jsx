
import React from 'react';
import './assets/Cards.css';

const TrainingCard = ({ title, description }) => {
  return (
    <div className="training-card">
      <h2>{title}</h2>
      <h3>💻 Entrenamiento</h3>
      <ul className="training-card-description">
        {description.map((desc, index) => (
          <li key={index} className='step-item'>{desc}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingCard;
