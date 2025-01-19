"use client";
import { useEffect, useRef, useState } from "react";
import { createWebSocketConnection, onMessage, sendMessage } from "./openAIAPI";

interface ChatTextboxProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setResponse: (value: string) => void;
  onSend: () => void;
  className?: string;
}

const ChatTextbox: React.FC<ChatTextboxProps> = ({ message, setMessage, setResponse, onSend, className }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const socketRef = useRef<WebSocket | null>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const lineHeight = 24;
    const maxLines = 10;
    const maxHeight = lineHeight * maxLines;

    textarea.style.height = "44px";
    const scrollHeight = textarea.scrollHeight;
    const newHeight = Math.min(maxHeight, Math.max(44, scrollHeight));
    textarea.style.height = `${newHeight}px`;
    textarea.style.overflowY = scrollHeight > maxHeight ? "auto" : "hidden";
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [message]);

  const [localResponse, setLocalResponse] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const responseBufferRef = useRef<string>("");

  useEffect(() => {
    socketRef.current = createWebSocketConnection('ws://localhost:5000');
    
    onMessage(socketRef.current, (message) => {
      // Accumulate the message in the buffer
      responseBufferRef.current += message;

      // Check if we have a complete sentence or chunk
      if (message.includes('.') || message.includes('!') || message.includes('?') || message.includes('\n')) {
        // Update the response with the accumulated buffer
        setResponse(responseBufferRef.current);
      } else if (message.endsWith(' ')) {
        // If we have a space, it's probably safe to update as well
        setResponse(responseBufferRef.current);
      }
    });

    return () => {
      socketRef.current?.close();
    };
  }, [setResponse]);

  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (socketRef.current && message.trim()) {
      responseBufferRef.current = ""; // Reset the buffer
      sendMessage(socketRef.current, message);
      setMessage('');
      onSend();
    }
  };


  useEffect(() => {
    adjustTextareaHeight();
  }, [localResponse]);

  return (
    <div className={`translate-y-[-6px] mx-auto ${className}`}>
      <div className="flex justify-center">
        <form
          className="w-full"
          role="dialog"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:Ruuijqaaklj5:"
          data-state="closed"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative flex h-full max-w-full flex-1 flex-col">
            <div className="relative h-0">
              <div className="absolute bottom-3 space-y-2 z-20"></div>
            </div>
            <div className="group relative flex w-full items-center">
              <div
                id="composer-background"
                className="flex w-full cursor-text flex-col rounded-3xl px-2.5 py-1 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary"
              >
                <div className="flex items-center px-2">
                  <div className="max-w-full flex-1">
                    <div className="text-token-text-primary" translate="no" id="prompt-textarea">
                    <textarea
                        ref={textareaRef}
                        className="block w-full resize-none border-0 focus:outline-none bg-transparent px-0 py-2 text-token-text-primary placeholder-[#5C5C5C] w-[700px] leading-6 custom-scrollbar"
                        autoFocus
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}  // Use the message prop here
                        placeholder="Message ChatGPT"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (message.trim()) {
                              responseBufferRef.current = "";
                              if (socketRef.current) {
                                sendMessage(socketRef.current, message);
                                setMessage('');
                                onSend();
                              }
                            }
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex h-[44px] items-center justify-between">
                  <div className="flex gap-x-1">
                    <div className="relative">
                      <button
                        type="button"
                        id="radix-:rh:"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-state="closed"
                        className="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="translate-y-[3px] translate-x-[3px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z"
                            fill="#AEAEAE"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Send prompt"
                    data-testid="send-button"
                    disabled={!message.trim()}
                    className="flex h-8 w-8 items-center justify-center rounded-full hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary bg-black text-white dark:bg-white dark:text-black disabled:bg-[#D7D7D7]"
                    onClick={handleSend}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-2xl"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatTextbox;