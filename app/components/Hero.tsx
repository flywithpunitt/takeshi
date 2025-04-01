import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gray-900">
        <div className="h-full w-full flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Background Image */}
            <Image
  src="/purusha-banner-2.jpg"
  alt="Hero Image"
  fill
  style={{ objectFit: "cover" }}
  className="absolute inset-0"
/>

            {/* Overlay */}
            <div className="bg- bg-opacity-30 absolute inset-0"></div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-2">
          <button className="w-2 h-2 rounded-full bg-white bg-opacity-50"></button>
          <button className="w-2 h-2 rounded-full bg-white"></button>
          <button className="w-2 h-2 rounded-full bg-white bg-opacity-50"></button>
          <button className="w-2 h-2 rounded-full bg-white bg-opacity-50"></button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
