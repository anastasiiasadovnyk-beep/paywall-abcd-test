import styled from 'styled-components';

export const PreviewContainer = styled.section`
  display: flex;
  flex: 1;
  height: fit-content;
  max-width: 464px;
  padding: 48px 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  border-radius: var(--radius-4);
  border: 1px dashed var(--Borders-border_primary, var(--color-primary));
  background: var(--Background-bg_white, #fff);

  @media (max-width: 1024px) {
    padding: 24px 44px;
  }

  @media (max-width: 760px) {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 32px 20px;
  }
`;

export const PreviewTitle = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: 760px) {
    font-size: 14px;
    font-weight: 500;
    align-items: center;
  }
`;

export const FileName = styled.span`
  border-bottom: 1px solid var(--Borders-border_grey, var(--color-divider));
  height: 32px;
  white-space: nowrap;
`;

export const PagePreview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  height: 400px;
  width: 288px;
  padding: 36px 28px 28px;
  position: relative;
  background: var(--Background-bg_white, #fff);
  border-radius: var(--radius-2);
  box-shadow: 0 0 12px 0 rgba(var(--color-primary-rgb), 0.16);

  @media (max-width: 760px) {
    max-height: 400px;
    max-width: 288px;
  }
`;

export const FileFormatBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  height: 24px;
  padding: 0 6px;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-1);
  background: var(--color-error-main, #f23030);
  color: var(--color-common-white, #fff);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

export const PageLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const PageLine = styled.div<{ $width: string }>`
  height: 8px;
  width: ${({ $width }) => $width};
  border-radius: var(--radius-1);
  background: var(--color-bg-light-grey, #f5f5f7);
`;

export const Illustration = styled.img`
  width: 148px;
  height: 150px;
  margin: 16px auto;
`;
