"use client";
import React, { useEffect, useRef, useState } from "react";

interface PageSectionProps {
  colourWay: "light" | "dark"; //Options are dark and light
  children: React.ReactNode;
}

const sectionThemes = {
  light: "position-relative bg-white text-black p-6 w-full z-0",
  dark: "position-relative bg-black text-white p-6 w-full z-0",
};

/**
 * When an entry (UI component) comes into view for the first time, it fades in
 * UI components don't fade in when scrolling back to them
 */
export default function PageSection({ colourWay, children }: PageSectionProps) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          } 
        });
      },
      { threshold: 0.05 }
    );

    const current = sectionRef.current

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <>
    <div
      ref={sectionRef}
      className={`
        ${sectionThemes[colourWay]} 
        ${isVisible ? "animate-fadeIn" : "opacity-0"}
      `}
    >
      {children}
    </div>
    </>
  );
}
