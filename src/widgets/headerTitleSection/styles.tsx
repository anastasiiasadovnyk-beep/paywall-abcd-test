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

export const LogoSlot = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 760px) {
    flex: none;
    justify-content: center;

    &:last-child {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  height: 36px;

  @media (max-width: 760px) {
    height: 28px;
  }
`;

export const HeaderTitle = styled.h1`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px;
  margin: 0;
  white-space: nowrap;

  @media (max-width: 760px) {
    font-size: 16px;
    line-height: 22px;
    white-space: normal;
  }
`;
