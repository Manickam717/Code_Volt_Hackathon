import React, { useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! Welcome to EV Assistance. How can I help you today?",
      time: "2:30 PM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const userMessage = {
        sender: "user",
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          sender: "ai",
          text: "Thank you for your message. We are here to assist you with any queries.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="h-full bg-gray-50">
      <div className="h-full flex flex-col">
        {/* Chat Header */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <i className="fas fa-headset text-emerald-600"></i>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
            </div>
            <div>
              <h2 className="font-semibold">EV Support Assistant</h2>
              <p className="text-sm text-emerald-600">
                Online - Usually responds in 2 mins
              </p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors !rounded-button whitespace-nowrap">
            <i className="fas fa-ellipsis-v text-gray-600"></i>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-2 ${message.sender === "user" ? "justify-end" : ""}`}
            >
              {message.sender === "ai" && (
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-headset text-emerald-600 text-sm"></i>
                </div>
              )}
              <div className={`bg-${message.sender === "ai" ? "white" : "blue-600 text-white"} rounded-lg p-3 shadow-sm max-w-lg`}>
                <p className={message.sender === "ai" ? "text-gray-800" : ""}>{message.text}</p>
                <p className={`text-xs ${message.sender === "ai" ? "text-gray-400" : "text-blue-100"} mt-1`}>{message.time}</p>
              </div>
              {message.sender === "user" && (
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user text-blue-600 text-sm"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="bg-white p-4 border-t">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors !rounded-button whitespace-nowrap">
              <i className="fas fa-paperclip text-gray-600"></i>
            </button>
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center">
              <input
                type="text"
                placeholder="Type your message..."
                className="bg-transparent border-none w-full focus:outline-none text-sm"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
            </div>
            <button
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center !rounded-button whitespace-nowrap"
              onClick={handleSendMessage}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport; 