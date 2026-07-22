import type { FC } from 'react';

import { CheckIcon } from '@/shared/ui/icons';

import {
  PlanFeature,
  PlanFeatureDescription,
  PlanFeatureIconContainer,
  PlanFeatureTitle,
  PlansFeatures,
} from './styles';

interface IPlanFeatureItem {
  title: string;
  description: string;
}

const PLAN_FEATURES: IPlanFeatureItem[] = [
  {
    title: 'Full Editing Suite',
    description: 'Customize your file with text, images, notes, and signatures.',
  },
  {
    title: 'Perfect Formatting',
    description: 'Keep layouts, fonts, and tables original.',
  },
  {
    title: 'Smart OCR',
    description: 'Convert scans into editable text.',
  },
  {
    title: 'Dynamic File Control',
    description: 'Merge & split files with ease — reorder or delete pages in a click.',
  },
  {
    title: 'PDF & Image Compression',
    description: 'Minimize file sizes without losing quality.',
  },
  {
    title: 'Secure Cloud Storage',
    description: 'Store and access your files anytime.',
  },
];

/** Two-column checklist of plan benefits shown under the CTA. */
export const PlanFeaturesList: FC = () => {
  return (
    <PlansFeatures>
      {PLAN_FEATURES.map((feature) => (
        <PlanFeature key={feature.title}>
          <PlanFeatureIconContainer>
            <CheckIcon />
          </PlanFeatureIconContainer>
          <PlanFeatureTitle>{feature.title}</PlanFeatureTitle>
          <PlanFeatureDescription>{feature.description}</PlanFeatureDescription>
        </PlanFeature>
      ))}
    </PlansFeatures>
  );
};
