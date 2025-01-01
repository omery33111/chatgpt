import React from "react";
import InfoButton from "../utils/InfoButton";

const MainFooter = () => {
  return (
    <div
      className="relative w-full px-2 py-2 text-center text-xs text-token-text-secondary empty:hidden md:px-[60px] lg:absolute lg:left-0 lg:mt-0 lg:bottom-0"
      style={{
        opacity: "1",
        willChange: "auto",
        transform: "none",
        color: "#5D5D5D",
      }}
    >
      <div className="min-h-4">
        <span className="text-sm leading-none">
          By messaging ChatGPT, you agree to our{" "}
          <a
            href="https://openai.com/terms"
            target="_blank"
            className="text-token-text-primary underline decoration-token-text-primary text-[#0D0D0D]"
            rel="noreferrer"
          >
            Terms
          </a>{" "}
          and have read our{" "}
          <a
            href="https://openai.com/privacy"
            target="_blank"
            className="text-token-text-primary underline decoration-token-text-primary text-[#0D0D0D]"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
        </span>
      </div>
      <InfoButton />
    </div>
  );
};

export default MainFooter;
