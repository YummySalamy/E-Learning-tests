// src/components/Timeline.js
import React from 'react';
import TrainingCard from '../../../../components/cards/TrainingCards';
import AzureFundamentalsIcon from '.././assets/icons/azure-fundamentals-icon.png';
import '../assets/Content.css';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className='timeline-item-date'>
          <span className="month">ago.</span>
          <span className="status">Online</span>
        </div>
        <div className="timeline-item-title">
          <img src={AzureFundamentalsIcon} alt="Azure Fundamentals" />
          <h2>Azure Fundamentals</h2>
        </div>
        <TrainingCard 
          // title="Azure Fundamentals"
          description={[
            "Descripción de los conceptos de la nube",
            "Descripción de la arquitectura y los servicios de Azure",
            "Descripción de la administración y la gobernanza de Azure"
          ]}
        />
      </div>
      <div className="timeline-item">
        <div className='timeline-item-date'>
          <span className="month">sep.</span>
          <span className="status">Online</span>
        </div>
        <div className="timeline-item-title">
          <img src={AzureFundamentalsIcon} alt="Azure Fundamentals" />
          <h2>Azure AI Fundamentals</h2>
        </div>
        <TrainingCard 
          // title="Azure AI Fundamentals"
          description={[
            "Descripción de las cargas de trabajo y las consideraciones de inteligencia artificial.",
            "Describir los principios fundamentales del aprendizaje automático en Azure.",
            "Descripción de las características de visión artificial."
          ]}
        />
      </div>
      <div className="timeline-item">
        <div className='timeline-item-date'>
          <span className="month">oct.</span>
          <span className="status">Online</span>
        </div>
        <div className="timeline-item-title">
          <img src={AzureFundamentalsIcon} alt="Azure Fundamentals" />
          <h2>Azure AI Engineer</h2>
        </div>
        <TrainingCard 
          // title="Azure AI Engineer Associate"
          description={[
            "Planeamiento y administración de una solución de Azure AI.",
            "Implementación de soluciones de ayuda para la toma de decisiones.",
            "Implementación de soluciones de visión artificial."
          ]}
        />
      </div>
    </div>
  );
};

export default Timeline;
