import styled from 'styled-components';

export const FeaturesSection = styled.section`
  width: 100%;
  margin-top: 100px;

  @media (max-width: 760px) {
    margin-top: 32px;
  }
`;

export const FeaturesSectionTitle = styled.h2`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 62px;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 24px;
  margin-top: 60px;
  width: 100%;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 228px;
  border-radius: var(--radius-4);
  border: 2px solid var(--Borders-border_grey, var(--color-divider));
  background: var(--Background-bg_white, #fff);

  @media (max-width: 760px) {
    height: 142px;
    padding: 5px;
  }
`;

export const FeatureIcon = styled.div`
  margin-bottom: 16px;

  svg {
    width: 60px;
    height: 60px;
    fill: var(--color-primary);
  }

  @media (max-width: 760px) {
    margin-bottom: 12px;

    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const FeatureTitle = styled.div`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 4px;

  @media (max-width: 760px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const FeatureDescription = styled.div`
  color: var(--Text-text_secondary, #757575);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  @media (max-width: 760px) {
    font-size: 12px;
    line-height: 16px;
  }
`;
