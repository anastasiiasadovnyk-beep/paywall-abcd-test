import { type FC, useState } from 'react';

import { PLANS, type IPlan } from '@/shared/constants/plans';
import { FilePreviewCard } from '@/widgets/filePreviewCard';
import { PricingFeaturesSection } from '@/widgets/pricingFeaturesSection';

import { ContinueButton } from '../components/continueButton';
import { BigFileProgress } from '../components/fileProgress';
import { PlanDisclaimer } from '../components/planDisclaimer';
import { PlanFeaturesList } from '../components/planFeaturesList';
import { PlansSelector } from '../components/plansSelector';
import {
  Content,
  DesktopOnly,
  HeroSectionsContainer,
  MobileDisclaimer,
  PlansContent,
  PlansFormContainer,
  Title,
} from '../styles';

/**
 * Group B — control screen plus a big, attention-grabbing progress
 * banner between the header and the plans.
 */
export const GroupB: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<IPlan>(PLANS[0]);

  return (
    <Content>
      <BigFileProgress percent={90} />

      <Title>Pick a plan and get your file</Title>

      <HeroSectionsContainer>
        <PlansContent>
          <PlansFormContainer>
            <PlansSelector
              plans={PLANS}
              selectedPlanId={selectedPlan.id}
              onSelectPlan={setSelectedPlan}
            />
            <ContinueButton />
          </PlansFormContainer>
          <PlanFeaturesList />
          <DesktopOnly>
            <PlanDisclaimer
              kind={selectedPlan.disclaimer}
              recurringPrice={selectedPlan.recurringPrice}
            />
          </DesktopOnly>
        </PlansContent>
        <FilePreviewCard />
      </HeroSectionsContainer>

      <MobileDisclaimer data-testid="plan-disclaimer-mobile">
        <PlanDisclaimer
          kind={selectedPlan.disclaimer}
          recurringPrice={selectedPlan.recurringPrice}
        />
      </MobileDisclaimer>

      <PricingFeaturesSection />
    </Content>
  );
};
