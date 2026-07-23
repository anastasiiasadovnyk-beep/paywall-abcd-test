import styled from 'styled-components';

/* Official Trustpilot widget text color. */
const TRUSTPILOT_BLACK = '#191919';

export const RatingContainer = styled.div`
  display: flex;
  align-items: baseline;
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

/**
 * Official Trustpilot logo. The row aligns items by baseline (an image's
 * baseline is its bottom edge); the negative margin drops the logo so the
 * wordmark's own baseline — ~3px above the image bottom because of the
 * "p" descender — lands on the text baseline.
 */
export const TrustpilotLogo = styled.img`
  height: 24px;
  width: auto;
  flex-shrink: 0;
  margin-bottom: -3px;

  @media (max-width: 760px) {
    height: 18px;
    margin-bottom: -2px;
  }
`;
