
import React, { useState } from 'react';
import { Download, Send } from 'lucide-react';

interface LeadCaptureProps {
  onSubmit: () => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Professional Website'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit();
      setFormData({ name: '', email: '', projectType: 'Professional Website' });
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy">Ready to build your <span className="text-electric italic">digital asset</span>?</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Don't settle for "good enough". Get a professional solution that converts browsers into buyers. Our projects typically begin at <span className="font-bold text-navy">R2500,00</span> and deliver measurable ROI.
        </p>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex items-start space-x-6 hover:border-electric transition-colors group">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-electric group-hover:scale-110 transition-transform">
            <Download className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Free Bonus Checklist</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Download our "7 Essentials for High-Converting Business Websites" – completely free with your quote request.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-navy p-10 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-electric/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-white/60 text-sm font-semibold uppercase tracking-wider">Full Name</label>
            <input 
              required
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/60 text-sm font-semibold uppercase tracking-wider">Business Email</label>
            <input 
              required
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="john@company.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/60 text-sm font-semibold uppercase tracking-wider">Project Type</label>
            <select 
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-electric transition-all appearance-none cursor-pointer"
            >
              <option className="bg-navy">Professional Website</option>
              <option className="bg-navy">Landing Page</option>
              <option className="bg-navy">Brand Identity</option>
              <option className="bg-navy">Other Digital Solution</option>
            </select>
          </div>

          <button 
            type="submit"
            className="w-full py-5 accent-gradient text-white font-bold rounded-xl shadow-lg hover:shadow-electric/20 hover:-translate-y-0.5 transition-all flex items-center justify-center group"
          >
            <span>Get My Project Quote</span>
            <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          
          <p className="text-white/40 text-center text-xs mt-4">
            By clicking, you agree to our Privacy Policy and will receive the free checklist.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadCapture;
