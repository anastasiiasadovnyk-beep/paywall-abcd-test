import styled from 'styled-components';

export const PlanDisclaimerRoot = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  color: var(--Text-text_secondary, #757575);
  text-align: left;
  width: 100%;
  margin-top: 24px;

  a {
    color: var(--Text-text_primary, var(--color-primary));
    text-decoration: none;
    text-underline-offset: 4px;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 0;
    text-align: center;
  }
`;
