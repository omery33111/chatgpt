import React, { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import "./utils.css";

interface KeyBoardSCProps {
  show: boolean;
  onHide: () => void;
}

const KeyBoardSC: React.FC<KeyBoardSCProps> = ({ show, onHide }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

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
        className="custom-modal keyboard-sc-modal"
      >
        <div ref={modalContentRef} data-state="open">
          <div className="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
            <div className="flex">
              <div className="flex items-center">
                <div className="flex grow flex-col gap-1">
                  <h2
                    id="radix-:R1klj5H1:"
                    className="text-lg font-semibold leading-6 text-token-text-primary"
                  >
                    Keyboard shortcuts
                  </h2>
                </div>
              </div>
            </div>
            <button
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
          <div className="flex-grow overflow-y-auto p-4 sm:p-6">
            <div className="grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-9">
              <div className="flex flex-col overflow-hidden">
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Open new chat</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">o</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Focus chat input</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-xs text-[#5D5D5D]">Esc</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Copy last code block</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">;</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Copy last response</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">c</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden">
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Set custom instructions</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">i</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Toggle sidebar</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">s</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Delete chat</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Shift</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">⌫</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between overflow-hidden text-token-text-primary">
                  <div className="flex flex-shrink items-center overflow-hidden text-sm">
                    <div className="truncate">Show shortcuts</div>
                  </div>
                  <div className="ml-3 flex flex-row gap-2">
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[50px]">
                      <span className="text-xs text-[#5D5D5D]">Ctrl</span>
                    </div>
                    <div className="my-2 flex h-8 items-center justify-center rounded-md border border-token-border-light capitalize text-token-text-secondary min-w-[32px]">
                      <span className="text-sm text-[#5D5D5D]">/</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default KeyBoardSC;
