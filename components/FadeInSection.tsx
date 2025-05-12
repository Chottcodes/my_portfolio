'use client'
import React, { useRef, useState, useEffect } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FadeInSection = ({ children, className = '' }: FadeInSectionProps) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`
        transition-opacity duration-1000 ease-out transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
