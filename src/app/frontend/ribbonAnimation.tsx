import React from 'react'

const RibbonAnimation = () => {
  return (
    <div className="ribbon-container">
    <div className="ribbon-line line-1"></div>
    <div className="ribbon-line line-2"></div>
    <div className="ribbon-line line-3"></div>
    <span className="ribbon-text">Welcome to the Ribbon</span>
  </div>
  )
}

export default RibbonAnimation











// import { useEffect, useState } from "react";
// import styles from "./styles/RibbonAnimation.module.css";

// const RibbonAnimation = () => {
//   const [isTextVisible, setIsTextVisible] = useState(false);

//   useEffect(() => {
//     // Trigger text fade-in after the ribbon animation completes
//     const timer = setTimeout(() => setIsTextVisible(true), 1500); // Adjust timing as needed
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={styles.ribbonContainer}>
//       {/* Ribbon Lines */}
//       <div className={`${styles.line} ${styles.line1}`}></div>
//       <div className={`${styles.line} ${styles.line2}`}></div>
//       <div className={`${styles.line} ${styles.line3}`}></div>

//       {/* Text */}
//       <div className={`${styles.text} ${isTextVisible ? styles.fadeIn : ""}`}>
//         Your Text Here
//       </div>
//     </div>
//   );
// };

// export default RibbonAnimation;