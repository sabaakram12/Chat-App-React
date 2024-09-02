import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
const ChatRoomList = ({ joinRoom, createRoom }) => {
  const { rooms } = useChat();
  const [newRoomName, setNewRoomName] = useState('');
  const handleCreateRoom = () => {
    if (newRoomName) {
      createRoom(newRoomName);
      setNewRoomName('');
    }
  };
  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <input
        type="text"
        value={newRoomName}
        onChange={(e) => setNewRoomName(e.target.value)}
        placeholder="New room name"
        className="border p-2 mb-2 w-full"
      />
      <button onClick={handleCreateRoom} className="bg-sky-900 text-white p-2 w-full">Create Room</button>
      <ul className="mt-4">
        {rooms.map((room, index) => (
          <li key={index} onClick={() => joinRoom(room, 'User')} className="cursor-pointer p-2 hover:bg-gray-400">
            {room}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ChatRoomList;



