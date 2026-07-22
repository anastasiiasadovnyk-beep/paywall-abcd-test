import styled from 'styled-components';

export const PlansContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 760px) {
    gap: 8px;
  }
`;

export const PlanHeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`;

export const PlanTitle = styled.div<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? 'var(--color-primary)' : '#393939')};
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;

  @media (max-width: 760px) {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
  }
`;

export const PlanPrice = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  margin-left: auto;
  white-space: nowrap;
  flex-shrink: 0;

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

export const PlanPeriod = styled.div`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;
