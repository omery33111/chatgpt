import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import AuthButtons from "./AuthButtons";

interface AdvancedFeaturesNoTokenProps {
  show: boolean;
  onHide: () => void;
}

const AdvancedFeaturesNoToken: React.FC<AdvancedFeaturesNoTokenProps> = ({ show, onHide }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalContentRef.current && !modalContentRef.current.contains(event.target as Node)) {
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
    <Modal show={show} onHide={onHide} centered>
      <div
        ref={modalContentRef}
        data-radix-popper-content-wrapper=""
        dir="ltr"
        style={{
          position: "fixed",
          left: "0px",
          top: "0px",
          transform: "translate(52px, 56px)",
          minWidth: "max-content",
          zIndex: 50,
        }}
      >
        <div
          data-side="bottom"
          data-align="start"
          role="menu"
          aria-orientation="vertical"
          data-state="open"
          data-radix-menu-content=""
          dir="ltr"
          id="radix-:rn:"
          aria-labelledby="radix-:rm:"
          className="z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2 min-w-[340px] overflow-hidden"
        >
          <div className="p-4">
            <div className="mb-4">
              <p className="text-md mb-1 font-medium text-token-text-primary">
                Log in to try advanced features
              </p>
              <p className="text-sm text-token-text-secondary text-[#5D5D5D]">
                Get smarter responses, upload files, analyze images, and more by logging in.
              </p>
            </div>

            <AuthButtons />

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AdvancedFeaturesNoToken;
