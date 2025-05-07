"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import CustomButton from './utils/CustomButton';

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
        <CustomButton>
          Download
        </CustomButton>
      </span>
    </div>
  );
};

export default Navbar;