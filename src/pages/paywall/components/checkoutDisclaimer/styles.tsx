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
    font-weight: 700;
  }

  /* Links match the surrounding secondary text; only the underline
     sets them apart. */
  a {
    color: inherit;
    font-weight: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;
