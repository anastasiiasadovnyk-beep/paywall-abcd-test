import type { FC } from 'react';

import logoPdfLeader from '@/shared/ui/assets/logo-pdfleader.svg';

import { Header, HeaderTitle, Logo, LogoSlot } from './styles';

interface IHeaderTitleSectionProps {
  title: string;
}

/**
 * Checkout header variant with the page title centered next to the logo
 * (used by the group C screen).
 */
export const HeaderTitleSection: FC<IHeaderTitleSectionProps> = ({ title }) => {
  return (
    <Header>
      <LogoSlot>
        <Logo src={logoPdfLeader} alt="PDFLeader logo" />
      </LogoSlot>
      <HeaderTitle>{title}</HeaderTitle>
      <LogoSlot aria-hidden="true" />
    </Header>
  );
};
