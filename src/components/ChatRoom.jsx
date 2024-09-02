import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';

const ChatRoom = () => {
  const { messages, sendMessage, socketId, userName } = useChat(); // Retrieve messages, socketId, and userName from ChatContext
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message) {
      sendMessage(message, userName); // Send the message along with userName
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div className="w-3/4 p-4">
      {/* Chat Messages Container */}
      <div className="border p-4 h-96 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.id === socketId 
                ? 'bg-blue-600 text-white text-right ml-auto max-w-xs' // Align the current user's messages to the right
                : 'bg-gray-300 text-black text-left mr-auto max-w-xs'   // Align other users' messages to the left
            }`}
          >
            <strong>{msg.author}:</strong> {msg.message}
          </div>
        ))}
      </div>

      {/* Input and Send Button */}
      <div className="mt-4 flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="border p-2 flex-grow" // Style input
        />
        <button
          onClick={handleSendMessage}
          className="bg-sky-800 text-white p-2 ml-2 border" // Style send button
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
