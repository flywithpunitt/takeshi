// File: src/components/Testimonials.tsx
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-light tracking-wider text-gray-700 mb-12 text-center">TESTIMONIALS</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full h-16 w-16 overflow-hidden bg-gray-200 mb-4">
            {/* Testimonial 1 person image to be added by you */}
          </div>
          <h3 className="text-lg font-medium">Kirti Arora</h3>
          <p className="text-sm text-gray-500 mb-4">Interior Designer</p>
          <p className="text-sm text-gray-600 text-center">
            &quot;Takshni is a wonderful collaboration of art and craft pieces that I have used in multiple of my design projects. The quality and elegance expected is always delivered by Kirti and her team. I especially like the detail efforts put in by the brand. Looking forward to many more collaborations with Takshni.&quot;
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full h-16 w-16 overflow-hidden bg-gray-200 mb-4">
            {/* Testimonial 2 person image to be added by you */}
          </div>
          <h3 className="text-lg font-medium">Mili Talwar</h3>
          <p className="text-sm text-gray-500 mb-4">Designer</p>
          <p className="text-sm text-gray-600 text-center">
            &quot;My personal style is Takshni&apos;s art pieces blend so well with my space, the intricate patterns makes these impressive pieces with an aesthetic appeal. It complements my home beautifully, adding dimension and personality.&quot;
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full h-16 w-16 overflow-hidden bg-gray-200 mb-4">
            {/* Testimonial 3 person image to be added by you */}
          </div>
          <h3 className="text-lg font-medium">Shikha Dalal</h3>
          <p className="text-sm text-gray-500 mb-4">Art Enthusiast</p>
          <p className="text-sm text-gray-600 text-center">
            &quot;Working with Takshni has been a dream. Their designs are unique and captivating, adding elegance to every corner of my living space. I&apos;m particularly impressed with their attention to detail and the way they capture the essence of traditional craftsmanship while maintaining a contemporary aesthetic.&quot;
          </p>
        </div>
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

export default Testimonials;
