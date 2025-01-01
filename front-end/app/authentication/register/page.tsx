import React from 'react'
import AuthHeader from '../AuthHeader'
import '../authentication.css';
import AuthFooter from '../AuthFooter';
import RegisterContent from '../RegisterContent';

const page = () => {
  return (
    <div className = "page-wrapper">
      <AuthHeader />

      <RegisterContent />

      <AuthFooter />
    </div>
  )
}

export default page