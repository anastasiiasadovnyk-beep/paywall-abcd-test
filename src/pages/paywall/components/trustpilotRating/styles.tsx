import styled from 'styled-components';

/* Official Trustpilot widget palette. */
const TRUSTPILOT_GREEN = '#00b67a';
const TRUSTPILOT_BLACK = '#191919';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ExcellentText = styled.span`
  color: ${TRUSTPILOT_BLACK};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  white-space: nowrap;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ScoreText = styled.span`
  color: ${TRUSTPILOT_BLACK};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap;

  b {
    font-weight: 600;
  }

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${TRUSTPILOT_BLACK};
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;

  svg {
    width: 22px;
    height: 22px;
    fill: ${TRUSTPILOT_GREEN};
    flex-shrink: 0;
  }

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;
