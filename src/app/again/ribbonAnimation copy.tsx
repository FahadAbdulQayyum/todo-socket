import React, { useEffect } from 'react';
import classNames from 'classnames';

const RibbonAnimation = () => {
  const [isActive, setIsActive] = React.useState(false);

  // Simulate the timeout behavior from jQuery
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsActive(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div
        className={classNames(
          'ribbon absolute top-0 left-0 right-0',
          isActive && 'active'
        )}
      >
        {/* Medallion */}
        <div className="medallion"></div>

        {/* Ribbon 1 */}
        <div className="ribbon-1">
          <span className="inner">
            <span className="fadeLeft">Funtime</span>
          </span>
        </div>

        {/* Ribbon 2 */}
        <div className="ribbon-2">
          <span className="inner">
            <span className="fadeRight">Extravaganza</span>
          </span>
        </div>

        {/* Ribbon 3 */}
        <div className="ribbon-3">
          <span className="inner">
            <span className="fadeLeft">
              Each Funtime Purchase = One Chance to Win
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RibbonAnimation;













// import { useState } from 'react';

// const RibbonAnimation = () => {
//   const [isActive, setIsActive] = useState(false);

//   const toggleMenu = () => {
//     setIsActive((prev) => !prev);
//   };

//   return (
//     <nav className="relative w-full h-5 bg-gray-800 border-b border-gray-900">
//       {/* Ribbon Menu */}
//       <div
//         className={`absolute top-0 left-1/2 transform -translate-x-1/2 ${
//           isActive ? 'translate-y-[-20px]' : 'translate-y-[0]'
//         } transition-all duration-500 ease-in-out bg-red-600 w-20 h-60 border-l-4 border-r-4 border-red-800 shadow-lg`}
//       >
//         {/* Toggle Button */}
//         <button
//           onClick={toggleMenu}
//           className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white font-parisienne text-xl text-center cursor-pointer hover:underline"
//         >
//           Menuuuu
//         </button>

//         {/* Ribbon Banner */}
//         <div
//           className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-45 bg-red-600 w-14 h-14 border-r-4 border-b-4 border-red-800 shadow-lg"
//         ></div>

//         {/* List Items */}
//         {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
//           <a
//             key={item}
//             href="#"
//             className={`absolute top-1/2 transform -translate-y-1/2 ${
//               index % 2 === 0 ? 'right-0' : 'left-0'
//             } bg-green-500 text-white font-parisienne text-lg px-2 py-1 border-2 border-green-700 shadow-lg transition-all duration-300 ease-in-out ${
//               isActive ? 'w-44' : 'w-0 overflow-hidden'
//             }`}
//           >
//             {item}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default RibbonAnimation;












// // import React from 'react'

// // const RibbonAnimation = () => {
// //   return (
// //     <div>RibbonAnimation</div>
// //   )
// // }

// // export default RibbonAnimation










// // // import React from 'react'
// // // import './styles/ribbon.css'

// // // const RibbonAnimation = () => {
// // //   return (
// // //     <div className="ribbon-container">
// // //   {/* <!-- Central Ribbon --> */}
// // //   <div className="central-ribbon">
// // //     <span className="central-text">Achievements</span>
// // //     <span className="central-subtext">Best Finance App On Playstore</span>
// // //   </div>

// // //   {/* <!-- Left Ribbon --> */}
// // //   <div className="left-ribbon">
// // //     <span className="left-text">Finance</span>
// // //     <span className="left-subtext">Most Popular Accounting App</span>
// // //   </div>

// // //   {/* <!-- Right Ribbon --> */}
// // //   <div className="right-ribbon">
// // //     <span className="right-text">Make The Best Financial Decisions</span>
// // //   </div>

// // //   {/* <!-- Premium Box --> */}
// // //   <div className="premium-box">
// // //     <span className="premium-text">Uifry Premium Free Trial</span>
// // //   </div>

// // //   {/* <!-- Decorative Lines --> */}
// // //   <div className="line line-left"></div>
// // //   <div className="line line-right"></div>
// // // </div>
// // // //     <div className="ribbon-container">
// // // //         <div className="ribbon-line line-1"></div>
// // // //         <div className="ribbon-line line-2"></div>
// // // //         <div className="ribbon-line line-3"></div>
// // // //         <span className="ribbon-text">Welcome to the Ribbon</span>
// // // //   </div>
// // //   )
// // // }

// // // export default RibbonAnimation