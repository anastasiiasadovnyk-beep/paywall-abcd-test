export interface IPricingFeature {
  icon: 'support' | 'updates' | 'refund' | 'devices' | 'cloud' | 'speed';
  title: string;
  description: string;
}

export const FEATURES_LIST: IPricingFeature[] = [
  {
    icon: 'support',
    title: '24/7 support',
    description: 'Get expert help anytime, day or night.',
  },
  {
    icon: 'updates',
    title: 'Constant feature updates',
    description: 'Explore smarter tools and evolving features.',
  },
  {
    icon: 'refund',
    title: 'Refund policy',
    description: 'Simple and transparent refund process.',
  },
  {
    icon: 'devices',
    title: 'Multi-device access',
    description: 'Use on desktop, tablet, and mobile.',
  },
  {
    icon: 'cloud',
    title: 'Secure cloud storage',
    description: 'Store and access your files anytime.',
  },
  {
    icon: 'speed',
    title: 'Lightning-fast processing',
    description: 'Convert and edit PDFs in no time.',
  },
];
