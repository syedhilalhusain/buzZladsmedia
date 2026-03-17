import React, { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Brands } from './components/Brands';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Particles } from './components/ui/Particles';

// Simple WhatsApp SVG icon
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.683-2.03-.967-.272-.297-.471-.421-.903-.421-.434 0-.943.161-1.437.694-.495.533-1.907 1.862-1.907 4.535 0 2.673 1.945 5.253 2.216 5.613.271.36 3.83 5.848 9.282 8.201 3.655 1.577 4.394 1.263 5.186 1.183.792-.08 2.529-1.034 2.887-2.032.358-.997.358-1.85.251-2.032z"/>
  </svg>
);

const App: React.FC = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand selection:text-black relative">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Particles */}
        <Particles className="absolute inset-0 opacity-40" />

        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-white bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-10"></div>
        
        {/* Rotating gradient beam (Radar scan effect) */}
        <div className="absolute top-[-50%] left-[-50%] right-[-50%] bottom-[-50%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_100deg,rgba(74,222,128,0.05)_140deg,transparent_180deg)] animate-[spin_10s_linear_infinite] opacity-50 rounded-full blur-3xl"></div>

        {/* Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Brands />
          <Blog />
          <CTA />
        </main>
      </div>
      
      <Analytics />
      
      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919528284864" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default App;