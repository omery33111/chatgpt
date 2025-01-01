import React from 'react'
import AuthHeader from '../AuthHeader'
import '../authentication.css';
import AuthFooter from '../AuthFooter';
import LoginContent from '../LoginContent';

const page = () => {
  return (
    <div className = "page-wrapper">
      <AuthHeader />

      <LoginContent />

      <AuthFooter />
    </div>
  )
}

export default page