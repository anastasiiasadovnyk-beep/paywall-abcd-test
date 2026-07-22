import type { FC } from 'react';

import logoPdfLeader from '@/shared/ui/assets/logo-pdfleader.svg';
import { CheckIcon } from '@/shared/ui/icons';

import {
  Header,
  HeaderStep,
  HeaderStepDivider,
  HeaderStepNumber,
  HeaderSteps,
  HeaderStepTitle,
  Logo,
  MobileHeader,
  MobileLogo,
} from './styles';

const FLOW_STEPS = ['Choose a plan', 'Add payment details', 'Download'];

type TStepStatus = 'active' | 'completed' | 'inactive';

const getStepStatus = (activeStep: number, index: number): TStepStatus => {
  if (activeStep === index) return 'active';
  if (activeStep > index) return 'completed';

  return 'inactive';
};

interface IHeaderFlowSectionProps {
  activeStep?: number;
}

/**
 * Funnel header: PDFLeader logo on the left, numbered checkout steps on
 * the right. Mirrors the headerFlowSection widget of the main app.
 */
export const HeaderFlowSection: FC<IHeaderFlowSectionProps> = ({ activeStep = 0 }) => {
  return (
    <>
      <MobileHeader>
        <MobileLogo src={logoPdfLeader} alt="PDFLeader logo" />
      </MobileHeader>
      <Header>
        <Logo src={logoPdfLeader} alt="PDFLeader logo" width={215} height={48} />
        <HeaderSteps>
          {FLOW_STEPS.map((title, index) => {
            const status = getStepStatus(activeStep, index);

            return (
              <HeaderStep key={title}>
                <HeaderStepNumber $status={status}>
                  {status === 'completed' ? <CheckIcon /> : index + 1}
                </HeaderStepNumber>
                <HeaderStepTitle $status={status}>{title}</HeaderStepTitle>
                {index < FLOW_STEPS.length - 1 && <HeaderStepDivider $status={status} />}
              </HeaderStep>
            );
          })}
        </HeaderSteps>
      </Header>
    </>
  );
};
