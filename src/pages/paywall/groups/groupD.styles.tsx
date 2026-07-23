import styled from 'styled-components';

import { IncludesCard } from './groupA.styles';

/** Group D shows the trial summary flat on the page, without card chrome. */
export const PlainIncludesCard = styled(IncludesCard)`
  background: transparent;
  box-shadow: none;
  padding: 0;
`;

/** Card heading above the price selection — design system title-4. */
export const Title = styled.h1`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: var(--text-desktop-title-4-size);
  font-weight: var(--text-desktop-title-4--font-weight);
  line-height: var(--text-desktop-title-4--line-height);
  margin: 0;

  @media (max-width: 760px) {
    font-size: var(--text-mobile-title-4-size);
    font-weight: var(--text-mobile-title-4--font-weight);
    line-height: var(--text-mobile-title-4--line-height);
  }
`;

/** Group A checkout columns, but the price picker stays first on mobile. */
export const ChoiceColumns = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 64px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 24px;
  }
`;

/** Sizing context so the price grid responds to the card's own width. */
export const PriceSection = styled.div`
  width: 100%;
  container-type: inline-size;
`;

/**
 * Always evenly sized buttons: four across while each stays at least
 * 112px wide (4 × 112px + 3 × 12px gaps = 484px), otherwise 2×2, and a
 * single column on the narrowest cards.
 */
export const PriceBoxesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  width: 100%;

  @container (max-width: 483px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @container (max-width: 235px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PriceBox = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: var(--radius-2);
  border: 2px solid
    ${({ $selected }) => ($selected ? 'var(--color-primary)' : 'var(--color-divider)')};
  background: ${({ $selected }) =>
    $selected ? 'var(--color-state-primary-hover, rgba(73, 136, 252, 0.08))' : '#fff'};
  color: ${({ $selected }) =>
    $selected ? 'var(--color-primary)' : 'var(--Text-text_default, #393939)'};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    border-color: var(--color-primary);
  }
`;

/** Payment methods stay visually locked until a trial price is chosen. */
export const PaymentSection = styled.div<{ $locked: boolean }>`
  width: 100%;
  opacity: ${({ $locked }) => ($locked ? 0.45 : 1)};
  pointer-events: ${({ $locked }) => ($locked ? 'none' : 'auto')};
  transition: opacity 0.2s ease;
`;
