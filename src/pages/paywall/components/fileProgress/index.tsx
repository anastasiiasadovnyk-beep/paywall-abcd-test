import { type FC, useEffect, useState } from 'react';

import pdfFileReady from '@/shared/ui/assets/pdf-file-ready.svg';

import {
  BigProgressBanner,
  BigProgressCaption,
  BigProgressContent,
  BigProgressIllustration,
  BigProgressTitle,
  ProgressBarRow,
  ProgressFill,
  ProgressPercent,
  ProgressTrack,
  SmallProgressContainer,
  SmallProgressLabel,
  SmallProgressLabelRow,
  SmallProgressPercent,
} from './styles';

/** Fill width animates from 0 on mount so the bar draws attention. */
const useAnimatedPercent = (percent: number): number => {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimatedPercent(percent));

    return () => cancelAnimationFrame(frame);
  }, [percent]);

  return animatedPercent;
};

interface IFileProgressProps {
  percent?: number;
}

/**
 * Group B — prominent full-width banner with a large progress bar,
 * shown between the funnel header and the plans.
 */
export const BigFileProgress: FC<IFileProgressProps> = ({ percent = 90 }) => {
  const animatedPercent = useAnimatedPercent(percent);

  return (
    <BigProgressBanner data-testid="file-progress-big">
      <BigProgressIllustration src={pdfFileReady} alt="" role="presentation" />
      <BigProgressContent>
        <BigProgressTitle>Your file is almost ready!</BigProgressTitle>
        <ProgressBarRow>
          <ProgressTrack $size="big">
            <ProgressFill $size="big" style={{ width: `${animatedPercent}%` }} />
          </ProgressTrack>
          <ProgressPercent>{percent}%</ProgressPercent>
        </ProgressBarRow>
        <BigProgressCaption>
          Pick a plan and continue to download Document.pdf
        </BigProgressCaption>
      </BigProgressContent>
    </BigProgressBanner>
  );
};

/**
 * Group C — compact progress strip shown right above the page title.
 */
export const SmallFileProgress: FC<IFileProgressProps> = ({ percent = 90 }) => {
  const animatedPercent = useAnimatedPercent(percent);

  return (
    <SmallProgressContainer data-testid="file-progress-small">
      <SmallProgressLabelRow>
        <SmallProgressLabel>Your file is almost ready</SmallProgressLabel>
        <SmallProgressPercent>{percent}%</SmallProgressPercent>
      </SmallProgressLabelRow>
      <ProgressTrack $size="small">
        <ProgressFill $size="small" style={{ width: `${animatedPercent}%` }} />
      </ProgressTrack>
    </SmallProgressContainer>
  );
};
