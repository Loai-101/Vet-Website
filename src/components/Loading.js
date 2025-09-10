import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start fade out animation after 2 seconds
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 2000);

    // Complete loading after animation
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onLoadingComplete();
    }, 2300);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-overlay ${isAnimating ? 'loading-fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1757496925/ChatGPT_Image_Sep_10_2025_12_35_12_PM_xya6ds.png" 
            alt="Vet Care Clinic Logo" 
            className="loading-logo-image"
          />
        </div>
        <h1 className="loading-title">Vet Care Clinic</h1>
      </div>
    </div>
  );
};

export default Loading;
