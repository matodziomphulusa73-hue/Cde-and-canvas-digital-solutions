
import React from 'react';
import { Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded text-navy font-bold text-sm italic">C&C</div>
              <span className="font-bold text-lg text-white tracking-tight">
                CODE<span className="text-electric">&</span>CANVAS
              </span>
            </a>
            <p className="mb-8 max-w-xs leading-relaxed">
              Crafting high-performance digital solutions that bridge the gap between technical excellence and artistic vision.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-electric transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-electric transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-electric transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-electric transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-electric transition-colors">Business Websites</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Landing Pages</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Brand Design</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">E-commerce Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-electric transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-electric transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-electric" />
                <span>hello@codeandcanvas.io</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-electric" />
                <span>+27 (0) 12 345 6789</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-electric mt-1" />
                <span>Digital Hub, Cape Town, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {currentYear} Code&Canvas Digital Solutions. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Built with Code and Passion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
