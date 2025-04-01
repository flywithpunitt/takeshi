// File: src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import CollectionCategories from './components/CollectionCategories';
import Catalogue from './components/Catalogue';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Collections />
      <CollectionCategories />
      <Catalogue />
      <Events />
      <Testimonials />
      <div className="py-16 px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl font-light tracking-wider text-gray-700 pb-4">
          Contemporary Artworks | Installations | Design Solutions | Takshni
        </h2>
        <p className="max-w-4xl mx-auto text-gray-600 font-light leading-relaxed">
          A unique and art Collaboration where you can find limited edition contemporary artworks, sculptures and design platforms for your space. 
          Explore our curated collection featuring artworks for home, including home decor artifacts and wall artworks. Whether you'd prefer to 
          incorporate sculptural pieces or statement artworks, we've got you covered. Connect with us to discuss your unique space and interior design 
          preferences. Elevate your home decor with our handcrafted creations, each telling its own story through artistry and craftsmanship.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;