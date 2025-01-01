import React from "react";
import { Modal } from "react-bootstrap";
import "./utils.css";

interface SettingsInfoProps {
  show: boolean;
  onHide: () => void;
}

const SettingsInfo: React.FC<SettingsInfoProps> = ({ show, onHide }) => {
  return (
    <>
      {show && <div className="dim-background"></div>}
      <Modal show={show} onHide={onHide} className="custom-modal settings-info-modal">
      <div
          role="dialog"
          id="radix-:r5j:"
          aria-describedby="radix-:r5l:"
          aria-labelledby="radix-:r5k:"
          data-state="open"
        >
          <div className="px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10">
            <div className="flex">
              <div className="flex items-center">
                <div className="flex grow flex-col gap-1">
                  <h2
                    id="radix-:r5k:"
                    className="text-lg font-semibold leading-6 text-token-text-primary"
                  >
                    Settings
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
            <div className="border-b border-token-border-light pb-3 last-of-type:border-b-0">
              <div className="flex items-center justify-between">
                <div>Improve the model for everyone</div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  data-state="checked"
                  value="on"
                  aria-label="Improve the model for everyone"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-secondary focus-visible:ring-offset-2 focus-visible:radix-state-checked:ring-black focus-visible:dark:ring-token-main-surface-primary focus-visible:dark:radix-state-checked:ring-green-600 cursor-pointer bg-gray-200 radix-state-checked:bg-black dark:border dark:border-token-border-medium dark:bg-transparent relative shrink-0 rounded-full dark:radix-state-checked:border-green-600 dark:radix-state-checked:bg-green-600 h-[20px] w-[32px]"
                >
                  <span
                    data-state="checked"
                    className="flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform ltr:translate-x-0.5 rtl:-translate-x-0.5 bg-white h-[16px] w-[16px] ltr:radix-state-checked:translate-x-[14px] rtl:radix-state-checked:translate-x-[-14px]"
                  ></span>
                </button>
              </div>
              <div className="text-xs text-token-text-secondary pr-12 mt-3">
                Allow your content to be used to train our models, which makes
                ChatGPT better for you and everyone who uses it. We take steps
                to protect your privacy.{" "}
                <a
                  href="https://help.openai.com/en/articles/5722486"
                  target="_blank"
                  className="underline text-[#5D5D5D]"
                  rel="noreferrer"
                >
                  Learn more
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SettingsInfo;
