import React, { useState } from 'react';

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="chat-container">
            {messages.map((msg, index) => (
                <div key={index} className={`message ${index % 2 === 0 ? '' : 'user-message'}`}>
                    {msg}
                </div>
            ))}
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' ? sendMessage() : null}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default ChatBot;
