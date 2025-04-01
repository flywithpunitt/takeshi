// File: src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 px-8 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-gray-200">
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-6">CUSTOMER SERVICE</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">Shipping & Payment</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns & Exchanges</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-6">ABOUT US</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Mission</a></li>
            <li><a href="#" className="hover:text-gray-900">Vision</a></li>
            <li><a href="#" className="hover:text-gray-900">Career</a></li>
            <li><a href="#" className="hover:text-gray-900">Press</a></li>
            <li><a href="#" className="hover:text-gray-900">Blogs</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-6">PAGES</h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Luxury Art Pieces</a></li>
            <li><a href="#" className="hover:text-gray-900">Wallart</a></li>
            <li><a href="#" className="hover:text-gray-900">Decorative Artilces</a></li>
            <li><a href="#" className="hover:text-gray-900">Retail Architect</a></li>
            <li><a href="#" className="hover:text-gray-900">Design for Living Room</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-gray-800 mb-6">CONTACT US</h3>
          <p className="text-sm text-gray-600 mb-6">
            Takshni, No.2 & 4 P, First Floor,<br />
            Plot No.33, Sector 5,<br />
            Main Market Dwarka,<br />
            New Delhi 110075, (LANDMARK: Opposite Ramphal Chowk Metro Station)
          </p>
          <p className="text-sm text-gray-600">
            +91 9650308090<br />
            info@takshni.com
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5.982 7.982l-1.414 1.414-3.182-3.182-3.182 3.182-1.414-1.414 3.182-3.182-3.182-3.182 1.414-1.414 3.182 3.182 3.182-3.182 1.414 1.414-3.182 3.182z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413l-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between py-8 text-sm text-gray-600">
        <div className="mb-4 md:mb-0">
          <img src="/path-to-logo.png" alt="Takshni Logo" className="h-6" />
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-900">COOKIE NOTICE</a>
          <a href="#" className="hover:text-gray-900">LEGAL & PRIVACY</a>
          <a href="#" className="hover:text-gray-900">TERMS & CONDITIONS</a>
        </div>
      </div>
      
      <div className="pb-8 text-sm text-gray-500">
        Copyright TAKSHNI 2023
      </div>
    </footer>
  );
}

export default Footer;