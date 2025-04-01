"use client"

// File: src/components/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-opacity-90 text-white py-4 px-8 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold tracking-widest">
          <a href="/">TAKSHNI</a>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-sm tracking-wider">ARTWORKS</a>
          <a href="#" className="text-sm tracking-wider">PROJECTS</a>
          <a href="#" className="text-sm tracking-wider">ARCHIVES</a>
          <a href="#" className="text-sm tracking-wider">ABOUT US</a>
          <a href="#" className="text-sm tracking-wider">BLOGS</a>
          <a href="#" className="text-sm tracking-wider">FAQS</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="text-sm">EN</a>
          <a href="#" className="text-sm">ACCOUNT</a>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 pb-4">
          <a href="#" className="block text-sm tracking-wider">ARTWORKS</a>
          <a href="#" className="block text-sm tracking-wider">PROJECTS</a>
          <a href="#" className="block text-sm tracking-wider">ARCHIVES</a>
          <a href="#" className="block text-sm tracking-wider">ABOUT US</a>
          <a href="#" className="block text-sm tracking-wider">BLOGS</a>
          <a href="#" className="block text-sm tracking-wider">FAQS</a>
          <a href="#" className="block text-sm">EN</a>
          <a href="#" className="block text-sm">ACCOUNT</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
