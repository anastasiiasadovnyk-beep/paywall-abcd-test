import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  width: 100%;
  aspect-ratio: 1 / 1.414;
  padding: 8% 9%;
  background: var(--Background-bg_white, #fff);
  border-radius: var(--radius-1) var(--radius-1) 0 0;
  box-shadow: 0 0 20px 0 rgba(17, 24, 40, 0.18);
  overflow: hidden;
`;

export const DocLogosRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6%;
  margin-bottom: 4px;
`;

export const DocLogo = styled.div<{ $tone: 'grey' | 'blue' | 'navy' | 'gold' }>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  opacity: 0.55;
  background: ${({ $tone }) => {
    switch ($tone) {
      case 'blue':
        return 'var(--color-primary-filled-300, #70b7ff)';
      case 'navy':
        return 'var(--color-primary-filled-900, #4042b4)';
      case 'gold':
        return '#eba40c';
      default:
        return '#9aa1ad';
    }
  }};
`;

export const DocTitle = styled.div`
  color: var(--color-primary);
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  line-height: 17px;
`;

export const DocMeta = styled.div`
  color: #8a8f98;
  font-family: Montserrat;
  font-size: 6.5px;
  font-style: italic;
  font-weight: 500;
  line-height: 9px;
`;

export const DocParagraph = styled.p`
  color: #3f4551;
  font-family: Montserrat;
  font-size: 6.5px;
  font-weight: 400;
  line-height: 9.5px;
  text-align: justify;
  margin: 0;

  b {
    font-weight: 700;
  }
`;

export const DocLink = styled.div`
  color: var(--color-primary);
  font-family: Montserrat;
  font-size: 6.5px;
  font-weight: 600;
  line-height: 9.5px;
  text-decoration: underline;
  text-underline-offset: 1px;
`;

export const DocSectionTitle = styled.div`
  color: var(--color-primary);
  font-family: Montserrat;
  font-size: 7px;
  font-weight: 700;
  line-height: 10px;
`;

export const DocHeading = styled.div`
  color: #3f4551;
  font-family: Montserrat;
  font-size: 7px;
  font-weight: 700;
  line-height: 10px;
  text-transform: uppercase;
  margin-top: 3px;
`;

export const DocBulletList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding-left: 12px;
`;

export const DocBullet = styled.li`
  color: #3f4551;
  font-family: Montserrat;
  font-size: 6.5px;
  font-weight: 400;
  line-height: 9.5px;
  text-align: justify;
`;
