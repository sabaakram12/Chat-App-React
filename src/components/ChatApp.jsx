
import React from 'react';
import ChatRoomList from './ChatRoomList';
import ChatRoom from './ChatRoom';
import { useChat } from "../contexts/ChatContext";



const ChatApp = () => {
  const { currentRoom, joinRoom, createRoom } = useChat();

  return (
    <div className="flex">
      <ChatRoomList joinRoom={joinRoom} createRoom={createRoom} />
      {currentRoom && <ChatRoom />}
    </div>
  );
};

const App = () => (
  <ChatProvider>
    <ChatApp />
  </ChatProvider>
);

export default App;
