"use client";

import React, { useEffect, useState } from 'react';
import './homepage.css';
import ChatTextbox from './ChatTextbox';
import MainCards from './MainCards';

const AnimatedText = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "What can I help with?";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-center text-3xl font-semibold text-gray-800" style = {{transform: "translateY(12dvh)"}}>
      <span className="inline-block">{displayText}</span>
      {displayText.length < fullText.length && (
        <>
        <div className='dot-animation inline-block mb-[2px] animate-blink' />
        </>
      )}
    </h1>
  );
};

export default AnimatedText;
