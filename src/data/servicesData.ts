import { Droplets, Flame, Bug, Wind, Building2, ShieldCheck } from 'lucide-react';

export const waterDamageService = {
  id: 'water-damage',
  icon: Droplets,
  title: 'Water Damage',
  description: 'Emergency water removal and complete drying services for floods and leaks.',
  details: [
    'Emergency Water Extraction',
    'Structural Drying',
    'Flood Damage Cleanup',
    'Sewage Cleanup',
    'Moisture Detection'
  ],
  image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export const fireDamageService = {
  id: 'fire-damage',
  icon: Flame,
  title: 'Fire & Smoke',
  description: 'Professional cleanup and restoration services for fire and smoke damage.',
  details: [
    'Fire Damage Restoration',
    'Smoke Odor Removal',
    'Soot Cleanup',
    'Content Cleaning',
    'Structural Repairs'
  ],
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export const moldService = {
  id: 'mold-remediation',
  icon: Bug,
  title: 'Mold Remediation',
  description: 'Expert mold removal and prevention services to ensure your safety.',
  details: [
    'Mold Inspection',
    'Safe Mold Removal',
    'Air Quality Testing',
    'Prevention Services',
    'Structural Drying'
  ],
  image: 'https://images.unsplash.com/photo-1585414143782-c7321b149442?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export const stormService = {
  id: 'storm-damage',
  icon: Wind,
  title: 'Storm Damage',
  description: 'Comprehensive storm damage restoration and emergency board-up services.',
  details: [
    'Emergency Board-Up',
    'Roof Tarping',
    'Water Extraction',
    'Structural Repairs',
    'Debris Removal'
  ],
  image: 'https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export const commercialService = {
  id: 'commercial',
  icon: Building2,
  title: 'Commercial Services',
  description: 'Specialized restoration solutions for businesses of all sizes.',
  details: [
    'Business Continuity Planning',
    'Large Loss Response',
    'Industrial Equipment Restoration',
    'Facility Cleaning Services',
    'Project Management'
  ],
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};

export const insuranceService = {
  id: 'insurance',
  icon: ShieldCheck,
  title: 'Insurance Assistance',
  description: 'Expert guidance through the insurance claims process.',
  details: [
    'Claims Documentation',
    'Direct Insurance Billing',
    'Estimate Preparation',
    'Policy Review',
    'Claim Filing Assistance'
  ],
  image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
};