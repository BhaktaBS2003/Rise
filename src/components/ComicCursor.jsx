// ComicCursor.jsx - Updated with yellow colors
import React, { useEffect, useRef, useState } from 'react';

const ComicCursor = () => {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const position = useRef({ x: 0, y: 0 });
  const targetPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.innerWidth < 768) return;
    
    setIsVisible(true);

    const updatePosition = (e) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      position.current.x += (targetPosition.current.x - position.current.x) * 0.1;
      position.current.y += (targetPosition.current.y - position.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }
      
      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      setIsLink(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive')
      );
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animate();
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-9999"
      style={{
        transform: 'translate3d(0, 0, 0)',
        willChange: 'transform',
        filter: 'drop-shadow(4px 4px 0 rgba(0,0,0,0.3))',
      }}
    >
      {/* Main cursor - comic style */}
      <div
        className={`
          relative transition-all duration-200
          ${isLink ? 'scale-[2]' : ''}
          ${isClicking ? 'scale-90' : ''}
        `}
      >
        {/* 🔴 CHANGE THIS: Outer ring - change border color to yellow */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-8 h-8 border-3 border-yellow-400 rounded-full
          ${isLink ? 'bg-yellow-400/20 border-yellow-400' : ''}
        `}></div>
        
        {/* 🔴 CHANGE THIS: Bolt icon - change to yellow */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          text-yellow-400 transition-all
          ${isLink ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
        `}>
          <span className="material-symbols-outlined text-sm">bolt</span>
        </div>
        
        {/* 🔴 CHANGE THIS: Center dot - change to yellow */}
        <div className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-2 h-2 bg-yellow-400 rounded-full
          ${isClicking ? 'w-4 h-4' : ''}
        `}></div>
      </div>
    </div>
  );
};

export default ComicCursor;