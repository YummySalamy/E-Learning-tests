import React, { useState, useEffect } from 'react';
import './assets/Chats.css';

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
        type: 'sent'
    },
    {
        text: 'I am good. How about you?',
        type: 'received'
    },
    {
        text: 'I am good too.',
        type: 'sent'
    },
    {
        text: 'Great!',
        type: 'received'
    }
];

const MainChat = ({ messages, handleClose }) => {

    const [chatMessages, setChatMessages] = useState(dummyMessages);

    useEffect(() => {
        setChatMessages(messages);
    }, [messages]);

    return (
        <div className='chat-container'>
            <header className="chat-header">
                <h2>Mi curso</h2>
                <button onClick={handleClose}>Cerrar</button>
            </header>
            <div className="chat">
                {chatMessages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.type}`}>
                        <div className="chat-message-content">
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Escribe un mensaje..." />
                <button>Envíar</button>
            </div>
        </div>
    );
}

export default MainChat;
