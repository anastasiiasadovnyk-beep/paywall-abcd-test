import styled from 'styled-components';

/* PDFLeader's success green (also used by the main app's file preview). */
const PROGRESS_GREEN = '#20c55b';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  padding: 0 40px;
  margin: 16px auto 0;

  @media (max-width: 760px) {
    padding: 0 16px;
    margin-top: 8px;
  }
`;

export const PageTitle = styled.h1`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 800;
  line-height: 50px;
  margin: 0 0 32px;

  @media (max-width: 760px) {
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 20px;
  }
`;

export const CheckoutColumns = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 56px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  max-width: 460px;

  @media (max-width: 760px) {
    width: 100%;
    max-width: none;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1.15;
  min-width: 0;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const FileCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 20px 24px;
  border-radius: var(--radius-3);
  background: var(--color-state-primary-hover, rgba(73, 136, 252, 0.08));
`;

export const FileCardTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    fill: ${PROGRESS_GREEN};
  }
`;

export const FileName = styled.div`
  color: var(--Text-text_primary, var(--color-primary));
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 4px;
`;

export const ProgressTrack = styled.div`
  flex: 1;
  height: 8px;
  border-radius: var(--radius-8);
  background: var(--Background-bg_white, #fff);
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: var(--radius-8);
  background: ${PROGRESS_GREEN};
  transition: width 1.2s ease-out;
`;

export const ProgressPercent = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  flex-shrink: 0;
`;

export const PreviewPanel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px;
  border-radius: var(--radius-3);
  background: linear-gradient(180deg, #d9dce1 0%, #c6cad1 100%);
`;

export const PdfChip = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 10px;
  border-radius: var(--radius-1);
  background: var(--color-error-main, #f23030);
  color: var(--color-common-white, #fff);
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
`;

export const PreviewDocument = styled.div`
  width: 220px;
`;

export const TimelineList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const TimelineIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-1);
  background: var(--color-state-primary-hover, rgba(73, 136, 252, 0.08));
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-primary);
  }
`;

export const TimelineTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TimelineTitle = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
`;

export const TimelineDescription = styled.div`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;

export const TotalDueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

export const TotalDueTitle = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;

export const TotalDuePrice = styled.div`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 26px;
  font-weight: 800;
  line-height: 32px;
`;

export const UnlockTitle = styled.h2`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin: 4px 0 0;
`;

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 20px;
  border-radius: var(--radius-2);
  border: 1px solid var(--color-divider);
  background: var(--Background-bg_white, #fff);
`;

export const FeatureIllustration = styled.img`
  height: 84px;
  margin-bottom: 8px;
`;

export const FeatureTitle = styled.div`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
`;

export const FeatureDescription = styled.div`
  color: var(--Text-text_secondary, #757575);
  text-align: center;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
`;
