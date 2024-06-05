import React, { useState, useEffect } from 'react';
import Grid from '../../../../components/Grid';
import Card from '../../../../components/Card';
import ProgressBar from '../../../../components/charts/ProgressBar';
import List from '../../../../components/List';
import RollBackIcon from '../../../../assets/rollback-svgrepo-com.svg';
import ChatIcon from '../../../../assets/chat-svgrepo-com.svg';
import MainChat from '../../../../components/chats/MainChat';

import '../assets/Content.css';

const dummyLessons = [
    'Lección 1: Introducción',
    'Lección 2: Instalación',
    'Lección 3: Configuración',
    'Lección 4: Uso básico',
    'Lección 5: Uso avanzado',
    'Lección 6: Ejercicios',
];

const CourseAdmin = ({ course, onEdit, onDelete, onClose }) => {
    const [courseData, setCourseData] = useState(course);
    const [chatMessages, setChatMessages] = useState([]);
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
        setCourseData(course);
    }, [course]);

    return (
        <div className="course-admin">
            <div className="course-admin-content">
            <Grid columns={2}>
                <Card>
                    <h2>{courseData.title}</h2>
                    <h3>{courseData.content}</h3>
                </Card>
                <Card styles={{ background: '#333', color: '#fff', gap: '0'}}>
                    <p>{courseData.description}</p>
                </Card>
            </Grid>
            </div>
            <Grid columns={3}>
            <div className="course-admin-actions">
                <Card styles={{ margin: '0', gap: '0', maxHeight: '100px'}}>
                    <h3>Progreso de curso</h3>
                    <ProgressBar progress={courseData.progress} showPercentage />
                </Card>
                <Card styles={{ margin: '0', gap: '0'}}>
                    <p>
                        Ultima reunión: Hace 13 horas...
                    </p>
                    <button className='course-admin-chat'
                        onClick={() => setShowChat(!showChat)}
                    >
                        <img style={{width: '20px'}} src={ChatIcon} alt="Chat" />
                        Inspeccionar actividad
                    </button>
                    {
                        showChat && (
                            <MainChat 
                                handleClose={() => setShowChat(false)}
                                messages={chatMessages}
                            />
                        )
                    }
                </Card>
                <Card styles={{ margin: '0', gap: '0'}}>
                    <p>
                    © Datapath no se hace responsable por el contenido de los cursos.
                    </p>
                </Card>
            </div>
            <Card styles={{ margin: '0', gap: '0'}}>
                <h3>Lecciones</h3>
                <List items={dummyLessons} />
            </Card>
            <Card styles={{ background: '#333', color: '#fff', gap: '0'}}>
                <div className="course-admin-resources">
                    <h3>Recursos</h3>
                    <p>
                        Poniendo en práctica lo aprendido
                    </p>
                    <iframe 
                            src={'https://www.youtube.com/embed/EZInRScZ-QM?si=xhvFS6CavapRLKJ6'}
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                    ></iframe>
                    <p>
                        En este espacio se mostrarán los recursos compartidos por tu profesor.
                    </p>
                </div>
            </Card>

            </Grid>
            <button className="course-admin-close" onClick={onClose}>
                <img style={{width: '20px'}} src={RollBackIcon} alt="Volver" />
                Volver a Cursos
            </button>
        </div>
    );
}

export default CourseAdmin;