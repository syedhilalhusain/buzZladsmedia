import React from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-zinc-900 to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
          Get in touch with us
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          We’d love to hear from you! Whether you have a question, a project idea, or just want to say hello — we’re all ears. Don’t hesitate — reach out today.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
          <a href="#" className="w-full md:w-auto px-8 py-4 bg-brand text-black font-bold rounded-full text-lg hover:bg-brand/90 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(74,222,128,0.5)]">
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="mailto:info@buzzladsmedia.com" className="w-full md:w-auto px-8 py-4 bg-transparent border border-zinc-700 text-white font-semibold rounded-full text-lg hover:border-brand/50 hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Sales
          </a>
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