import type { FC } from 'react';

import { ReactComponent as TrustpilotStar } from '@/shared/ui/assets/trustpilot-star.svg?react';

import { BrandMark, ExcellentText, RatingContainer, ScoreText } from './styles';

interface ITrustpilotRatingProps {
  score?: number;
}

/**
 * Trustpilot rating in the official micro-widget layout: the rating
 * word, the score out of 5, and the Trustpilot star + wordmark.
 * Typography is the PDFLeader brand font per design guidelines.
 */
export const TrustpilotRating: FC<ITrustpilotRatingProps> = ({ score = 4.8 }) => {
  return (
    <RatingContainer aria-label={`Rated Excellent, ${score} out of 5 on Trustpilot`}>
      <ExcellentText>Excellent</ExcellentText>
      <ScoreText>
        <b>{score}</b> out of 5
      </ScoreText>
      <BrandMark>
        <TrustpilotStar />
        Trustpilot
      </BrandMark>
    </RatingContainer>
  );
};
