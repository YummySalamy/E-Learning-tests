import React, { useState, useEffect } from "react";
import './assets/Components.css';

const Modal = ({ show, children, onClose }) => {
    const [showModal, setShowModal] = useState(show);

    useEffect(() => {
        setShowModal(show);
    }, [show]);

    const handleClose = () => {
        setShowModal(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <div className={`modal ${showModal ? 'show' : ''}`} >
            <div className="modal-content">
                <span className="modal-close" onClick={handleClose}>
                    &times;
                </span>
                {children}
            </div>
        </div>
    );
};

export default Modal;