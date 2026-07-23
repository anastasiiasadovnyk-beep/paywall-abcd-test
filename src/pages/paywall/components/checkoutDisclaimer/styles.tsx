import styled from 'styled-components';

export const DisclaimerRoot = styled.p<{ $align: 'left' | 'center' }>`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: ${({ $align }) => $align};
  margin: 0;

  b {
    color: var(--Text-text_default, #393939);
    font-weight: 700;
  }

  a {
    color: var(--Text-text_default, #393939);
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 2px;

    &:hover {
      color: var(--Text-text_default, #393939);
    }
  }
`;
