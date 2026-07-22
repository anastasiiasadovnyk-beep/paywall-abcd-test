import type { FC } from 'react';

import logoPdfLeader from '@/shared/ui/assets/logo-pdfleader.svg';
import { FlowSteps } from '@/widgets/headerFlowSection';

import { Header, HeaderTitle, Logo, StepsSlot } from './styles';

interface IHeaderTitleSectionProps {
  title: string;
  /** Index of the current checkout step (0 = Add payment details). */
  activeStep?: number;
}

/**
 * Checkout header variant with the page title next to the logo and the
 * checkout steps on the right (used by the group C screen).
 */
export const HeaderTitleSection: FC<IHeaderTitleSectionProps> = ({ title, activeStep = 0 }) => {
  return (
    <Header>
      <Logo src={logoPdfLeader} alt="PDFLeader logo" />
      <HeaderTitle>{title}</HeaderTitle>
      <StepsSlot>
        <FlowSteps activeStep={activeStep} />
      </StepsSlot>
    </Header>
  );
};
