"use client";
import React, { useEffect, useRef } from "react";
import SocialButton from "./SocialButton";
import AuthEmailField from "../components/utils/AuthEmailField";

const LoginContent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input on page load
    }
  }, []);
  return (
    <main className="main-container">
      <section className="content-wrapper">
        <div className="title-wrapper">
          <h1 className="title">Welcome back</h1>
        </div>

        <div className="login-container">
          <div className="input-wrapper">
            <AuthEmailField inputRef={inputRef} />

            <div className="invalid-email-error-message ">
              <img
                className="error-icon"
                src="https://auth.openai.com/assets/error-icon-BaFi8GTB.svg"
              />
              Email is not valid.
            </div>
            <div className="invalid-email-error-message ">
              <img
                className="error-icon"
                src="https://auth.openai.com/assets/error-icon-BaFi8GTB.svg"
              />
              Your organization requires SSO, click Continue to log in with SSO
              instead.
            </div>
          </div>

          <div style={{ transform: "translateY(-4px)" }}>
            <button className="continue-btn">Continue</button>

            <p className="other-page">
              Don't have an account?
              <a className="other-page-link" href="/authentication/register">
                Sign Up
              </a>
            </p>

            <div className="divider-wrapper">
              <span className="divider">Or</span>
            </div>

            <div className="social-section">
              <SocialButton
                src="https://auth.openai.com/assets/google-logo-NePEveMl.svg"
                alt="Google logo"
                text="Continue with Google"
              />

              <SocialButton
                src="https://auth.openai.com/assets/microsoft-logo-BUXxQnXH.svg"
                alt="Microsoft logo"
                text="Continue with Microsoft Account"
              />

              <SocialButton
                src="https://auth.openai.com/assets/apple-logo-vertical-full-bleed-tAoxPOUx.svg"
                alt="Apple logo"
                text="Continue with Apple"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginContent;
