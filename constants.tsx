
import React from 'react';
import { 
  Code2, 
  Palette, 
  Rocket, 
  Target, 
  Layers, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Monitor,
  Layout,
  Star
} from 'lucide-react';
import { PortfolioItem, ServiceCardProps, ValuePillarProps } from './types';

export const SERVICES: ServiceCardProps[] = [
  {
    title: "Professional Websites",
    description: "Full-scale business sites engineered for high performance, accessibility, and professional credibility.",
    icon: <Monitor className="w-8 h-8 text-electric" />
  },
  {
    title: "High-Converting Landing Pages",
    description: "Laser-focused lead generation pages designed to capture attention and drive immediate action.",
    icon: <Layout className="w-8 h-8 text-electric" />
  },
  {
    title: "Brand Identity Package",
    description: "Complete visual systems including logos, typography, and style guides to make your brand unforgettable.",
    icon: <Layers className="w-8 h-8 text-electric" />
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    client: "Apex Logistics",
    service: "Full Corporate Website",
    result: "Increased organic traffic by 65%",
    imageUrl: "https://picsum.photos/seed/apex/800/600"
  },
  {
    id: 2,
    client: "Velvet Bloom",
    service: "Brand Identity & E-commerce",
    result: "Achieved 4.2% conversion rate in Month 1",
    imageUrl: "https://picsum.photos/seed/velvet/800/600"
  },
  {
    id: 3,
    client: "SaaS Flow",
    service: "High-Conversion Landing Page",
    result: "Lowered Cost Per Acquisition (CPA) by 32%",
    imageUrl: "https://picsum.photos/seed/saas/800/600"
  }
];

export const PILLARS: ValuePillarProps[] = [
  {
    title: "Conversion-Focused",
    description: "We don't just write code; we build strategic digital assets that turn browsers into loyal customers.",
    icon: <Target className="w-10 h-10 text-electric" />
  },
  {
    title: "Custom Modern Design",
    description: "Unique visuals tailored to your specific market needs. No generic templates, just pure creative canvas.",
    icon: <Palette className="w-10 h-10 text-electric" />
  },
  {
    title: "Complete Solution",
    description: "From concept and branding to launch and maintenance. We are your end-to-end digital partner.",
    icon: <ShieldCheck className="w-10 h-10 text-electric" />
  }
];
