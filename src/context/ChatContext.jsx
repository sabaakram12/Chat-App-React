import React, { createContext, useState, useContext, useEffect } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
                                                                                                           // Load messages from local storage when joining a room
    if (currentRoom) {
      const storedMessages = loadMessagesFromLocalStorage(currentRoom);
      setMessages(storedMessages || []);
    }

                                                                                                             // Listen for changes in local storage
    const handleStorageChange = (event) => {
      if (event.key === `chat_${currentRoom}`) {
        const updatedMessages = JSON.parse(event.newValue);
        setMessages(updatedMessages || []);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [currentRoom]);

  const joinRoom = (room, userName) => {
    setCurrentRoom(room);
    const storedMessages = loadMessagesFromLocalStorage(room);
    setMessages(storedMessages || []);
  };

  const sendMessage = (message) => {
    if (currentRoom) {
      const newMessage = { room: currentRoom, message, author: 'User', id: new Date().getTime() };
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, newMessage];
        saveMessagesToLocalStorage(currentRoom, updatedMessages);                                             // Save to local storage
        return updatedMessages;
      });
    }
  };

  const createRoom = (roomName) => {
    setRooms((prevRooms) => [...prevRooms, roomName]);
    joinRoom(roomName, '');
  };

                                                                                                                    // Save messages to local storage
  const saveMessagesToLocalStorage = (room, messages) => {
    if (room) {
      localStorage.setItem(`chat_${room}`, JSON.stringify(messages));
    }
  };

                                                                                                                                // Load messages from local storage
  const loadMessagesFromLocalStorage = (room) => {
    if (room) {
      const storedMessages = localStorage.getItem(`chat_${room}`);
      return storedMessages ? JSON.parse(storedMessages) : [];
    }
    return [];
  };

  return (
    <ChatContext.Provider value={{ rooms, currentRoom, messages, joinRoom, sendMessage, createRoom }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);




