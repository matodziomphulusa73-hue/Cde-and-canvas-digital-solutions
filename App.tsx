
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import ValuePillars from './components/ValuePillars';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import LeadCapture from './components/LeadCapture';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSubmit = () => {
    setShowSuccessModal(true);
  };

  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Run once on load
    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-electric selection:text-navy">
      <Header />
      
      <main>
        <section id="hero" className="mesh-bg">
          <Hero />
        </section>

        <TrustSection />

        <section id="services" className="py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 max-w-3xl mx-auto reveal">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-navy">Strategic Digital Offerings</h2>
              <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
                We combine technical depth with creative flair to build digital assets that actually solve business problems.
              </p>
            </div>
            <div className="reveal">
              <Services />
            </div>
          </div>
        </section>

        <ValuePillars />

        <section id="portfolio" className="py-32 bg-navy text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 reveal">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Built For Performance</h2>
                <p className="text-slate-400 text-lg md:text-xl font-light">
                  Real results for growing businesses. Each project is crafted from the ground up to achieve specific ROI goals.
                </p>
              </div>
              <div className="mt-8 md:mt-0 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm">
                <p className="text-electric text-sm font-bold uppercase tracking-widest mb-1">Entry Pricing</p>
                <p className="text-3xl font-bold tracking-tighter">R2500,00<span className="text-sm font-normal text-slate-400 ml-1">ZAR</span></p>
              </div>
            </div>
            <div className="reveal">
              <Portfolio />
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 relative">
          <div className="container mx-auto px-6">
            <LeadCapture onSubmit={handleFormSubmit} />
          </div>
        </section>
      </main>

      <Footer />

      {/* Static Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[3rem] p-10 md:p-14 max-w-lg w-full text-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] scale-in-95 animate-in duration-500">
            <div className="w-24 h-24 bg-electric/10 text-electric rounded-full flex items-center justify-center mx-auto mb-10 border border-electric/20">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-extrabold mb-4 text-navy">Success! Your Quote is Pending</h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">
              We've received your inquiry. Our lead strategist will review your requirements and reach out within 24 business hours.
            </p>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-5 accent-gradient text-white font-bold rounded-2xl shadow-lg hover:opacity-90 transition-all text-lg"
              >
                Continue Exploring
              </button>
              <button className="text-slate-400 hover:text-navy font-bold text-sm transition-colors flex items-center justify-center">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Bonus Checklist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
