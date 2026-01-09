
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-40 relative">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center space-x-2 bg-electric/10 text-electric px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-electric/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric"></span>
            </span>
            <span className="uppercase tracking-widest text-[10px]">Now Accepting Premium Projects</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8">
            Code Meets <span className="text-electric">Creativity</span>: Professional Digital Solutions.
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-light">
            We build digital assets that get more customers. Specialized in high-converting landing pages, premium business websites, and comprehensive brand identity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="#contact" 
              className="px-8 py-5 accent-gradient text-white font-bold rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,210,255,0.4)] hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,210,255,0.5)] transition-all flex items-center justify-center group"
            >
              Get Your Free Project Quote
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <div className="flex flex-col space-y-2 px-2">
              <div className="flex items-center text-slate-400 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-electric mr-2.5" />
                <span>Conversion First Approach</span>
              </div>
              <div className="flex items-center text-slate-400 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-electric mr-2.5" />
                <span>100% Custom Coding</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative w-full aspect-square bg-white/5 rounded-[3rem] border border-white/10 p-8 shadow-2xl backdrop-blur-md overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent"></div>
            
            {/* Abstract Geometric Canvas Artwork */}
            <div className="relative h-full w-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-24 h-24 border-2 border-electric/40 rounded-3xl animate-float"></div>
                <div className="w-40 h-12 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm flex items-center px-4 space-x-3">
                  <div className="w-3 h-3 bg-electric rounded-full"></div>
                  <div className="h-1.5 w-full bg-white/20 rounded"></div>
                </div>
              </div>

              <div className="self-center w-full max-w-sm">
                <div className="bg-navy p-6 rounded-3xl border border-white/10 shadow-2xl transform group-hover:rotate-2 transition-transform duration-500">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 w-4/5 bg-electric/30 rounded"></div>
                    <div className="h-3 w-3/5 bg-white/10 rounded"></div>
                    <div className="h-3 w-5/6 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="w-32 h-32 bg-electric/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="text-right">
                  <div className="text-4xl font-black text-white/10 italic select-none">CANVAS</div>
                  <div className="text-xl font-bold text-electric/40 tracking-widest mt-[-10px]">CODE</div>
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
