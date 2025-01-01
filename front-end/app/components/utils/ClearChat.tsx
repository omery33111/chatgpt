import React, { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import "./utils.css";
import { useRouter } from 'next/navigation';

interface ClearChatProps {
  show: boolean;
  onHide: () => void;
}

const ClearChat: React.FC<ClearChatProps> = ({ show, onHide }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(event.target as Node)
    ) {
      onHide();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [show]);
  
  return (
    <>
      {show && <div className="dim-background"></div>}
      <Modal
        show={show}
        onHide={onHide}
        className="custom-modal settings-clearchat-modal"
      >
          <div ref={modalContentRef} data-state="open">
            <div className="flex-grow overflow-y-auto">
              <div className="flex flex-col justify-center p-6">
                <div className="mb-2 grid w-full grid-cols-[1fr,auto,1fr] items-center">
                  <div></div>
                  <div className="text-xl font-medium">Clear current chat?</div>
                  <div className="flex justify-end">
                  <button
                  onClick={onHide}
  data-testid="close-button"
  className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent dark:hover:bg-gray-700 sm:mt-0"
  aria-label="Close"
>
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon-md"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.63603 5.63604C6.02656 5.24552 6.65972 5.24552 7.05025 5.63604L12 10.5858L16.9497 5.63604C17.3403 5.24552 17.9734 5.24552 18.364 5.63604C18.7545 6.02657 18.7545 6.65973 18.364 7.05025L13.4142 12L18.364 16.9497C18.7545 17.3403 18.7545 17.9734 18.364 18.364C17.9734 18.7545 17.3403 18.7545 16.9497 18.364L12 13.4142L7.05025 18.364C6.65972 18.7545 6.02656 18.7545 5.63603 18.364C5.24551 17.9734 5.24551 17.3403 5.63603 16.9497L10.5858 12L5.63603 7.05025C5.24551 6.65973 5.24551 6.02657 5.63603 5.63604Z"
      fill="currentColor"
    ></path>
  </svg>
</button>
                  </div>
                </div>
                <p className="mb-6 text-center text-token-text-secondary">
                  To start a new chat, your current conversation will be
                  discarded.{" "}
                  <a onClick={() => router.push('/authentication/register')} className="font-medium text-token-text-primary" style = {{cursor: "pointer"}}>
                    Sign up
                  </a>{" "}
                  or{" "}
                  <a onClick={() => router.push('/authentication/login')} className="font-medium text-token-text-primary" style = {{cursor: "pointer"}}>
                    log in
                  </a>{" "}
                  to save chats.
                </p>
                  <button className="btn relative btn-primary btn-giant mb-3 enabled:hover:bg-[rgba(0,0,0,0.87)] bg-black rounded-[30px] h-[46px]">
                    <div className="flex items-center justify-center font-semibold text-md text-white">Clear chat</div>
                  </button>
                  <button className="btn relative btn-ghost btn-giant mt-[0px] enabled:hover:bg-[rgba(0,0,0,0.060)] rounded-[30px] h-[46px]">
                    <div className="flex items-center justify-center font-semibold" onClick={() => router.push('/authentication/register')}>Log in</div>
                  </button>
              </div>
            </div>
          </div>
      </Modal>
    </>
  );
};

export default ClearChat;
