import React, { useState } from 'react';
import { FaHandsHelping } from "react-icons/fa";
import './assets/FloatingButton.css';

const HelpChat = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="help-chat">
            <button 
                className='floating-button' 
                onClick={() => {
                    setOpen(!open)
                    window.location.href = "/"
                }}
            >
                <FaHandsHelping />
            </button>
            {open && (
                <div className="chat">
                    <h2>Chat with us</h2>
                    <p>How can we help you today?</p>
                </div>
            )}
        </div>
    );
}

export default HelpChat;