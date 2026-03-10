// IntroVideo.jsx
import React, { useState, useEffect } from 'react';

const IntroVideo = ({ onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    // Show skip button after 2 seconds
    const timer = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 1000); // Wait for fade out animation
  };

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div 
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Video element */}
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted={true}
        playsInline
        onEnded={handleVideoEnd}
      >
        {/* Add your video file here */}
        <source src="/rise_intro.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Skip button */}
      {showSkip && (
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md text-black px-6 py-3 comic-border border-white/30 hover:bg-white/20 transition-all uppercase font-black tracking-wider z-10000"
        >
          Skip Intro
        </button>
      )}

      {/* Loading/progress bar (optional) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: '0%' }} // You can track video progress here
        ></div>
      </div>

      {/* Branding during intro */}
      <div className="absolute top-8 left-8 flex items-center gap-2 opacity-50">
        <div className="bg-primary p-2 comic-border border-2">
          <span className="material-symbols-outlined text-white text-2xl font-bold">bolt</span>
        </div>
        <h2 className="text-2xl font-black tracking-tighter italic uppercase text-white">RISE 2026</h2>
      </div>
    </div>
  );
};

export default IntroVideo;