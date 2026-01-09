
import React from 'react';
import { Star } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <div className="bg-navy border-y border-white/5 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                alt="Client" 
                className="w-10 h-10 rounded-full border-2 border-navy"
              />
            ))}
            <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-navy flex items-center justify-center text-[10px] text-slate-400 font-bold">
              +50
            </div>
          </div>
          <div>
            <div className="flex text-yellow-500 scale-90 -ml-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} fill="currentColor" />)}
            </div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mt-0.5">Trusted by 50+ Growing Businesses</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">GLOBAL LOGISTICS</span>
          <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">FINTECH.IO</span>
          <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">ELEVATE MEDIA</span>
          <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">NEXUS SAAS</span>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
