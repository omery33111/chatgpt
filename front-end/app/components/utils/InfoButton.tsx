"use client";
import React, { useEffect, useRef, useState } from "react";
import KeyBoardSC from "./KeyBoardSC";
import SettingsInfo from "./SettingsInfo";

const InfoButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showKeyboardSC, setShowKeyboardSC] = useState(false); // State to show KeyBoardSC
    const [showSettingsInfo, setShowSettingsInfo] = useState(false); // State to show ShowSettingsInfo
    const menuRef = useRef<HTMLDivElement>(null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const toggleKeyBoardSC = () => {
      setShowKeyboardSC(!showKeyboardSC); // Toggle the KeyBoardSC modal
    };

    const toggleSettingsInfo = () => {
      setShowSettingsInfo(!showSettingsInfo); // Toggle the SettingsInfo modal
    };
  
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsOpen(false);
          setShowKeyboardSC(false); // Close KeyBoardSC when clicking outside
          setShowSettingsInfo(false); // Close KeyBoardSC when clicking outside
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
  return (
    <div ref={menuRef} className="group absolute bottom-2 end-2 z-20 flex flex-col gap-1 md:flex lg:bottom-3 lg:end-3">
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full border border-token-border-light text-xs text-token-text-secondary"
        type="button"
        id="radix-:R15qaaklj5:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-testid="undefined-button"
        data-state={isOpen ? "open" : "closed"}
        onClick={toggleMenu}
      >
        ?
      </button>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            right: "10px",
            bottom: "36px",
            minWidth: "max-content",
            zIndex: 50,
            backgroundColor: "white"
          }}>
          <div
            data-side="top"
            data-align="start"
            role="menu"
            aria-orientation="vertical"
            data-state="open"
            data-radix-menu-content=""
            dir="ltr"
            id="radix-:R15qaaklj5H1:"
            aria-labelledby="radix-:R15qaaklj5:"
            className="z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2 min-w-[280px] overflow-hidden"
            data-orientation="vertical"
          >
                          <a
                href="https://help.openai.com/en/collections/3742473-chatgpt"
                target="_blank"
                rel="noreferrer"
              >
            <div
              role="menuitem"
              className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] radix-state-open:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <div className="flex items-center justify-center text-token-text-secondary h-5 w-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V6.41421L13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929L17.5858 5H15ZM4 7C4 5.34315 5.34315 4 7 4H10C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div style = {{color: "black"}}>Help &amp; FAQ</div>
            </div>
            </a>
            <a
                href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
                target="_blank"
                rel="noreferrer"
              >
            <div
              role="menuitem"
              className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] radix-state-open:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
              <div className="flex items-center justify-center text-token-text-secondary h-5 w-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V6.41421L13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929L17.5858 5H15ZM4 7C4 5.34315 5.34315 4 7 4H10C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div style = {{color: "black"}}>Release notes</div>
            </div>
            </a>
            <a
                href="https://openai.com/policies"
                target="_blank"
                rel="noreferrer"
              >
            <div
              role="menuitem"
              className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] radix-state-open:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"
              data-orientation="vertical"
              data-radix-collection-item=""
            >
                
              <div className="flex items-center justify-center text-token-text-secondary h-5 w-5">
              <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 5C14.4477 5 14 4.55228 14 4C14 3.44772 14.4477 3 15 3H20C20.5523 3 21 3.44772 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V6.41421L13.7071 11.7071C13.3166 12.0976 12.6834 12.0976 12.2929 11.7071C11.9024 11.3166 11.9024 10.6834 12.2929 10.2929L17.5858 5H15ZM4 7C4 5.34315 5.34315 4 7 4H10C10.5523 4 11 4.44772 11 5C11 5.55228 10.5523 6 10 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17V14C18 13.4477 18.4477 13 19 13C19.5523 13 20 13.4477 20 14V17C20 18.6569 18.6569 20 17 20H7C5.34315 20 4 18.6569 4 17V7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
                <div style = {{color: "black"}}>Terms &amp; policies</div>
            </div>
            </a>
            <div
              role="menuitem"
              className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] radix-state-open:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"
              data-orientation="vertical"
              data-radix-collection-item=""
              onClick={toggleKeyBoardSC}
            >
              <div className="flex items-center justify-center text-token-text-secondary h-5 w-5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 4.91421L4.29289 6.12132C4.10536 6.30886 4 6.56321 4 6.82843V16.9472L5.5 14.6972V4.91421ZM7.03518 16L5.03518 19H18.9648L16.9648 16H7.03518ZM18.5 14.6972L20 16.9472V6.43675C20 6.13997 19.8682 5.85852 19.6402 5.66853L18.5 4.71838V14.6972ZM16.5 14V4H7.5V14H16.5ZM4.70711 2.87868C5.26972 2.31607 6.03278 2 6.82843 2H17.2759C17.9777 2 18.6573 2.24605 19.1965 2.69534L20.9206 4.13209C21.6045 4.70207 22 5.54641 22 6.43675V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18V6.82843C2 6.03278 2.31607 5.26972 2.87868 4.70711L4.70711 2.87868Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12.6297 5.93615C12.6974 5.57624 12.3408 5.34363 12.1528 5.62504L9.56654 9.49667C9.41387 9.72521 9.54081 10.0776 9.7758 10.0776H11.7435L11.3703 12.0639C11.3026 12.4238 11.6592 12.6564 11.8472 12.375L14.4335 8.50333C14.5861 8.27479 14.4592 7.92238 14.2242 7.92238H12.2565L12.6297 5.93615Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div style = {{color: "black"}}>Keyboard shortcuts</div>
            </div>
            <div
              role="menuitem"
              className="flex items-center m-1.5 p-2.5 text-sm cursor-pointer focus-visible:outline-0 radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] radix-state-open:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"
              data-orientation="vertical"
              data-radix-collection-item=""
              onClick={toggleSettingsInfo}
            >
              <div className="flex items-center justify-center text-token-text-secondary h-5 w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M14.5 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3.874 1a4.002 4.002 0 0 1 7.748 0H20a1 1 0 1 1 0 2h-1.626a4.002 4.002 0 0 1-7.748 0H4a1 1 0 0 1 0-2h6.626ZM9.5 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3.874 1a4.002 4.002 0 0 1 7.748 0H20a1 1 0 1 1 0 2h-6.626a4.002 4.002 0 0 1-7.748 0H4a1 1 0 1 1 0-2h1.626Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div style = {{color: "black"}}>Settings</div>
            </div>
          </div>
        </div>
      )}
        <SettingsInfo show={showSettingsInfo} onHide={() => setShowSettingsInfo(false)}/>
        <KeyBoardSC show={showKeyboardSC} onHide={() => setShowKeyboardSC(false)}/>
    </div>
  );
};

export default InfoButton;
