import React, { useRef, useState } from 'react';

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  sensitivity?: number; // Lower is more sensitive
  maxTilt?: number; // Max degrees
}

const TiltWrapper: React.FC<TiltWrapperProps> = ({ 
  children, 
  className = "", 
  sensitivity = 20, 
  maxTilt = 15 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [transition, setTransition] = useState("transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation
    const rotateX = ((y - height / 2) / height) * maxTilt * -1; // Invert X axis for natural feel
    const rotateY = ((x - width / 2) / width) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setTransition("transform 0.1s ease-out"); // Quick response
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setTransition("transform 0.6s ease-out"); // Smooth return
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        transition,
      }}
    >
      {children}
    </div>
  );
};

export default TiltWrapper;