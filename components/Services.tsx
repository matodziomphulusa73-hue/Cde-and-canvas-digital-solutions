
import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCardProps } from '../types';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 hover:border-electric/50 transition-all group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <ArrowUpRight className="text-electric w-6 h-6" />
    </div>
    <div className="mb-8">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-navy">{title}</h3>
    <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
    <button className="text-navy font-bold flex items-center space-x-2 group-hover:text-electric transition-colors">
      <span>Learn More</span>
      <span className="w-8 h-[1px] bg-navy group-hover:bg-electric transition-all group-hover:w-12"></span>
    </button>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {SERVICES.map((service, idx) => (
        <ServiceCard key={idx} {...service} />
      ))}
    </div>
  );
};

export default Services;
