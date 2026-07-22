import styled from 'styled-components';

export const PriceChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 760px) {
    gap: 8px;
  }
`;

export const PriceChoiceHeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const PriceChoicePrice = styled.div<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? 'var(--color-primary)' : '#393939')};
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  white-space: nowrap;

  sup {
    font-family: Montserrat;
    position: relative;
    top: 0;
    vertical-align: top;
    line-height: 1;
  }

  @media (max-width: 760px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const MostPopularBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  height: 22px;
  padding: 4px 10px;
  border-radius: var(--radius-2);
  background: var(--color-warning-40, #eba40c);
  color: var(--color-warning-contrast-text, #fff);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;
  flex-shrink: 0;

  svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }
`;

export const PriceChoiceNote = styled.div`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
