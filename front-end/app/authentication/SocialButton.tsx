import React from 'react';

interface SocialButtonProps {
    src: string;
    alt: string;
    text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ src, alt, text }) => {
    return (
        <button className="social-btn">
            <span className="social-logo-wrapper">
                <img className="social-logo" src={src} alt={alt} />
            </span>
            <span className="social-text">{text}</span>
        </button>
    );
};

export default SocialButton;
