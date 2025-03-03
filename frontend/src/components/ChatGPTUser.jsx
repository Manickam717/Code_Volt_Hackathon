import React, { useState } from 'react';

const ChatGPTUser = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages(prevMessages => [
                ...prevMessages,
                { text: input, sender: 'user' },
                { text: "This is a static AI response.", sender: 'ai' }
            ]);
            setInput('');
        }
    };

    return (
        <div className="flex h-screen">
            <aside className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col h-full">
                <div className="p-4">
                    <button
                        onClick={() => console.log("New Chat")}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded flex items-center justify-center gap-2 hover:bg-blue-500 transition-colors"
                    >
                        <i className="ri-add-line w-5 h-5" />
                        New Chat
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto px-2" id="chatHistory" />
                <div className="p-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <i className="ri-user-line text-gray-600" />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">John Anderson</div>
                            <div className="text-xs text-gray-500">john.anderson@example.com</div>
                        </div>
                        <i className="ri-settings-3-line w-5 h-5 text-gray-600" />
                    </div>
                </div>
            </aside>
            <main className="flex-1 flex flex-col h-full bg-white">
                <div className="border-b border-gray-200 p-4">
                    <div className="text-lg font-semibold text-gray-900">New Conversation</div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 chat-history" id="messagesContainer">
                    {messages.map((msg, index) => (
                        <div key={index} className={`p-3 rounded-lg max-w-[75%] break-words ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-200 p-4">
                    <div className="relative">
                        <textarea
                            className="message-input w-full resize-none rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none p-4 pr-24 text-gray-900 text-sm min-h-[56px] max-h-[200px]"
                            placeholder="Send a message..."
                            rows={1}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button
                            onClick={handleSend}
                            className="absolute right-2 bottom-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-500 transition-colors"
                        >
                            <i className="ri-send-plane-line w-5 h-5" />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ChatGPTUser;