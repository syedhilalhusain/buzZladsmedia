import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 border-b border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none opacity-20"></div>
      
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/10 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
            Innovative Strategies for Modern Brands
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Creating the <span className="text-brand">Buzz</span><br />
            <span className="text-white">That Drives Results.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed">
             At <span className="text-white font-semibold">buzZlads Media</span>, we’re not just about keeping up with trends – we’re about setting them. Expect innovative strategies, powerful branding, and data-driven performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 px-8 rounded-full bg-brand text-black font-bold flex items-center gap-2 hover:bg-brand/90 transition-colors shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)]"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-12 px-8 rounded-full border border-zinc-800 bg-black text-white font-medium flex items-center gap-2 hover:bg-zinc-900 transition-colors"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};