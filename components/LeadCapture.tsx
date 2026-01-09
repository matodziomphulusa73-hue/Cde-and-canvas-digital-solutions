
import React, { useState } from 'react';
import { Download, Send, Loader2 } from 'lucide-react';

interface LeadCaptureProps {
  onSubmit: () => void;
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Professional Website'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitting(true);
      // Simulate network delay for a premium feel
      setTimeout(() => {
        setIsSubmitting(false);
        onSubmit();
        setFormData({ name: '', email: '', projectType: 'Professional Website' });
      }, 1200);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="reveal active">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-navy leading-tight">
          Ready to build your <span className="text-electric italic">digital asset</span>?
        </h2>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
          We don't just build websites; we build business tools that work. Get a professional solution that converts browsers into buyers. Our projects typically begin at <span className="font-bold text-navy">R2500,00</span>.
        </p>

        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-start space-x-6 hover:border-electric transition-all group">
          <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner text-electric group-hover:bg-electric group-hover:text-white transition-all">
            <Download className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2 text-navy">Free Strategy Checklist</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-4 font-light">
              "7 Things Your Business Website Must Have" – A guide to maximizing your online ROI. Included free with every quote request.
            </p>
            <span className="text-electric text-xs font-bold uppercase tracking-widest">Available Instantly</span>
          </div>
        </div>
      </div>

      <div className="bg-navy p-10 md:p-14 rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(10,25,47,0.4)] relative overflow-hidden reveal active">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-electric/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
          <div className="space-y-2">
            <label className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">Full Name</label>
            <input 
              required
              disabled={isSubmitting}
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">Email Address</label>
            <input 
              required
              disabled={isSubmitting}
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="email@business.com"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-white/20 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric transition-all disabled:opacity-50"
            />
          </div>

          <div className="space-y-2">
            <label className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">I Need A...</label>
            <select 
              disabled={isSubmitting}
              value={formData.projectType}
              onChange={(e) => setFormData({...formData, projectType: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-electric transition-all appearance-none cursor-pointer disabled:opacity-50"
            >
              <option className="bg-navy">Professional Website</option>
              <option className="bg-navy">High-Converting Landing Page</option>
              <option className="bg-navy">Brand Identity Package</option>
              <option className="bg-navy">Full Digital Strategy</option>
            </select>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 accent-gradient text-white font-extrabold rounded-2xl shadow-xl hover:shadow-electric/30 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center group disabled:opacity-80 disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-3 w-6 h-6 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Secure My Free Quote</span>
                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-white/30 text-center text-[10px] tracking-wide uppercase">
            Strictly Private. No Spam. Ever.
          </p>
        </form>
      </div>
    </div>
  );
};

export default LeadCapture;
