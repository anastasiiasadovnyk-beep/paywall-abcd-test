import styled, { css } from 'styled-components';

import type { TCardButtonStyle, TPaymentMethodsLayout } from './index';

const buttonBase = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  padding: 0 24px;
  border: none;
  border-radius: var(--radius-2);
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const PaymentButtonsContainer = styled.div<{ $layout: TPaymentMethodsLayout }>`
  display: grid;
  grid-template-columns: ${({ $layout }) => ($layout === 'grid' ? '1fr 1fr' : '1fr')};
  gap: ${({ $layout }) => ($layout === 'grid' ? '20px' : '12px')};
  width: 100%;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const PaymentButton = styled.button<{ $brand: 'paypal' | 'gpay' | 'apple-pay' }>`
  ${buttonBase}
  background: ${({ $brand }) => ($brand === 'paypal' ? '#ffc439' : '#000')};
  /* The Apple Pay mark uses currentColor. */
  color: #fff;

  svg,
  img {
    height: 26px;
    width: auto;
  }

  /* Recolor the dark "Pay" lettering of the Google Pay mark for the black button. */
  svg path[fill='#1D1D1D'] {
    fill: #fff;
  }
`;

export const BrandLogo = styled.img`
  height: 26px;
`;

export const CardButton = styled.button<{ $cardStyle: TCardButtonStyle }>`
  ${buttonBase}
  justify-content: space-between;
  gap: 16px;
  background: ${({ $cardStyle }) => ($cardStyle === 'dark' ? '#61656c' : '#fff')};
  color: ${({ $cardStyle }) =>
    $cardStyle === 'dark' ? 'var(--color-common-white, #fff)' : 'var(--Text-text_default, #393939)'};
  border: ${({ $cardStyle }) =>
    $cardStyle === 'dark' ? 'none' : '1px solid var(--color-divider)'};
`;

export const CardLabel = styled.span`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  white-space: nowrap;
`;

export const CardBrandsRow = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardBrandIcon = styled.img`
  height: 22px;
`;
