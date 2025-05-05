"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { MdAdminPanelSettings } from "react-icons/md";
import { IoBagOutline } from 'react-icons/io5';
import { IoIosContact } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

import { useAppDispatch } from '@/components/lib/hooks'


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="flex justify-between items-center px-2 text-black bg-white border-b-2 py-2 md:px-standardSize sm:px-4">
            {/* Logo Section */}
            <div className="logo">
                <Image
                    // src="/assets/bg.png" 
                    src="https://priv-image-assets.s3.amazonaws.com/nwb/Logo_dark.svg"
                    alt="PRIV Logo"
                    width={80}
                    height={80}
                    unoptimized={true} // Disable optimization
                />
            </div>

            {/* Hamburger Menu Button */}
            <button
                className="lg:hidden text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
            >
                {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

            {/* Navigation Menu */}
            <nav
                className={`${menuOpen ? 'block' : 'hidden'
                    } absolute lg:static top-full left-0 lg:flex lg:items-center lg:space-x-10 w-full bg-white lg:bg-transparent shadow-lg lg:shadow-none lg:w-auto z-50`}
            >
                <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-10 px-4 lg:px-0 py-4 lg:py-0 font-medium cursor-pointer">
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Manual Payment</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Agents List</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Clients List</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Job Lists</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">
                        <Link href="/services">Job</Link>
                    </li>
                </ul>
            </nav>

            {/* Icons and Search */}
            <div className="flex items-center space-x-4">
                {/* Search Input */}
                <div className="hidden md:flex justify-center items-center bg-primaryy p-2 space-x-4 rounded-full">
                    <CiSearch className="text-2xl" />
                    <input
                        className="bg-transparent outline-none text-sm w-32 md:w-48"
                        placeholder="Search"
                    />
                </div>

                {/* Heart Icon */}
                <div className="heart">
                    <MdAdminPanelSettings className="text-2xl " aria-label="Favorites" />
                </div>

                {/* Cart Icon */}
                <div className="cart">
                    <IoIosContact className="text-2xl" aria-label="Shopping Cart" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
