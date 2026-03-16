import React from 'react';

const stats = [
  { label: "Clients", value: "9", suffix: "" },
  { label: "Project Reviews", value: "14", suffix: "K" },
  { label: "Web Projects", value: "42", suffix: "" },
];

export const Stats: React.FC = () => {
  return (
    <section id="expectations" className="py-24 border-b border-white/5 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
              What you can expect from us?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              At Buzzlads Media, we’re not just about keeping up with trends – we’re about setting them. Expect innovative strategies, powerful branding, and a team that’s as passionate about your success as you are. Let’s shape the future of your brand together!
            </p>
            <div className="h-px w-20 bg-brand/50"></div>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl font-bold mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400">
                  {stat.value}<span className="text-brand">{stat.suffix}</span>
                </div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};