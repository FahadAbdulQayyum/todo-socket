import React from "react";

const Star: React.FC<{ size: number; top: number; left: number; delay: number, imgSrc: string }> = ({ size, top, left, delay, imgSrc }) => {
    const starStyle: React.CSSProperties = {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animation: `float 1s ease-in-out infinite`,
      };
  return  <img
  src={imgSrc}
  alt="star"
  style={starStyle}
/>;
};

export default Star;