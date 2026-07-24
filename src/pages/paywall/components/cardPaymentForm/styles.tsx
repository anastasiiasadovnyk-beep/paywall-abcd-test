import styled from 'styled-components';

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  border-radius: var(--radius-3);
  /* Same card treatment as the download panel above it. */
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 8px 32px 0 rgba(17, 24, 40, 0.08);

  /* Two-column payment grid: float below the card button like a
     dropdown — as wide as the button, above the content underneath. */
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 10;

  /* Single-column payment grid: expand in place and push the content
     below the buttons down. */
  @media (max-width: 760px) {
    position: static;
    width: 100%;
    margin-top: 4px;
    padding: 20px 16px;
    gap: 16px;
  }
`;

/** Expiry date and CVV share one row, as on the reference. */
export const FieldsRow = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;
