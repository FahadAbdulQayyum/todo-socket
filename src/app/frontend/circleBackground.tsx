import React, { useEffect, useRef } from "react";

const CircleBackground = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (circleRef.current) {
        const { clientX, clientY } = event;
        circleRef.current.style.left = `${clientX - 50}px`; // Adjust size as needed
        circleRef.current.style.top = `${clientY - 50}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="absolute inset-0 w-full h-full bg-red-500/10 rounded-full pointer-events-none"
    />
  );
};

export default CircleBackground;