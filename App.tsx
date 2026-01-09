
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

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-electric selection:text-white">
      <Header />
      
      <main>
        <section id="hero" className="mesh-bg">
          <Hero />
        </section>

        <TrustSection />

        <section id="services" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Offerings</h2>
              <p className="text-slate-600 text-lg">
                We bridge the gap between technical excellence and artistic vision to deliver results that matter for your business.
              </p>
            </div>
            <Services />
          </div>
        </section>

        <ValuePillars />

        <section id="portfolio" className="py-24 bg-navy text-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
                <p className="text-slate-400 text-lg">
                  A glimpse into how we've helped our clients scale their digital presence.
                </p>
              </div>
              <p className="mt-4 md:mt-0 text-electric font-medium tracking-wide">
                Our Projects Typically Begin At R2500,00
              </p>
            </div>
            <Portfolio />
          </div>
        </section>

        <section id="contact" className="py-24 relative">
          <div className="container mx-auto px-6">
            <LeadCapture onSubmit={handleFormSubmit} />
          </div>
        </section>
      </main>

      <Footer />

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl scale-in-95 animate-in">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
            <p className="text-slate-600 mb-8">
              Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-4 accent-gradient text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
