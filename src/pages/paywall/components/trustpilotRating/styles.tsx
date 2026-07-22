import styled from 'styled-components';

/* Official Trustpilot widget palette. */
const TRUSTPILOT_GREEN = '#00b67a';
const TRUSTPILOT_GREY = '#dcdce6';
const TRUSTPILOT_BLACK = '#191919';

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StarTiles = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const StarTile = styled.div<{ $fill: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: ${({ $fill }) => {
    if ($fill >= 1) return TRUSTPILOT_GREEN;
    if ($fill <= 0) return TRUSTPILOT_GREY;

    return `linear-gradient(90deg, ${TRUSTPILOT_GREEN} ${$fill * 100}%, ${TRUSTPILOT_GREY} ${
      $fill * 100
    }%)`;
  }};

  svg {
    width: 17px;
    height: 17px;
    fill: #fff;
    flex-shrink: 0;
  }

  @media (max-width: 760px) {
    width: 18px;
    height: 18px;

    svg {
      width: 13px;
      height: 13px;
    }
  }
`;

export const ScoreText = styled.span`
  color: ${TRUSTPILOT_BLACK};
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  white-space: nowrap;

  @media (max-width: 760px) {
    font-size: 13px;
    line-height: 18px;
  }
`;

export const BrandMark = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: ${TRUSTPILOT_BLACK};
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 800;
  line-height: 22px;
  white-space: nowrap;

  svg {
    width: 20px;
    height: 20px;
    fill: ${TRUSTPILOT_GREEN};
    flex-shrink: 0;
  }

  @media (max-width: 760px) {
    font-size: 13px;
    line-height: 18px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
