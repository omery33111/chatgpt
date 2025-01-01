import React from 'react';
import MainHeader from './components/homepage/MainHeader';
import MainContent from './components/homepage/MainContent';
import MainFooter from './components/homepage/MainFooter';
import './globals.css';



const Page = () => {


  
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />

      <MainContent />

      <MainFooter />
    </div>
  );
};

export default Page;
