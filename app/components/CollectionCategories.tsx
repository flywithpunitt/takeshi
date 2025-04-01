// File: src/components/CollectionCategories.tsx
import React from 'react';
import Image from 'next/image';

const CollectionCategories: React.FC = () => {
  return (
    <div className="bg-white px-8 md:px-16 lg:px-24 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Artworks */}
        <div className="space-y-4">
          <div className="relative h-104 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/seven.jpg"
              alt="Artworks"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className="text-lg font-light text-gray-700">Artworks</h3>
          <p className="uppercase text-xs tracking-wider text-gray-500">DISCOVER</p>
        </div>

        {/* Projects */}
        <div className="space-y-4">
          <div className="relative h-104 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/eight.jpg"
              alt="Projects"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className="text-lg font-light text-gray-700">Projects</h3>
          <p className="uppercase text-xs tracking-wider text-gray-500">DISCOVER</p>
        </div>

        {/* Archives */}
        <div className="space-y-4">
          <div className="relative h-104 w-full rounded-lg overflow-hidden shadow-md">
            <Image
              src="/nine.jpg"
              alt="Archives"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h3 className="text-lg font-light text-gray-700">Archives</h3>
          <p className="uppercase text-xs tracking-wider text-gray-500">DISCOVER</p>
        </div>

      </div>
    </div>
  );
};

export default CollectionCategories;
