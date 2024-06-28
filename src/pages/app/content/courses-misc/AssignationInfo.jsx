import React, {useEffect, useState} from "react";
import { IoMdSend } from "react-icons/io";
import "../assets/Content.css";

const dummyComments = [
    {
        user: "María López",
        comment: "Propuesta 1: Crear un nuevo proyecto basado en diseño de software. Se requiere la creación de un sistema de gestión de inventarios.",
        date: "Hace 5 días"
    },
    {
        user: "Juan Pérez",
        comment: "¡Excelente trabajo!",
        date: "Hace 2 días"
    },
    {
        user: "María López",
        comment: "Muy bien",
        date: "Hace 1 día"
    },
];

const AssignationInfo = ({assignation, setAssignation}) => {
    const [comments, setComments] = useState(dummyComments);
    // const [assignationData, setAssignationData] = useState({
        
    // });
    const [newComment, setNewComment] = useState("");

    const handleSetNewComment = (comment) => {
        setComments((prevComments) => [...prevComments, comment]);
    }


    return (
        <div className="assignation-info">
            <div className="assignation-info-header">
                <div className="assignation-info-title">
                    {assignation.title}
                </div>
                <div className="assignation-info-state">
                    {assignation.state}
                </div>
            </div>
            <div className="assignation-info-content">
                <div className="assignation-info-description">
                    {assignation.description}
                </div>
                <div className="assignation-info-comments">
                    <div className="assignation-info-comments-title">
                        Comentarios
                    </div>
                    {comments.map((comment, index) => (
                        <div key={index} className="assignation-info-comment">
                            <div className="assignation-info-comment-user">
                                {comment.user}
                            </div>
                            <div className="assignation-info-comment-comment">
                                {comment.comment}
                            </div>
                            <div className="assignation-info-comment-date">
                                {comment.date}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="assignation-info-add-comment">
                    <input type="text" placeholder="Escribe un comentario..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                    <button title="Enviar comentario" onClick={() => handleSetNewComment({user: "Tú", comment: newComment, date: "Ahora"})}>
                        <IoMdSend />
                    </button>
                </div>
                <div className="assignation-info-buttons">
                    <button className="assignation-info-button" title="close" onClick={() => setAssignation(null)}>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );

    
};

export default AssignationInfo;