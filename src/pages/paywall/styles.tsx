import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  min-height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 112px;
  max-width: 1440px;
  margin-top: 32px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  @media (max-width: 760px) {
    padding: 0 16px;
    margin-top: 16px;
  }
`;

export const Title = styled.h1`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 56px;
  font-style: normal;
  font-weight: 900;
  line-height: 68px;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const Subtitle = styled.p`
  color: var(--Text-text_secondary, #757575);
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  max-width: 720px;
  margin: 16px 0 0;

  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 8px;
  }
`;

export const HeroSectionsContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
  margin-top: 60px;

  @media (max-width: 760px) {
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const PlansContent = styled.div`
  display: flex;
  width: 57%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const PlansFormContainer = styled.div`
  width: 100%;
`;

export const DesktopOnly = styled.div`
  width: 100%;

  @media (max-width: 760px) {
    display: none;
  }
`;

export const MobileDisclaimer = styled.div`
  width: 100%;
  margin-top: 24px;

  @media (min-width: 760px) {
    display: none;
  }
`;
