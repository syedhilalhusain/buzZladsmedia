import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

const posts = [
  {
    title: "SEO leaders: stop chasing rankings, start building visibility systems",
    date: "Oct 12, 2024",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    title: "Why creative, not bidding, is limiting PPC performance",
    date: "Sep 28, 2024",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    title: "How to optimize news content for today’s social-first Google SERP",
    date: "Sep 15, 2024",
    image: "https://picsum.photos/800/600?random=3"
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-black border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Latest from the Blog</h2>
            <p className="text-zinc-400">Insights and strategies for digital growth.</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mt-4 md:mt-0">
            View all posts <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <SpotlightCard key={i} className="group cursor-pointer bg-zinc-900/20 border-zinc-800" spotlightColor="rgba(255, 255, 255, 0.1)">
              <div className="aspect-video w-full overflow-hidden border-b border-zinc-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-brand font-mono mb-3">{post.date}</div>
                <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-zinc-200 transition-colors">
                  {post.title}
                </h3>
              </div>
            </SpotlightCard>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                View all posts <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};