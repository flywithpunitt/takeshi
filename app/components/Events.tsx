// File: src/components/Events.tsx
import React from 'react';
import Image from 'next/image';

const Events: React.FC = () => {
  const events = [
    {
      title: 'India Design ID 2024',
      image: '/eleven.jpg',
    },
    {
      title: 'Maison & Objet 2023, PARIS',
      image: '/twelve.jpg',
    },
    {
      title: 'India Design ID 2023',
      image: '/thirteen.jpg',
    },
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-24 text-center">
      <h2 className="text-2xl font-light tracking-wider text-gray-700 mb-12">EVENTS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="group relative">
            <div className="relative h-108 w-full overflow-hidden rounded-md shadow-sm">
              <Image
                src={event.image}
                alt={event.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white text-xl text-center px-4">{event.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Events;
