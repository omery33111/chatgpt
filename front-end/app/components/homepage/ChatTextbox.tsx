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
    <div className={`translate-y-[-7px] mx-auto ${className}`}>
      <div className="flex justify-center">
        <form className="w-full" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R7jkkukqaklj5:" data-state="closed">
          <div className="relative z-[1] flex h-full max-w-full flex-1 flex-col">
            <div className="group relative z-[1] flex w-full items-center">
              <div className="w-full">
                <div id="composer-background" className="flex w-full cursor-text flex-col rounded-3xl border border-token-border-light px-3 py-1 transition-colors contain-inline-size dark:border-none dark:shadow-none shadow-[0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] has-[:focus]:shadow-[0_2px_12px_0px_rgba(0,0,0,0.04),_0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] bg-token-main-surface-primary dark:bg-[#303030]">
                  <div className="flex min-h-[44px] items-start pl-1">
                    <div className="min-w-0 max-w-full flex-1">
                      <div className="">
                        <div className="_prosemirror-parent_cy42l_1 text-token-text-primary max-h-[25dvh] max-h-52 overflow-auto default-browser">
                        <textarea
                        ref={textareaRef}
                        className="block w-full resize-none border-0 focus:outline-none bg-transparent px-0 py-2 text-token-text-primary placeholder-[#5C5C5C] w-[700px] leading-6 custom-scrollbar"
                        autoFocus
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
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
                          <div translate="no" className="ProseMirror" id="prompt-textarea" data-virtualkeyboard="true">
                            <p>
                              
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  <div className="w-[32px] pt-1">
                  </div>
                </div>
              <div className="mb-2 mt-1 flex items-center justify-between sm:mt-5">
                <div className="flex gap-x-1.5 text-token-text-primary">
                  <div>
                    <div className="relative">
                      <div className="relative">
                        <span className="" data-state="closed"><div className="flex" id="radix-:r2:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-testid="undefined-button">
                          <button aria-label="Upload files and more" className="flex items-center justify-center h-9 rounded-full border border-token-border-light text-token-text-secondary min-w-8 p-2 text-[13px] font-semibold radix-state-open:bg-black/10 can-hover:hover:bg-token-main-surface-secondary dark:can-hover:hover:bg-gray-700 hover:bg-token-main-surface-secondary dark:hover:bg-gray-700 w-auto">
                          <svg style = {{color: "#5D5D5D"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="" className="h-[18px] w-[18px]">
                            <path d="M12 6.00003C12.5523 6.00003 13 6.44775 13 7.00003L13 11L17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13L13 13L13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17L11 13L7 13C6.44771 13 6 12.5523 6 12C6 11.4477 6.44771 11 7 11L11 11L11 7.00003C11 6.44775 11.4477 6.00003 12 6.00003Z" fill="currentColor"></path>
                          </svg>
                          <span className="whitespace-nowrap pr-1 [display:--force-hide-label]" style = {{color: "#5D5D5D"}}>Attach</span>
                          </button><input className="hidden" type="file" />
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                <div>
                  <div>
                    <span className="" data-state="closed">
                      <button  style = {{color: "#5D5D5D"}} className="flex h-9 min-w-8 items-center justify-center rounded-full border border-token-border-light p-2 text-[13px] font-medium radix-state-open:bg-black/10 text-token-text-secondary can-hover:hover:bg-token-main-surface-secondary dark:can-hover:hover:bg-gray-700 focus-visible:outline-black can-hover:hover:bg-black/10 dark:focus-visible:outline-white" aria-pressed="false" aria-label="Search">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-[18px] w-[18px]">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM11.9851 4.00291C11.9933 4.00046 11.9982 4.00006 11.9996 4C12.001 4.00006 12.0067 4.00046 12.0149 4.00291C12.0256 4.00615 12.047 4.01416 12.079 4.03356C12.2092 4.11248 12.4258 4.32444 12.675 4.77696C12.9161 5.21453 13.1479 5.8046 13.3486 6.53263C13.6852 7.75315 13.9156 9.29169 13.981 11H10.019C10.0844 9.29169 10.3148 7.75315 10.6514 6.53263C10.8521 5.8046 11.0839 5.21453 11.325 4.77696C11.5742 4.32444 11.7908 4.11248 11.921 4.03356C11.953 4.01416 11.9744 4.00615 11.9851 4.00291ZM8.01766 11C8.08396 9.13314 8.33431 7.41167 8.72334 6.00094C8.87366 5.45584 9.04762 4.94639 9.24523 4.48694C6.48462 5.49946 4.43722 7.9901 4.06189 11H8.01766ZM4.06189 13H8.01766C8.09487 15.1737 8.42177 17.1555 8.93 18.6802C9.02641 18.9694 9.13134 19.2483 9.24522 19.5131C6.48461 18.5005 4.43722 16.0099 4.06189 13ZM10.019 13H13.981C13.9045 14.9972 13.6027 16.7574 13.1726 18.0477C12.9206 18.8038 12.6425 19.3436 12.3823 19.6737C12.2545 19.8359 12.1506 19.9225 12.0814 19.9649C12.0485 19.9852 12.0264 19.9935 12.0153 19.9969C12.0049 20.0001 11.9999 20 11.9999 20C11.9999 20 11.9948 20 11.9847 19.9969C11.9736 19.9935 11.9515 19.9852 11.9186 19.9649C11.8494 19.9225 11.7455 19.8359 11.6177 19.6737C11.3575 19.3436 11.0794 18.8038 10.8274 18.0477C10.3973 16.7574 10.0955 14.9972 10.019 13ZM15.9823 13C15.9051 15.1737 15.5782 17.1555 15.07 18.6802C14.9736 18.9694 14.8687 19.2483 14.7548 19.5131C17.5154 18.5005 19.5628 16.0099 19.9381 13H15.9823ZM19.9381 11C19.5628 7.99009 17.5154 5.49946 14.7548 4.48694C14.9524 4.94639 15.1263 5.45584 15.2767 6.00094C15.6657 7.41167 15.916 9.13314 15.9823 11H19.9381Z" fill="currentColor">
                        </path>
                      </svg>
                      <div style = {{color: "#5D5D5D"}} className="whitespace-nowrap pl-1 pr-1 [display:--force-hide-label]">Search</div>
                      </button>
                    </span>
                    </div>
                  </div>
                <div>
                  <div>
                    <span className="" data-state="closed">
                      <button className="flex h-9 min-w-8 items-center justify-center rounded-full border border-token-border-light p-2 text-[13px] font-medium radix-state-open:bg-black/10 text-token-text-secondary can-hover:hover:bg-token-main-surface-secondary dark:can-hover:hover:bg-gray-700 focus-visible:outline-black can-hover:hover:bg-black/10 dark:focus-visible:outline-white" aria-pressed="false" aria-label="Reason" type="button" id="radix-:r4:" aria-haspopup="menu" aria-expanded="false" data-state="closed" data-testid="undefined-button">
                      <div className="[&amp;_svg]:h-full [&amp;_svg]:w-full h-[18px] w-[18px]">
                        <svg style = {{color: "#5D5D5D"}} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m12 3c-3.585 0-6.5 2.9225-6.5 6.5385 0 2.2826 1.162 4.2913 2.9248 5.4615h7.1504c1.7628-1.1702 2.9248-3.1789 2.9248-5.4615 0-3.6159-2.915-6.5385-6.5-6.5385zm2.8653 14h-5.7306v1h5.7306v-1zm-1.1329 3h-3.4648c0.3458 0.5978 0.9921 1 1.7324 1s1.3866-0.4022 1.7324-1zm-5.6064 0c0.44403 1.7252 2.0101 3 3.874 3s3.43-1.2748 3.874-3c0.5483-0.0047 0.9913-0.4506 0.9913-1v-2.4593c2.1969-1.5431 3.6347-4.1045 3.6347-7.0022 0-4.7108-3.8008-8.5385-8.5-8.5385-4.6992 0-8.5 3.8276-8.5 8.5385 0 2.8977 1.4378 5.4591 3.6347 7.0022v2.4593c0 0.5494 0.44301 0.9953 0.99128 1z" clipRule="evenodd" fill="currentColor" fillRule="evenodd">
                          </path>
                        </svg>
                      </div>
                      <div style = {{color: "#5D5D5D"}} className="whitespace-nowrap pl-1 pr-1 [display:--force-hide-label]">Reason</div>
                      </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-1.5"><div>
                  
                <button
                    type="button"
                    aria-label="Send prompt"
                    data-testid="send-button"
                    disabled={!message.trim()}
                    className="flex h-8 w-8 items-center justify-center rounded-full hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary bg-black text-white dark:bg-white dark:text-black disabled:bg-[#D7D7D7]"
                    onClick={handleSend}>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-2xl">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.1918 8.90615C15.6381 8.45983 16.3618 8.45983 16.8081 8.90615L21.9509 14.049C22.3972 14.4953 22.3972 15.2189 21.9509 15.6652C21.5046 16.1116 20.781 16.1116 20.3347 15.6652L17.1428 12.4734V22.2857C17.1428 22.9169 16.6311 23.4286 15.9999 23.4286C15.3688 23.4286 14.8571 22.9169 14.8571 22.2857V12.4734L11.6652 15.6652C11.2189 16.1116 10.4953 16.1116 10.049 15.6652C9.60265 15.2189 9.60265 14.4953 10.049 14.049L15.1918 8.90615Z"
                        fill="currentColor"/>
                    </svg>
                  </button>

                </div>
              </div>
            </div>
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