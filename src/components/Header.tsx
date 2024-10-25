"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 ">
        <div className="flex items-center justify-between h-16 pr-28">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-4xl font-serif italic font-bold ">
              <span className="text-orange-600">D</span>
              <span className="text-orange-900">W</span>
              <span className="text-orange-400">E</span>
              <span className="text-orange-700">L</span>
              <span className="text-orange-300">L</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className=" ml-4 flex items-center font-semibold text-base space-x-4">
              <Link
                href="/"
                className="text-slate-600 hover:bg-white hover:text-orange-700  
                        rounded-lg  p-2  "
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-slate-600 hover:bg-white hover:text-orange-700 rounded-lg p-2 "
              >
                About
              </Link>
              <Link
                href="/agents"
                className="text-slate-600 hover:bg-white hover:text-orange-700 rounded-lg  p-2"
              >
                Agents
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:bg-white hover:text-orange-700 rounded-lg p-2 "
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center ">
          <button
            className="items-end justify-center p-2 rounded-md text-black hover:text-black   focus:outline-none focus:ring-2  focus:ring-inset focus:ring-orange-800"
            onClick={toggleNavbar}
          >
            {isClick ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 mx-auto space-y-1 sm:px-3">
            <Link
              href="/"
              className=" text-orange-600 mx-auto hover:bg-white hover:text-black block 
                        rounded-lg p-2  align-center"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-orange-600 mx-auto hover:bg-white hover:text-black block  rounded-lg p-2 "
            >
              About
            </Link>
            <Link
              href="/agents"
              className="text-orange-600 hover:bg-white hover:text-black block rounded-lg p-2 align-center"
            >
              Agents
            </Link>
            <Link
              href="/contact"
              className="text-orange-600 hover:bg-white hover:text-black block rounded-lg p-2 align-center"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
