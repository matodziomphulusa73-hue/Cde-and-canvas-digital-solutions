
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-36 relative">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-electric/10 text-electric px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-electric/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            <span>Accepting New Projects for Q2</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Code Meets <span className="text-electric">Creativity</span>: Digital Solutions for Modern Businesses.
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            We specialize in high-converting landing pages, premium business websites, and comprehensive brand identity systems that drive growth and command attention.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="px-8 py-5 accent-gradient text-white font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(0,210,255,0.5)] hover:-translate-y-1 transition-all flex items-center group w-full sm:w-auto justify-center"
            >
              Get Your Free Project Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-electric mr-2" />
                <span>Custom Built, No Templates</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-electric mr-2" />
                <span>Conversion Optimized</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          {/* Abstract visual representation of Code & Canvas */}
          <div className="relative w-full aspect-square bg-navy/40 rounded-3xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5">
              <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-electric opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-electric opacity-50"></div>
              
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full max-w-xs transform hover:rotate-1 transition-transform">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-electric/20 rounded"></div>
                    <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                    <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                  </div>
                </div>

                <div className="bg-electric/20 border border-electric/30 p-8 rounded-full w-24 h-24 flex items-center justify-center animate-pulse">
                  <div className="w-12 h-12 bg-electric rounded-full blur-md"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="h-20 bg-white/5 border border-white/10 rounded-xl"></div>
                  <div className="h-20 bg-electric/10 border border-electric/20 rounded-xl flex items-center justify-center text-electric text-2xl font-black italic">Canvas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
