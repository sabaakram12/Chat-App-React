import React, { useState } from 'react';

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState(''); // Message state

  // Handle send action
  const handleSend = () => {
    if (message.trim()) { // Prevent empty messages from being sent
      sendMessage(message); // Send the message
      setMessage(''); // Clear input after sending
    }
  };

  return (
    <div className="flex items-center mt-2">
      <input
        type="text"
        value={message} // Controlled input bound to message state
        onChange={(e) => setMessage(e.target.value)} // Update message state
        placeholder="Type your message"
        className="flex-1 p-2 border border-gray-600 rounded" // Input styling
      />
      <button
        onClick={handleSend} // Trigger send message on click
        className="ml-2 p-2 bg-blue-500 text-white rounded" // Button styling
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
