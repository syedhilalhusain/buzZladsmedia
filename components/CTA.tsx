import React from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-transparent">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
          Get in touch with us
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to scale your sales and generate serious revenue? Reach out if you want to dominate your market, maximize ROI, and turn your business into a money-making machine.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto h-14 px-8 rounded-full bg-white text-black font-bold text-base flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          
          <motion.a 
            href="mailto:info@buzzladsmedia.com" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-base hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Mail className="w-5 h-5" />
            Contact Sales
          </motion.a>
        </div>

        <div className="border-t border-zinc-800 pt-12 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <div className="mb-6 md:mb-0">
            <h3 className="text-white font-semibold mb-4 text-center md:text-left">Follow Us For Latest Update</h3>
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="https://www.facebook.com/Buzzladsmedia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="http://instagram.com/buzzladsmedia" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="http://linkedin.com/buzzladsmedia" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <p>© 2025 buzZlads MEDIA · Creating the Buzz · All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};