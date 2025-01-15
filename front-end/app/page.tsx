"use client";

import React, { useState } from 'react';
import MainHeader from './components/homepage/MainHeader';
import MainContent from './components/homepage/MainContent';
import MainFooter from './components/homepage/MainFooter';
import './globals.css';
import MainFooterAfter from './components/homepage/MainFooterAfter';



const Page = () => {

  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);

  
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <MainContent setIsMessageSent={setIsMessageSent} isMessageSent={isMessageSent} />

      {isMessageSent ? <MainFooterAfter /> : <MainFooter />}
    </div>
  );
};

export default Page;
