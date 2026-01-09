
// Add missing React import to provide access to React.ReactNode type
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface PortfolioItem {
  id: number;
  client: string;
  service: string;
  result: string;
  imageUrl: string;
}

export interface ValuePillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}