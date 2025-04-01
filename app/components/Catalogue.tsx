// File: src/components/Catalogue.tsx
import React from 'react';
import Image from 'next/image';

const Catalogue: React.FC = () => {
  return (
    <div className="bg-white px-8 md:px-16 lg:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image Section */}
        <div className="relative h-114 w-full rounded-lg overflow-hidden shadow-md">
          <Image
            src="/ten.jpg"
            alt="Catalogue Preview"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light tracking-wider text-gray-700">CATALOGUE</h2>

          <p className="text-sm leading-relaxed text-gray-600">
            TAKSHNI is delighted with a curation of exclusive and limited edition artworks, and sculptures which display our Indian origin, blending emotions and exciting new range of artwork. Handcrafted details from some of the latest and timeless collections. Each collection represents a distinct mood and tells a unique narrative. We invite you to explore ways to set our pieces in an artistic dream creation.
          </p>

          <button className="border border-gray-300 text-sm tracking-wider text-gray-600 px-6 py-2 hover:bg-gray-100 transition duration-300">
            REQUEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
