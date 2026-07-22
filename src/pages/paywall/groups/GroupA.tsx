import { type FC, useState } from 'react';

import { PLANS, type IPlan } from '@/shared/constants/plans';
import { FilePreviewCard } from '@/widgets/filePreviewCard';
import { PricingFeaturesSection } from '@/widgets/pricingFeaturesSection';

import { ContinueButton } from '../components/continueButton';
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

/** Group A — default control screen (mirrors the live pricing page). */
export const GroupA: FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<IPlan>(PLANS[0]);

  return (
    <Content>
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
