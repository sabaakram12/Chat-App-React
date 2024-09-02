import React from 'react';
import ChatRoomList from './components/ChatRoomList';
import ChatRoom from './components/ChatRoom';
import { ChatProvider, useChat } from './context/ChatContext';




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
