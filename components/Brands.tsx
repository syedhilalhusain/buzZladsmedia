import React from 'react';

// Using placeholder names from source, in a real scenario we would fetch logos
const brands = [
  "WorkSmart", "A2Z Computech", "Grandpaa Cafe", "Next Door Travel", "Xtracab Cables", "Nugh Jewellery", "Secure Money Mantra", "Lazeez Restaurant"
];

export const Brands: React.FC = () => {
  return (
    <section className="py-20 border-b border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
          Brands We've Empowered to Grow & Thrive
        </h2>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-scroll py-4 whitespace-nowrap flex gap-16 items-center">
          {/* Duplicate list for seamless loop */}
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-zinc-600 hover:text-white transition-colors cursor-default whitespace-nowrap">
              {brand}
            </div>
          ))}
        </div>
        
        {/* Gradient Fade for Carousel - adjust to match transparent bg or keep black fade if needed, keeping black fade makes text disappear gracefully */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </section>
  );
};