import React from 'react';
import './assets/Extra.css';
import Timeline from '../content/courses-misc/Timeline';
import { FaRegClock } from "react-icons/fa";

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
            <Timeline />
        </div>
    );
}

export default Configuration;