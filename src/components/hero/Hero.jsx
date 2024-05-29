import React from 'react';
import PropTypes from 'prop-types';
import './assets/Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="hero-title"> 
                    Educación de calidad para tu <span> futuro profesional</span>
                </h1>
                <p className="hero-subtitle">
                    Aprende de los mejores profesionales en el área de tecnología y negocios.
                </p>
                <div className="hero-actions">
                    <button className="hero-button">Ver todos los cursos</button>
                    <button className="hero-button">Más información</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
