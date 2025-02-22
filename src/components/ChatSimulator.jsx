import React, { useState, useEffect, useRef } from 'react';

const ChatSimulator = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! 👋", sender: "bot", timestamp: new Date().toLocaleTimeString() },
    { id: 2, text: "How can I help you today?", sender: "bot", timestamp: new Date().toLocaleTimeString() }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const chatEndRef = useRef(null);
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const botResponses = {
    "hello": "Hi there! How are you?",
    "help": "I'm here to help! What do you need?",
    "bye": "Goodbye! Have a great day!",
    "default": "Interesting! Tell me more about that."
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
      edited: false
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const lowercaseMsg = newMessage.toLowerCase();
      let botReply = botResponses.default;
      
      Object.entries(botResponses).forEach(([keyword, response]) => {
        if (lowercaseMsg.includes(keyword)) {
          botReply = response;
        }
      });

      const botMessage = {
        id: messages.length + 2,
        text: botReply,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString(),
        edited: false
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleDelete = (id) => {
    setMessages(prev => prev.filter(msg => msg.id !== id));
  };

  const startEditing = (message) => {
    setEditingId(message.id);
    setEditText(message.text);
  };

  const handleEdit = () => {
    if (!editText.trim()) return;
    
    setMessages(prev => prev.map(msg => 
      msg.id === editingId 
        ? { ...msg, text: editText, edited: true, timestamp: new Date().toLocaleTimeString() }
        : msg
    ));
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-emerald-600 text-white p-4 flex items-center">
        <span className="text-2xl mr-3">🤖</span>
        <div>
          <h1 className="font-semibold">ChatBot</h1>
          <p className="text-sm opacity-75">Online</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 relative group ${
                message.sender === 'user'
                  ? 'bg-emerald-500 text-white rounded-br-none'
                  : 'bg-white text-gray-800 rounded-bl-none'
              }`}
            >
              {editingId === message.id ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full p-1 rounded border text-gray-800"
                    autoFocus
                  />
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={handleEdit}
                      className="p-1 rounded bg-emerald-600 hover:bg-emerald-700"
                    >
                      ✅
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="p-1 rounded bg-red-500 hover:bg-red-600"
                    >
                      ❌
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p>{message.text}</p>
                  <div className="flex items-center gap-1">
                    <p className={`text-xs ${message.sender === 'user' ? 'text-emerald-50' : 'text-gray-500'}`}>
                      {message.timestamp}
                    </p>
                    {message.edited && (
                      <span className={`text-xs ${message.sender === 'user' ? 'text-emerald-50' : 'text-gray-500'}`}>
                        (edited)
                      </span>
                    )}
                  </div>
                  {message.sender === 'user' && (
                    <div className="absolute right-0 top-0 -mr-16 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => startEditing(message)}
                        className="p-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-600"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(message.id)}
                        className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600"
                      >
                        🗑️
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-full focus:outline-none focus:border-emerald-500"
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white p-2 rounded-full hover:bg-emerald-600 transition-colors"
            disabled={!newMessage.trim()}
          >
            📤
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatSimulator;