"use client";
import React, { useState, useCallback } from 'react';
import './homepage.css';
import AnimatedText from './AnimatedText';
import ChatTextbox from './ChatTextbox';
import MainCards from './MainCards';
import WarningTab from '../utils/WarningTab';
import ChatResponse from './ChatResponse';

interface Message {
  userMessage: string;
  response: string;
  id: number;
}

interface MainContentProps {
  isMessageSent: boolean;
  setIsMessageSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainContent: React.FC<MainContentProps> = ({ isMessageSent, setIsMessageSent }) => {
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentResponse, setCurrentResponse] = useState<string>("");
  const [messageCount, setMessageCount] = useState<number>(0);
  
  const handleMessageSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        userMessage: message,
        response: "",
        id: Date.now()
      };
      
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessageCount(prevCount => prevCount + 1);
      setIsMessageSent(true);
      setMessage("");
      setCurrentResponse("");
    }
  };

  // Using useCallback to memoize the response handler
  const handleResponseUpdate = useCallback((newResponse: string) => {
    setCurrentResponse(newResponse);
    setMessages(prevMessages => {
      const updatedMessages = [...prevMessages];
      if (updatedMessages.length > 0) {
        updatedMessages[updatedMessages.length - 1].response = newResponse;
      }
      return updatedMessages;
    });
  }, []);

  return (
    <main className="flex-grow flex flex-col justify-center items-center text-center gap-[17px]" style = {{marginTop: isMessageSent? "50px" : "-127px"}}>
      {!isMessageSent && <AnimatedText />}

      {isMessageSent && messageCount === 1 && <WarningTab />}

      <div className="w-full flex flex-col gap-[17px] scrollbarDiv">
        {messages.map((msg) => (
          <div key={msg.id}>
            <ChatResponse
              userMessage={msg.userMessage}
              responseMessage={msg.id === messages[messages.length - 1]?.id ? currentResponse : msg.response}
            />
          </div>
        ))}
      </div>
        
      <ChatTextbox
        message={message}
        setMessage={setMessage}
        setResponse={handleResponseUpdate}
        onSend={handleMessageSend}
        className={isMessageSent ? "chat-textbox-container-after" : "chat-textbox-container-before"}
      />

      {!isMessageSent && <MainCards setMessage={setMessage} />}
    </main>
  );
};

export default MainContent;