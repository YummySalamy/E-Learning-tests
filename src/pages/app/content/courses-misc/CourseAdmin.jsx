import React, { useState, useEffect } from 'react';
import Grid from '../../../../components/Grid';
import Card from '../../../../components/Card';
import ProgressBar from '../../../../components/charts/ProgressBar';
import List from '../../../../components/List';
import RollBackIcon from '../../../../assets/rollback-svgrepo-com.svg';
import ChatIcon from '../../../../assets/chat-svgrepo-com.svg';
import ListCheckIcon from '../../../../assets/list-check-svgrepo-com.svg';
import MainChat from '../../../../components/chats/MainChat';
import SessionsList from './SessionsList';
import Modal from '../../../../components/Modal';
import LearningImage from '../../../../assets/learning-concept.png';
import DatapathLogo from '../../../../assets/datapath-logo.png';

import '../assets/Content.css';

const dummyLessons = [
    'Lección 1: Introducción',
    'Lección 2: Instalación',
    'Lección 3: Configuración',
    'Lección 4: Uso básico',
    'Lección 5: Uso avanzado',
    'Lección 6: Ejercicios',
];

const dummySessions = [
    {
        title: 'Sesión 1: Introducción',
        description: 'Conociendo el curso',
        date: '28/09/2021 10:00 AM',
        completed: true
    },
    {
        title: 'Sesión 2: Instalación',
        description: 'Instalando el software necesario',
        date: 'Hace 2 días',
        completed: true
    },
    {
        title: 'Sesión 3: Configuración',
        description: 'Configurando el software',
        date: 'Hace 1 día',
        completed: true
    },
    {
        title: 'Sesión 4: Uso básico',
        description: 'Usando el software',
        date: 'En 17 minutos',
        completed: false,
        assignations: [
            {
                title: 'Entrega de proyecto final',
                state: 'Pendiente'
            }
        ]
    },
];

const dummyMessages = [
    {
        text: 'Hello!',
        type: 'sent'
    },
    {
        text: 'Hi!',
        type: 'received'
    },
    {
        text: 'How are you?',
        type: 'sent',
    },
    {
        text: 'I am good. How about you?',
        type: 'received'
    },
    {
        text: 'I am good too. 😄',
        type: 'sent'
    },
    {
        text: 'Great!',
        type: 'received',
    },
    {
        text: 'This is a concept image.',
        type: 'received',
        file: LearningImage
    }
];

const CourseAdmin = ({ course, onEdit, onDelete, onClose }) => {
    const [courseData, setCourseData] = useState(course);
    const [chatMessages, setChatMessages] = useState(dummyMessages);
    const [showChat, setShowChat] = useState(false);
    const [showSessions, setShowSessions] = useState(false);

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
                {/* <Modal
                    show={showChat}
                    onClose={() => setShowChat(false)}
                >
                    XD
                </Modal> */}
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
                    <button className='course-admin-chat' style={{marginTop: '1rem'}}
                        onClick={() => setShowSessions(!showSessions)}
                    >
                        <img style={{width: '20px'}} src={ListCheckIcon} alt="Programas" />
                        Inspeccionar sesiones
                    </button>
                    {
                        showChat && (
                            <MainChat 
                                handleClose={() => setShowChat(false)}
                                chatInfo={{ header: courseData.title , icon: DatapathLogo }}
                                messages={chatMessages}
                            />
                        )
                    }
                    {
                        showSessions && (
                            <Modal 
                                show={showSessions}
                                onClose={() => setShowSessions(false)}
                                children={
                                    <SessionsList 
                                sessions={dummySessions}
                                onClose={() => setShowSessions(false)}
                            />}
                            >
                            
                            </Modal>
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