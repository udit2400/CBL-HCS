'use client'

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Moving Address Section (Replaced Marquee) */}
      <div className="bg-red-500 text-white py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          Address: 1234 Main Street, City, State, 56789 | Contact Us: +1234567890
          | Email: info@example.com
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-yellow-100 text-black shadow-md border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-16" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 font-semibold">
            {["Home", "Courses", "Current Affairs", "Achievements", "Blog", "Contact Us"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-red-500 transition"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Contact Info (Desktop) */}
          <div className="hidden md:flex flex-col text-right">
            <a href="tel:+1234567890" className="hover:text-red-500">
              +1234567890
            </a>
            <a href="tel:+0987654321" className="hover:text-red-500">
              +0987654321
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col bg-gray-100 p-4 space-y-4">
            {["Home", "Courses", "Current Affairs", "Achievements", "Blog", "Contact Us"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-red-500"
                >
                  {item}
                </a>
              )
            )}
            <a href="tel:+1234567890" className="hover:text-red-500">
              +1234567890
            </a>
            <a href="tel:+0987654321" className="hover:text-red-500">
              +0987654321
            </a>
          </div>
        )}
      </nav>

      {/* Tailwind CSS Animation for Scrolling Text */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
