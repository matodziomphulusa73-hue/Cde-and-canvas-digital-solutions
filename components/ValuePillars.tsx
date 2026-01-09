
import React from 'react';
import { PILLARS } from '../constants';
import { ValuePillarProps } from '../types';

const Pillar: React.FC<ValuePillarProps> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
    <div className="mb-6 p-4 bg-slate-50 rounded-2xl group-hover:bg-electric/10 group-hover:text-electric transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-navy">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const ValuePillars: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 transform skew-x-12 translate-x-1/2"></div>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map((pillar, idx) => (
            <Pillar key={idx} {...pillar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
