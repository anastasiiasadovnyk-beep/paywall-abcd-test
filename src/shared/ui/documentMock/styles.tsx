import styled from 'styled-components';

export const DocPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: var(--Background-bg_white, #fff);
  border-radius: var(--radius-1);
  padding: 16px 14px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const DocTitleLine = styled.div`
  width: 55%;
  height: 10px;
  border-radius: 999px;
  background: var(--color-primary-filled-100, #c0dfff);
`;

export const DocLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const DocLine = styled.div<{ $width: string }>`
  height: 6px;
  width: ${({ $width }) => $width};
  border-radius: 999px;
  background: var(--color-bg-light-grey, #f5f5f7);
`;
