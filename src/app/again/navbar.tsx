"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import CustomButton from './utils/CustomButton';
import './styles/navbar.css'

const Navbar = () => {
  // State to track the active navigation item
  const [activeItem, setActiveItem] = useState('Home');
  // State to track hamburger menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle navigation item clicks
  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false); // Close menu on item click
  };

  // Function to toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center mb-20 px-4 sticky top-0 z-50 w-96 lg:w-full backdrop-blur-lg">
      <span className="flex justify-center items-center space-x-16">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={100}
          height={100}
        />
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 navbar-text">
          {['Home', 'About Us', 'Pricing', 'Features'].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer text-lg font-medium ${
                activeItem === item ? 'text-fiftiary' : 'text-gray-800'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              {item}
            </li>
          ))}
        </ul>
      </span>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <label className="menu" htmlFor="burger">
          <input
            id="burger"
            type="checkbox"
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <svg className="burger" viewBox="0 0 100 100" width="40">
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            />
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            />
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            />
          </svg>
        </label>
      </div>
      {/* Full-Screen Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-75 backdrop-blur-md flex items-center justify-center transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <ul className="flex flex-col items-center space-y-8">
          {['Home', 'About Us', 'Pricing', 'Features'].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer text-2xl font-semibold uppercase ${
                activeItem === item ? 'text-fiftiary' : 'text-gray-800'
              } hover:text-blue-500 transition-colors duration-200`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Download Button */}
      <span className="hidden md:block">
        <CustomButton>
          Download
        </CustomButton>
      </span>
    </div>
  );
};

export default Navbar;