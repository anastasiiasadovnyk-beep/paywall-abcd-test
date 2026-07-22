import { type FC, useState } from 'react';

import {
  PRICE_CHOICE_RECURRING,
  PRICE_CHOICES,
  type IPriceChoice,
} from '@/shared/constants/plans';
import { FilePreviewCard } from '@/widgets/filePreviewCard';
import { PricingFeaturesSection } from '@/widgets/pricingFeaturesSection';

import { ContinueButton } from '../components/continueButton';
import { PlanDisclaimer } from '../components/planDisclaimer';
import { PlanFeaturesList } from '../components/planFeaturesList';
import { PriceChoiceSelector } from '../components/priceChoiceSelector';
import {
  Content,
  DesktopOnly,
  HeroSectionsContainer,
  MobileDisclaimer,
  PlansContent,
  PlansFormContainer,
  Subtitle,
  Title,
} from '../styles';

const DEFAULT_CHOICE =
  PRICE_CHOICES.find((choice) => choice.isMostPopular) ?? PRICE_CHOICES[0];

/**
 * Group D — "choose your price": the visitor decides how much the 7-day
 * trial costs; every option unlocks the same full access.
 */
export const GroupD: FC = () => {
  const [selectedChoice, setSelectedChoice] = useState<IPriceChoice>(DEFAULT_CHOICE);

  return (
    <Content>
      <Title>Choose your price</Title>
      <Subtitle>
        Every option unlocks the same 7-day full access to all PDFLeader tools. Pick the price
        that feels right for you.
      </Subtitle>

      <HeroSectionsContainer>
        <PlansContent>
          <PlansFormContainer>
            <PriceChoiceSelector
              choices={PRICE_CHOICES}
              selectedChoiceId={selectedChoice.id}
              onSelectChoice={setSelectedChoice}
            />
            <ContinueButton />
          </PlansFormContainer>
          <PlanFeaturesList />
          <DesktopOnly>
            <PlanDisclaimer kind="trial" recurringPrice={PRICE_CHOICE_RECURRING} />
          </DesktopOnly>
        </PlansContent>
        <FilePreviewCard />
      </HeroSectionsContainer>

      <MobileDisclaimer data-testid="plan-disclaimer-mobile">
        <PlanDisclaimer kind="trial" recurringPrice={PRICE_CHOICE_RECURRING} />
      </MobileDisclaimer>

      <PricingFeaturesSection />
    </Content>
  );
};
