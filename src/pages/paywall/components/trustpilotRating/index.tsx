import type { FC } from 'react';

import { ReactComponent as TrustpilotStar } from '@/shared/ui/assets/trustpilot-star.svg?react';

import { BrandMark, RatingContainer, ScoreText, StarTile, StarTiles } from './styles';

const MAX_STARS = 5;

interface ITrustpilotRatingProps {
  score?: number;
}

/**
 * Trustpilot rating in the official widget style: green square tiles
 * with white stars (partially filled for fractional scores), the
 * TrustScore value, and the Trustpilot star + wordmark. Typography is
 * the PDFLeader brand font per design guidelines.
 */
export const TrustpilotRating: FC<ITrustpilotRatingProps> = ({ score = 4.8 }) => {
  return (
    <RatingContainer aria-label={`Rated ${score} out of 5 on Trustpilot`}>
      <StarTiles>
        {Array.from({ length: MAX_STARS }, (_, index) => {
          const fill = Math.max(0, Math.min(1, score - index));

          return (
            <StarTile key={index} $fill={fill}>
              <TrustpilotStar />
            </StarTile>
          );
        })}
      </StarTiles>
      <ScoreText>TrustScore {score}</ScoreText>
      <BrandMark>
        <TrustpilotStar />
        Trustpilot
      </BrandMark>
    </RatingContainer>
  );
};
