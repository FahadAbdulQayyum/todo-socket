import { useState, useEffect } from "react";

const MobileDevice = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative"
      style={{
        transform: `translateY(${scrollPosition / 4}px)`, // Adjust the factor as needed
      }}
    >
      <img
        src="/mobile.svg" // Replace with your mobile image
        alt="Mobile Device"
        className="w-64 h-64 object-cover"
      />
    </div>
  );
};

export default MobileDevice;