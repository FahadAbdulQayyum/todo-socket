// components/Star.tsx
import React from "react";

const Star: React.FC<{ size: number; top: number; left: number; delay: number, imgSrc: string }> = ({ size, top, left, delay, imgSrc }) => {
    const starStyle: React.CSSProperties = {
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        // animation: `float ${4 + delay}s ease-in-out infinite`,
        animation: `float 1s ease-in-out infinite`,
        // backgroundColor: 'green'
      };
//   const starStyle: React.CSSProperties = {
//     position: "absolute", // 'absolute' is a valid value for `Position`
//     width: `${size}px`,
//     height: `${size}px`,
//     background: "white",
//     borderRadius: "50%",
//     top: `${top}%`,
//     left: `${left}%`,
//     animation: `float ${4 + delay}s ease-in-out infinite`,
//     boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)",
//   };

//   return <div style={starStyle}></div>;
  return  <img
//   src="/star.svg"
  src={imgSrc}
  alt="star"
  style={starStyle}
/>;
};

export default Star;



















// // components/Star.js
// import React from "react";

// const Star = ({ size, top, left, delay }: {size: number, top: number, left: number, delay: number}) => {
//   const starStyle = {
//     position: "absolute",
//     width: `${size}px`,
//     height: `${size}px`,
//     background: "white",
//     borderRadius: "50%",
//     top: `${top}%`,
//     left: `${left}%`,
//     animation: `float ${4 + delay}s ease-in-out infinite`,
//     boxShadow: "0 0 8px 2px rgba(255, 255, 255, 0.8)",
//   };

//   return <div style={starStyle}></div>;
// };

// export default Star;