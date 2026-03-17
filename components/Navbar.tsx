import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', active: true },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#expectations' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToForm = () => {
    console.log('Get Started clicked');
    const formElement = document.getElementById('proposal-form');
    console.log('Form element found:', formElement);
    if (formElement) {
      console.log('Scrolling to form...');
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('proposal-form element not found!');
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300 h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start leading-none group select-none">
          <div className="font-bold text-3xl tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-green-500">buzZ</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">lads</span>
          </div>
          <div className="text-[0.65rem] font-bold tracking-[0.36em] text-white/90 group-hover:text-white transition-colors pl-[2px] w-full text-center">
            MEDIA
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <button 
              onClick={scrollToForm}
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-white text-black hover:bg-gray-100 transition-all duration-300"
            >
                Get Started
            </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 right-0 bg-black border-b border-zinc-800 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={scrollToForm}
                className="mt-2 w-full py-3 text-center rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};