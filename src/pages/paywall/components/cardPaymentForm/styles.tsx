import styled from 'styled-components';

export const FormRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 32px;
  border-radius: var(--radius-3);
  /* Same card treatment as the download panel above it. */
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 8px 32px 0 rgba(17, 24, 40, 0.08);

  @media (max-width: 760px) {
    padding: 20px 16px;
    gap: 16px;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 800;
  line-height: 32px;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const BrandsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BrandIcon = styled.img`
  height: 26px;

  @media (max-width: 760px) {
    height: 22px;
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
