import React from "react";

const AuthFooter = () => {
  return (
    <footer style={{ fontFamily: "Söhne, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif" }}
    className="oai-footer relative w-full">
      <div className="flex items-center justify-center">
        <a
          href="https://openai.com/policies/terms-of-use"
          className="text-[#10a37f] text-[14px] leading-none"
        >
          Terms of Use
        </a>
        <span className="separator"></span>
        <a
          href="https://openai.com/policies/privacy-policy"
          className="text-[#10a37f] text-[14px] leading-none"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default AuthFooter;