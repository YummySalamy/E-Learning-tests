import React from 'react';
import Timeline from '../content/courses-misc/Timeline';
import { FaRegClock } from "react-icons/fa";
import AzureFundamentalsIcon from '../content/assets/icons/azure-fundamentals-icon.png';
import './assets/Extra.css';

const dummyCards = [
    {
        title: 'Azure Fundamentals',
        date: 'ago.',
        status: 'Online',
        image: AzureFundamentalsIcon,
        description: [
        'Descripción de los conceptos de la nube',
        'Descripción de la arquitectura y los servicios de Azure',
        'Descripción de la administración y la gobernanza de Azure'
        ]
    },
    {
        title: 'Azure AI Fundamentals',
        date: 'sep.',
        status: 'Online',
        image: AzureFundamentalsIcon,
        description: [
        'Descripción de las cargas de trabajo y las consideraciones de inteligencia artificial.',
        'Describir los principios fundamentales del aprendizaje automático en Azure.',
        'Descripción de las características de visión artificial.'
        ]
    },
    {
        title: 'Azure AI Engineer',
        date: 'oct.',
        status: 'Online',
        image: AzureFundamentalsIcon,
        description: [
            'Planeamiento y administración de una solución de Azure AI.',
            'Implementación de soluciones de ayuda para la toma de decisiones.',
            'Implementación de soluciones de visión artificial.'
        ]
    }
  ];

const Configuration = () => {
    return (
        <div className="settings">
            {/* <h1>Configuración</h1>
            <p>Configura tu cuenta y preferencias</p> */}
            <div className="settings-header">
            <h1>Cronograma</h1>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px'}}>
                    <span style={{display: 'flex', fontSize: '1.2em', background: '#fff', padding: '10px', border: '1px solid #333', borderRadius: '50%'}}>
                        <FaRegClock />
                    </span>
                    <p>Iniciamos el 19 de Agosto. 2024</p>
                </div>
            </div>
            <Timeline
                cards={dummyCards}
            />
        </div>
    );
}

export default Configuration;