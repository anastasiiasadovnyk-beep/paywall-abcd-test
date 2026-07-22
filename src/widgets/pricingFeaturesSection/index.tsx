import type { FC } from 'react';

import {
  BoltIcon,
  CloudDoneIcon,
  CurrencyExchangeIcon,
  DevicesIcon,
  SupportAgentIcon,
  UpdateIcon,
} from '@/shared/ui/icons';

import {
  FeatureDescription,
  FeatureIcon,
  FeatureItem,
  FeaturesContainer,
  FeaturesSection,
  FeaturesSectionTitle,
  FeatureTitle,
} from './styles';
import { FEATURES_LIST } from './featuresList';

const FEATURE_ICONS = {
  support: SupportAgentIcon,
  updates: UpdateIcon,
  refund: CurrencyExchangeIcon,
  devices: DevicesIcon,
  cloud: CloudDoneIcon,
  speed: BoltIcon,
} as const;

/** "What you get with PDFLeader" — grid of six feature cards. */
export const PricingFeaturesSection: FC = () => {
  return (
    <FeaturesSection>
      <FeaturesSectionTitle>What you get with PDFLeader</FeaturesSectionTitle>
      <FeaturesContainer>
        {FEATURES_LIST.map((feature) => {
          const Icon = FEATURE_ICONS[feature.icon];

          return (
            <FeatureItem key={feature.icon}>
              <FeatureIcon>
                <Icon />
              </FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          );
        })}
      </FeaturesContainer>
    </FeaturesSection>
  );
};
