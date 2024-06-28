import React, { useState, useEffect } from 'react';
import { FaCheck, FaFolder, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosCloseCircleOutline, IoIosCall } from "react-icons/io";
import { BiSolidVideoRecording } from "react-icons/bi";
import AssignationInfo from './AssignationInfo';
import '../assets/Content.css';

const SessionsList = ({ sessions, onClose }) => {
    const [list, setList] = useState([]);
    const [expandedSessions, setExpandedSessions] = useState({});
    const [selectedAssignation, setSelectedAssignation] = useState(null);

    useEffect(() => {
        setList(sessions);
    }, [sessions]);

    const toggleExpand = (index) => {
        setExpandedSessions(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className='sessions'>
            { !selectedAssignation ? (
            <div className="sessions-list">
                {list.map((session, index) => (
                    <div key={index} className="session-item">
                        <div className="session-item-header">
                            <div className="session-item-title">
                                <FaCheck className="session-item-icon" color={session.completed ? 'green' : 'gray'} />
                                {session.title}
                            </div>
                            <div className="session-item-date">
                                {session.date}
                            </div>
                            <div className="session-item-buttons">
                                {session.completed ? (
                                    <button className="session-item-button" title="Ver grabación" style={{ backgroundColor: '#c5c5c5' }}>
                                        <BiSolidVideoRecording />
                                    </button>
                                ) : (
                                    <button className="session-item-button" title="Entrar a llamada" style={{ backgroundColor: '#e4f3d9' }}>
                                        <IoIosCall />
                                    </button>
                                )}
                                <button className="session-item-button" title="Ver material de curso">
                                    <FaFolder />
                                </button>
                                {session.assignations && (
                                    <button className="session-item-button" onClick={() => toggleExpand(index)} title="Ver asignaciones">
                                        {expandedSessions[index] ? <FaChevronUp /> : <FaChevronDown />}
                                    </button>
                                )}
                            </div>
                        </div>
                        {expandedSessions[index] && session.assignations && (
                            <div className="session-assignations">
                                {session.assignations.map((assignation, idx) => (
                                    <div key={idx} className="assignation-item">
                                        <div className="assignation-title">{assignation.title}</div>
                                        <div className="assignation-state">{assignation.state}</div>
                                        <button 
                                            className="assignation-details-button"
                                            onClick={() => setSelectedAssignation(assignation)}
                                        >Ver detalles</button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            ) : (
                <AssignationInfo assignation={selectedAssignation} setAssignation={setSelectedAssignation} />
            )
            }
            <button className="sessions-close-button" onClick={onClose}>
                <IoIosCloseCircleOutline />
            </button>
        </div>
    );
}

export default SessionsList;