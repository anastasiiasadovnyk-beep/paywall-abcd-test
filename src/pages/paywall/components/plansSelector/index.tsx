import type { FC } from 'react';

import type { IPlan } from '@/shared/constants/plans';
import { formatPlanPrice } from '@/shared/lib/price';
import { BorderedCardCheckmark } from '@/shared/ui/borderedCardCheckmark';
import { PriceWithSup } from '@/shared/ui/priceWithSup';

import {
  PlanHeaderRow,
  PlanInfo,
  PlanPeriod,
  PlanPrice,
  PlansContainer,
  PlanTitle,
} from './styles';

interface IPlansSelectorProps {
  plans: IPlan[];
  selectedPlanId: string | null;
  onSelectPlan: (plan: IPlan) => void;
}

/** Vertical list of selectable plan cards (control layout). */
export const PlansSelector: FC<IPlansSelectorProps> = ({
  plans,
  selectedPlanId,
  onSelectPlan,
}) => {
  return (
    <PlansContainer>
      {plans.map((plan) => {
        const isSelected = selectedPlanId === plan.id;

        return (
          <BorderedCardCheckmark
            key={plan.id}
            className="flex-col gap-0.5 items-start pl-[72px] pr-[42px] max-sm:p-6 max-sm:pl-12 max-sm:outline-2"
            isSelected={isSelected}
            data-testid="plan-item"
            onClick={() => onSelectPlan(plan)}
          >
            <PlanHeaderRow>
              <PlanInfo>
                <PlanTitle data-testid="plan-name" $active={isSelected}>
                  {plan.name}
                </PlanTitle>
              </PlanInfo>
              <PlanPrice data-testid="plan-price">
                <PriceWithSup price={formatPlanPrice(plan.displayPrice)} />
              </PlanPrice>
            </PlanHeaderRow>
            <PlanPeriod>{plan.tagline}</PlanPeriod>
          </BorderedCardCheckmark>
        );
      })}
    </PlansContainer>
  );
};
