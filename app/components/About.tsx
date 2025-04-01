import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  const images = [
    'one.jpg',
    'two.jpg',
    'three.jpg',
    'four.jpg',
    'five.jpg',
    'six.jpg',
  ];

  return (
    <div className="bg-white py-16 px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl font-light tracking-wider text-gray-700 mb-6">AT TAKSHNI</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Section */}
        <div className="space-y-6">
          <p className="uppercase text-sm tracking-wider text-gray-500">WE TELL STORIES</p>
          <p className="text-sm text-gray-700">stories that add depth to our everyday</p>

          <p className="text-sm leading-relaxed text-gray-600">
          Our journey began with a vision to redefine art and décor, going beyond the ordinary and embracing the essence of nature. Takshni stands as a beacon of creativity, collaboration, and cultural appreciation. Through our commitment to crafting art and interior projects that transcend boundaries, we offer a unique blend of natural materials, artisanal craftsmanship, and contemporary design, enriching spaces and lives with the beauty of handmade artistry. Handmade Crafts and Brass Handicrafts are at the heart of our mission, as we endeavor to infuse your surroundings with the exquisite charm and elegance of these timeless treasures          </p>

          <p className="text-sm leading-relaxed text-gray-600">
          Our impact extends beyond aesthetics. By collaborating with artisans globally, we contribute to the preservation of traditional techniques, support local economies, and create a global platform for artists to showcase their skills. We actively engage in collaborations with artisans, designers, and creative minds from around the world. These initiatives lead to the creation of limited-edition collections that blend diverse artistic influences.          </p>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-full aspect-square rounded-md overflow-hidden"
            >
              <Image
                src={`/${img}`}
                alt={`About Image ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
