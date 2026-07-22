import type { FC } from 'react';

import { EPaywallGroup, usePaywallGroup } from '@/shared/abTest';
import { FooterSection } from '@/widgets/footerSection';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { GroupSwitcher } from './components/groupSwitcher';
import { GroupA } from './groups/GroupA';
import { GroupB } from './groups/GroupB';
import { GroupC } from './groups/GroupC';
import { GroupD } from './groups/GroupD';
import { PageContainer } from './styles';

const GROUP_COMPONENTS: Record<EPaywallGroup, FC> = {
  [EPaywallGroup.A]: GroupA,
  [EPaywallGroup.B]: GroupB,
  [EPaywallGroup.C]: GroupC,
  [EPaywallGroup.D]: GroupD,
};

/**
 * Paywall (select plan) screen. The rendered layout depends on the
 * visitor's A/B/C/D experiment group — see src/shared/abTest.
 */
const PaywallPage: FC = () => {
  const group = usePaywallGroup();
  const GroupScreen = GROUP_COMPONENTS[group];

  return (
    <PageContainer>
      <HeaderFlowSection activeStep={0} />
      <GroupScreen />
      <FooterSection />
      {import.meta.env.DEV && <GroupSwitcher activeGroup={group} />}
    </PageContainer>
  );
};

export default PaywallPage;
