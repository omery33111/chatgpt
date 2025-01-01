"use client";
import React, { useState } from 'react'
import './homepage.css';
import AnimatedText from './AnimatedText';
import ChatTextbox from './ChatTextbox';
import MainCards from './MainCards';

const MainContent = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <main className="flex-grow flex flex-col justify-center items-center text-center gap-[26px] mt-[10px]">

        <AnimatedText />

        <ChatTextbox message={message} setMessage={setMessage} />

        <MainCards setMessage={setMessage} />

    </main>
  )
}

export default MainContent