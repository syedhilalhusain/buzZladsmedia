import React from 'react';
import { Search, PenTool, Share2, Mail, Layout, TrendingUp } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const services = [
  {
    title: "SEO & Website Optimization",
    description: "We'll ensure your site ranks high on search engines and is fully optimized for performance.",
    icon: <Search className="w-5 h-5 text-brand" />,
  },
  {
    title: "Content Creation & Marketing",
    description: "We'll craft compelling content that engages your audience and drives conversions.",
    icon: <PenTool className="w-5 h-5 text-brand" />,
  },
  {
    title: "Social Media & Influencer Marketing",
    description: "We'll amplify your brand's reach through strategic campaigns and influencer collaborations.",
    icon: <Share2 className="w-5 h-5 text-brand" />,
  },
  {
    title: "Email Marketing & List Building",
    description: "We'll build targeted email campaigns that nurture relationships and keep your customers engaged.",
    icon: <Mail className="w-5 h-5 text-brand" />,
  },
  {
    title: "Web Design & UX",
    description: "User-centric design focusing on converting visitors into customers through intuitive interfaces.",
    icon: <Layout className="w-5 h-5 text-brand" />,
  },
  {
    title: "Paid Advertising & Analysis",
    description: "We'll maximize your ROI with strategic paid ads and ongoing data-driven analysis.",
    icon: <TrendingUp className="w-5 h-5 text-brand" />,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-zinc-400 text-lg">
            We power your brand’s digital journey with a full suite of marketing services designed to make you stand out and succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <SpotlightCard key={index} className="h-full bg-zinc-900/20 border-zinc-800" spotlightColor="rgba(74, 222, 128, 0.1)">
              <div className="p-6 h-full flex flex-col relative z-10">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-brand/50 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};