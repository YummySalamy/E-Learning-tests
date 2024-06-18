import React, { useState, useEffect } from 'react';
import { GoPaperclip } from "react-icons/go";
import './assets/Chats.css';

const MainChat = ({ chatInfo, messages, handleClose }) => {

    const [chatMessages, setChatMessages] = useState([]);
    const [file, setFile] = useState(null);

    const handleSend = () => {
        const input = document.querySelector('.chat-input input');
        const text = input.value;
        if (text) {
            setChatMessages([...chatMessages, { text, type: 'sent' }]);
            input.value = '';
        }
    }

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setChatMessages([...chatMessages, { file: e.target.result, type: 'sent' }]);
            }
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        setChatMessages(messages);
    }, [messages]);

    useEffect(() => {
        const chat = document.querySelector('.chat');
        chat.scrollTop = chat.scrollHeight;
    }, [chatMessages]);

    return (
        <div className='chat-container'>
            <header className="chat-header">
                <div className='chat-header-content'>
                    <img src={chatInfo.icon} alt="chat-icon" />
                </div>

                <h2>{chatInfo.header}</h2>
                <button onClick={handleClose}>Cerrar</button>
            </header>
            <div className="chat">
                {chatMessages.map((message, index) => (
                    <div key={index} className={`chat-message ${message.type}`}>
                        <div className="chat-message-content">
                            {message.text}
                            {message.file && (
                                <div className="chat-message-file">
                                    <img src={message.file} alt="file" />
                                </div>
                            )
                            }
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <button 
                    style={{ marginRight: '1rem' }}
                    type="file"
                    onChange={handleFile}

                >
                    <GoPaperclip />
                </button>
                <input 
                    type="text" 
                    placeholder="Escribe un mensaje..."
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSend();
                        }
                    }
                    }
                />
                <button
                    onClick={handleSend}
                >Envíar</button>
            </div>
        </div>
    );
}

export default MainChat;
