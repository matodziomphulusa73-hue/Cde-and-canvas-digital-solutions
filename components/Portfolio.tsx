
import React from 'react';
import { PORTFOLIO } from '../constants';
import { PortfolioItem } from '../types';

const PortfolioCard: React.FC<PortfolioItem> = ({ client, service, result, imageUrl }) => (
  <div className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5">
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={imageUrl} 
        alt={client} 
        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-navy via-navy/80 to-transparent">
      <div className="mb-2 inline-block px-3 py-1 bg-electric/20 text-electric rounded-lg text-xs font-bold uppercase tracking-widest">
        {service}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{client}</h3>
      <div className="flex items-center space-x-2 text-slate-300">
        <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
        <span className="font-medium">{result}</span>
      </div>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {PORTFOLIO.map((project) => (
        <PortfolioCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;
