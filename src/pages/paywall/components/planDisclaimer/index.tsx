import type { FC } from 'react';

import { PAGE_LINKS } from '@/shared/constants/pageLinks';
import type { TDisclaimerKind } from '@/shared/constants/plans';
import { formatPlanPrice } from '@/shared/lib/price';

import { PlanDisclaimerRoot } from './styles';

interface IPlanDisclaimerProps {
  kind: TDisclaimerKind;
  recurringPrice: number;
}

/**
 * Legal descriptor under the plans. Copy mirrors the production
 * `pricing_page.plans_list.disclaimer_organic` strings.
 */
export const PlanDisclaimer: FC<IPlanDisclaimerProps> = ({ kind, recurringPrice }) => {
  const price = formatPlanPrice(recurringPrice);

  const subscriptionTermsLink = (
    <a data-testid="select-plan-subscription-terms-link" href={PAGE_LINKS.SUBSCRIPTION_TERMS}>
      Subscription Terms
    </a>
  );
  const refundPolicyLink = (
    <a data-testid="select-plan-refund-policy-link" href={PAGE_LINKS.REFUND_POLICY}>
      Refund Policy
    </a>
  );

  return (
    <PlanDisclaimerRoot data-testid="plan-description">
      {kind === 'trial' ? (
        <>
          After 7 days, you will be charged {price}/4 weeks unless you cancel 24 hours before the
          trial ends. See our {subscriptionTermsLink} for details on cancellation and refunds. We
          provide refunds in accordance with our {refundPolicyLink}.
        </>
      ) : (
        <>
          You will be charged {price} upon purchase and automatically billed {price} every month
          unless you cancel at least 24 hours before the end of the current billing period. See our{' '}
          {subscriptionTermsLink} for details on cancellation and refunds. We provide refunds in
          accordance with our {refundPolicyLink}.
        </>
      )}
    </PlanDisclaimerRoot>
  );
};
