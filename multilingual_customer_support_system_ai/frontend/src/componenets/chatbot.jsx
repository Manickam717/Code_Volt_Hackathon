import React, { useState } from 'react';
import './chatbot.css'; // Import the CSS file for styling

const chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (userInput.trim()) {
            // Add user message
            setMessages(prev => [...prev, { sender: 'user', text: userInput }]);
            
            // Store the current input and clear it immediately for better UX
            const currentInput = userInput;
            setUserInput('');
            setIsLoading(true);

            try {
                const response = await fetch('http://127.0.0.1:5000/chat/dharsan/evlink', {  // Replace with your actual API endpoint
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ request: currentInput }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                //console.log(data)
                
                // Add bot response
                setMessages(prev => [...prev, { 
                    sender: 'bot', 
                    text: data.response || 'Sorry, I could not process your request.' 
                }]);
            } catch (error) {
                console.error('Error:', error);
                // Add error message
                setMessages(prev => [...prev, { 
                    sender: 'bot', 
                    text: 'Sorry, there was an error processing your request.' 
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>EV Link </h1>
            </div>
            <div className="chat-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                        {msg.sender === 'user' ? 'You: ' : 'EV-Link: '}{msg.text}
                    </div>
                ))}
                {isLoading && (
                    <div className="chat-message bot">
                            typing...
                    </div>
                )}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    disabled={isLoading}
                />
                <button 
                    className="chat-button" 
                    onClick={handleSend} 
                    disabled={isLoading}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default chatbot;
