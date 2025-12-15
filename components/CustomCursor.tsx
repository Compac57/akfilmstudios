import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  // Hide on mobile via CSS media query helper or JS check
  if (typeof navigator !== 'undefined' && /Mobi|Android/i.test(navigator.userAgent)) {
      return null;
  }

  return (
    <>
      {/* Main Dot - Dark for light theme */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-gray-800 rounded-full pointer-events-none z-[9999] mix-blend-multiply"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
      {/* Trailing Ring */}
      <div
        className={`fixed top-0 left-0 border border-gray-600 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out mix-blend-multiply ${
          isHovering ? 'w-12 h-12 bg-gray-200/50 opacity-50' : 'w-8 h-8 opacity-30'
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};

export default CustomCursor;