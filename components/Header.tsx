
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-navy flex items-center justify-center rounded-lg shadow-lg group-hover:scale-110 transition-transform">
            <span className="text-electric font-black text-xl italic">C&C</span>
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-navy' : 'text-white'}`}>
            CODE<span className="text-electric">&</span>CANVAS
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className={`font-medium hover:text-electric transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Services</a>
          <a href="#portfolio" className={`font-medium hover:text-electric transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-200'}`}>Portfolio</a>
          <a href="#contact" className={`font-medium px-5 py-2.5 rounded-full border border-electric/30 hover:border-electric hover:bg-electric/10 transition-all ${isScrolled ? 'text-navy' : 'text-white'}`}>Get a Quote</a>
        </nav>

        <button className="md:hidden text-slate-500 hover:text-navy">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
