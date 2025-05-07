import React from "react";
import Star from "./stars";

const StarsBackground = ({imgSrc}: {imgSrc: string}) => {
  const numberOfStars = 10; // Adjust the number of stars
  const stars = Array.from({ length: numberOfStars }, (_, i) => {
    const size = Math.random() * 54 + 1; // Random size between 1px and 5px
    const top = Math.random() * 100; // Random top position (0-100%)
    const left = Math.random() * 100; // Random left position (0-100%)
    const delay = Math.random() * 2; // Random animation delay

    return <Star key={i} size={size} top={top} left={left} delay={delay} imgSrc={imgSrc} />;
  });

  return <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}>{stars}</div>;
};

export default StarsBackground;