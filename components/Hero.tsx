import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 border-b border-white/5 bg-transparent">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-950/50 text-xs font-medium text-brand mb-8 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(74,222,128,0.2)]">
            <Zap className="w-3 h-3 fill-current" />
            <span>Next-Gen Performance Marketing</span>
          </div>

          {/* New Hook */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">Scale at the</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-green-600 drop-shadow-[0_0_30px_rgba(74,222,128,0.25)]">Speed of Innovation.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-12 leading-relaxed">
             We don't just follow trends—we engineer them. <span className="text-white font-medium">buzZlads Media</span> builds high-velocity marketing ecosystems designed to adapt, evolve, and dominate in a digital-first world.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-14 px-8 rounded-full bg-white text-black font-bold flex items-center gap-3 hover:bg-zinc-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
            >
              Book a Free Call
              <ArrowDown className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium flex items-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};