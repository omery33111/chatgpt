"use client";
import React, { useState } from 'react';
import './homepage.css';
import AnimatedText from './AnimatedText';
import ChatTextbox from './ChatTextbox';
import MainCards from './MainCards';
import WarningTab from '../utils/WarningTab';
import ChatResponse from './ChatResponse';

interface MainContentProps {
  isMessageSent: boolean;
  setIsMessageSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainContent: React.FC<MainContentProps> = ({ isMessageSent, setIsMessageSent }) => {
  const [message, setMessage] = useState<string>("");
  const [messageCount, setMessageCount] = useState<number>(0);

  const [sentMessages, setSentMessages] = useState<string[]>([]);
  const [response, setResponse] = useState<string>("");

  const handleMessageSend = () => {
    setSentMessages([...sentMessages, message]);
    setMessageCount((prevCount) => prevCount + 1);
    setIsMessageSent(true);
    setMessage("");
  };

  return (
    <main className="flex-grow flex flex-col justify-center items-center text-center gap-[26px] mt-[10px]">
      {!isMessageSent && <AnimatedText />}

      {isMessageSent && messageCount === 1 && <WarningTab />}

      {isMessageSent && <ChatResponse userMessage={sentMessages[sentMessages.length - 1]} responseMessage={response} />}

      <ChatTextbox
        message={message}
        setMessage={setMessage}
        setResponse={setResponse}
        onSend={handleMessageSend}
        className={isMessageSent ? "chat-textbox-container-after" : "chat-textbox-container-before"}
      />

      {!isMessageSent && <MainCards setMessage={setMessage} />}
    </main>
  );
};

export default MainContent;
