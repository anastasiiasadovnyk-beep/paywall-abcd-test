import styled from 'styled-components';

export const PlansFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  margin-top: 24px;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;
  }
`;

export const PlanFeature = styled.div`
  display: grid;
  column-gap: 8px;
  grid-template-columns: 24px 1fr;
  align-items: center;
`;

export const PlanFeatureIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    fill: var(--color-primary);
  }
`;

export const PlanFeatureTitle = styled.div`
  color: #393939;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 760px) {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
  }
`;

export const PlanFeatureDescription = styled.div`
  color: #757575;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  grid-column: 2;
  font-size: 16px;
  line-height: 22px;

  @media (max-width: 760px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
