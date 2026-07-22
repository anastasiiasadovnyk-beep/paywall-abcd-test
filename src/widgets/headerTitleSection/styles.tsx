import styled from 'styled-components';

export const Header = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 40px;
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 1px 0 0 var(--color-divider);

  @media (max-width: 760px) {
    flex-direction: column;
    gap: 8px;
    padding: 12px 16px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  flex-shrink: 0;

  @media (max-width: 760px) {
    height: 28px;
  }
`;

export const HeaderTitle = styled.h1`
  flex: 1;
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 1240px) {
    font-size: 22px;
    line-height: 28px;
  }

  @media (max-width: 760px) {
    font-size: 16px;
    line-height: 22px;
    white-space: normal;
  }
`;

export const StepsSlot = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    display: none;
  }
`;
