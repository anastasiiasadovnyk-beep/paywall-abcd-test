import styled from 'styled-components';

export const ProgressTrack = styled.div<{ $size: 'big' | 'small' }>`
  width: 100%;
  height: ${({ $size }) => ($size === 'big' ? '20px' : '8px')};
  border-radius: var(--radius-8);
  background: var(--color-state-primary-hover, rgba(73, 136, 252, 0.08));
  overflow: hidden;

  @media (max-width: 760px) {
    height: ${({ $size }) => ($size === 'big' ? '16px' : '8px')};
  }
`;

export const ProgressFill = styled.div<{ $size: 'big' | 'small' }>`
  height: 100%;
  border-radius: var(--radius-8);
  background: linear-gradient(
    90deg,
    var(--color-primary) 0%,
    var(--color-primary-light) 100%
  );
  transition: width 1.2s ease-out;
`;

export const ProgressBarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  ${ProgressTrack} {
    flex: 1;
  }
`;

export const ProgressPercent = styled.div`
  color: var(--Text-text_primary, var(--color-primary));
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  flex-shrink: 0;

  @media (max-width: 760px) {
    font-size: 20px;
    line-height: 26px;
  }
`;

export const BigProgressBanner = styled.section`
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 24px 32px;
  margin-bottom: 24px;
  border-radius: var(--radius-4);
  border: 2px solid var(--Borders-border_grey, var(--color-divider));
  background: var(--Background-bg_white, #fff);

  @media (max-width: 760px) {
    gap: 16px;
    padding: 16px;
    margin-bottom: 8px;
  }
`;

export const BigProgressIllustration = styled.img`
  width: 132px;
  height: 124px;
  flex-shrink: 0;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const BigProgressContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  min-width: 0;
`;

export const BigProgressTitle = styled.h2`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const BigProgressCaption = styled.div`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const SmallProgressContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 16px;

  @media (max-width: 760px) {
    margin-bottom: 8px;
  }
`;

export const SmallProgressLabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
`;

export const SmallProgressLabel = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export const SmallProgressPercent = styled.div`
  color: var(--Text-text_primary, var(--color-primary));
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`;
