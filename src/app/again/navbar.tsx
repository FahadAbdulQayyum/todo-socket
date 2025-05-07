"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
  // State to track the active navigation item
  const [activeItem, setActiveItem] = useState('Home');

  // Function to handle navigation item clicks
  const handleItemClick = (item: any) => {
    setActiveItem(item);
  };

  return (
    <div className="flex justify-between items-center pb-20">
      <span className="flex justify-center items-center space-x-16">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
        <ul className="flex space-x-4 navbar-text">
          {/* Map over the navigation items */}
          {['Home', 'About Us', 'Pricing', 'Features'].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)} // Handle click event
              className={`cursor-pointer ${
                activeItem === item ? 'text-fiftiary' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </span>
      <span>
        {/* <button className="bg-black text-white px-4 py-2">Download</button> */}
        <button className="flex items-center space-x-2 bg-black text-white p-4 px-10 !font-light rounded-md">Download</button>
      </span>
    </div>
  );
};

export default Navbar;













// import Image from 'next/image'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex justify-between items-center pb-20'>
//         <span className='flex justify-center items-center space-x-4'>
//             <Image 
//                 src="/logo.svg"
//                 alt="logo"
//                 width={100}
//                 height={100}
//             />
//             <ul className='flex space-x-4 navbar-text'>
//                 <li>Home</li>
//                 <li>About Us</li>
//                 <li>Pricing</li>
//                 <li>Features</li>
//             </ul>
//         </span>
//         <span>
//             <button className='bg-black text-white px-4 py-2'>Download</button>
//         </span>
//     </div>
//   )
// }

// export default Navbar