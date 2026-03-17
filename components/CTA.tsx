import React, { useState } from 'react';
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenges: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Create message for WhatsApp
    const whatsappMessage = `Hi, here's my proposal request:\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nChallenges:\n${formData.challenges}`;
    
    // Create email subject and body
    const emailSubject = `Strategic Proposal Request from ${formData.name}`;
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not specified'}\n\nChallenges:\n${formData.challenges}`;
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/919528284864?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    // Open Outlook
    const outlookUrl = `mailto:info@buzzladsmedia.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(outlookUrl, '_blank');
    
    // Show success message
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', challenges: '' });
        setSubmitted(false);
      }, 3000);
    }, 500);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('proposal-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-transparent">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-30 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(47, 205, 105, 0.1), transparent)'
      }}></div>
      
      <div className="relative z-10">
        {/* Main CTA Section */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Get in touch with </span>
            <span style={{ color: '#2fcd69' }}>us</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to scale your sales and generate serious revenue? Reach out if you want to dominate your market, maximize ROI, and turn your business into a money-making machine.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto h-14 px-8 rounded-full bg-white text-black font-bold text-base flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-lg"
            >
              Book a Free Call
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            
            <motion.a 
              href="mailto:info@buzzladsmedia.com" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto h-14 px-8 rounded-full border-2 border-white/20 bg-transparent text-white font-medium text-base transition-all flex items-center justify-center gap-2"
              style={{
                '--hover-color': '#2fcd69'
              } as any}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#2fcd69';
                (e.currentTarget as HTMLElement).style.color = '#2fcd69';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.2)';
                (e.currentTarget as HTMLElement).style.color = 'white';
              }}
            >
              <Mail className="w-5 h-5" />
              Contact Sales
            </motion.a>
          </div>
        </div>

        {/* Strategic Proposal Section */}
        <div id="proposal-form" className="max-w-6xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left Panel - Dark */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 border border-white/5 rounded-2xl p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Scale?
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Stop leaving revenue on the table. Partner with buzZlads MEDIA to build a sustainable, high-growth marketing engine for your enterprise.
                </p>
              </div>

              <div className="space-y-6 mt-8">
                <div className="flex gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#2fcd69' }} />
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white font-semibold text-lg">growth@buzzladsmedia.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#2fcd69' }}>
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2C5.58 2 2 5.58 2 10c0 3.64 2.57 6.71 6 7.49v-5.3h-2v-2.19h2V9.5c0-2.08 1.24-3.23 3.13-3.23.91 0 1.86.16 1.86.16v2.05h-1.05c-1.03 0-1.35.64-1.35 1.3v1.57h2.3l-.37 2.19h-1.93v5.3c3.43-.78 6-3.85 6-7.49 0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Headquarters</p>
                    <p className="text-white font-semibold text-lg">buzZlads HQ</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Panel - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 border border-white/5 rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                Request a Strategic Proposal
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-80">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="rounded-full p-4 mb-4"
                    style={{
                      backgroundColor: 'rgba(47, 205, 105, 0.2)',
                      border: '1px solid rgba(47, 205, 105, 0.5)'
                    }}
                  >
                    <Check className="w-8 h-8" style={{ color: '#2fcd69' }} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Success!</h4>
                  <p className="text-gray-400 text-center">
                    Thank you! We'll review your proposal and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2 flex items-center gap-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
                        style={{ '--focus-color': '#2fcd69' } as any}
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor = '#2fcd69';
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2 flex items-center gap-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
                        onFocus={(e) => {
                          (e.target as HTMLElement).style.borderColor = '#2fcd69';
                        }}
                        onBlur={(e) => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-1">
                      Company <span className="text-gray-500 text-sm">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all"
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = '#2fcd69';
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    />
                  </div>

                  {/* Challenges */}
                  <div>
                    <label className="block text-white font-medium mb-2 flex items-center gap-1">
                      Current Growth Challenges <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleChange}
                      placeholder="Tell us about your current digital marketing operations and goals..."
                      required
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:bg-white/10 transition-all resize-none"
                      onFocus={(e) => {
                        (e.target as HTMLElement).style.borderColor = '#2fcd69';
                      }}
                      onBlur={(e) => {
                        (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-black font-bold py-3 rounded-lg transition-all duration-300 mt-6 disabled:opacity-50"
                    style={{
                      backgroundColor: loading ? 'rgba(47, 205, 105, 0.5)' : '#2fcd69'
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(47, 205, 105, 0.9)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        (e.currentTarget as HTMLElement).style.backgroundColor = '#2fcd69';
                      }
                    }}
                  >
                    {loading ? 'Submitting...' : 'Submit Request'}
                  </motion.button>

                  {/* Note */}
                  <p className="text-gray-500 text-xs text-center">
                    Fields marked <span className="text-red-500">*</span> are required. We typically respond within 24 business hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-6xl mx-auto px-6 border-t border-white/5 pt-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us For Latest Updates</h3>
              <div className="flex gap-6">
                <motion.a 
                  href="https://www.facebook.com/Buzzladsmedia/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-500 transition-colors" 
                  style={{ '--hover-color': '#2fcd69' } as any}
                  onMouseEnter={(e) => {
                    (e.currentTarget as SVGElement).style.color = '#2fcd69';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as SVGElement).style.color = 'rgb(107, 114, 128)';
                  }}
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a 
                  href="http://instagram.com/buzzladsmedia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-500 transition-colors" 
                  onMouseEnter={(e) => {
                    (e.currentTarget as SVGElement).style.color = '#2fcd69';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as SVGElement).style.color = 'rgb(107, 114, 128)';
                  }}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a 
                  href="http://linkedin.com/buzzladsmedia" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-500 transition-colors" 
                  onMouseEnter={(e) => {
                    (e.currentTarget as SVGElement).style.color = '#2fcd69';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as SVGElement).style.color = 'rgb(107, 114, 128)';
                  }}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </div>
            <div className="text-right md:text-left md:text-right">
              <p className="text-gray-500 text-sm">© 2025 buzZlads MEDIA · Creating the Buzz · All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};