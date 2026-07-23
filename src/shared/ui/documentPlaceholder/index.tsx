import styled from 'styled-components';

/**
 * Plain A4-proportioned placeholder for the visitor's document (the
 * production funnel renders the real file preview here). The parent
 * container controls the width.
 */
export const DocumentPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1.414;
  background: var(--Background-bg_white, #fff);
  border-radius: var(--radius-2);
  box-shadow: 0 4px 32px 0 rgba(17, 24, 40, 0.12);
`;
