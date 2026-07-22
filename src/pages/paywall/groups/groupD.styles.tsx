import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 760px;
  padding: 0 40px;
  margin: 40px auto 0;
  gap: 32px;

  @media (max-width: 760px) {
    padding: 0 16px;
    margin-top: 20px;
    gap: 20px;
  }
`;

export const Title = styled.h1`
  color: var(--Text-text_default, #393939);
  text-align: center;
  font-family: Montserrat;
  font-size: 44px;
  font-weight: 900;
  line-height: 54px;
  margin: 0;

  @media (max-width: 760px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const ChoiceCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 32px;
  border-radius: var(--radius-3);
  background: var(--Background-bg_white, #fff);
  box-shadow: 0 8px 32px 0 rgba(17, 24, 40, 0.08);

  @media (max-width: 760px) {
    padding: 20px 16px;
    gap: 20px;
  }
`;

export const IntroPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  border-radius: var(--radius-2);
  background: var(--color-bg-light-grey, #f5f5f7);
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  p {
    margin: 0;
  }

  b {
    font-weight: 700;
  }

  @media (max-width: 760px) {
    padding: 16px;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const SectionHeading = styled.h2`
  color: var(--Text-text_default, #393939);
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin: 0;
`;

export const PriceBoxesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PriceBox = styled.button<{ $selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-radius: var(--radius-2);
  border: 2px solid
    ${({ $selected }) => ($selected ? 'var(--color-primary)' : 'var(--color-divider)')};
  background: ${({ $selected }) =>
    $selected ? 'var(--color-state-primary-hover, rgba(73, 136, 252, 0.08))' : '#fff'};
  color: ${({ $selected }) =>
    $selected ? 'var(--color-primary)' : 'var(--Text-text_default, #393939)'};
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    border-color: var(--color-primary);
  }
`;

export const SupporterNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  align-self: flex-end;
  max-width: 420px;
  color: var(--Text-text_secondary, #757575);
  text-align: right;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  margin-top: -12px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    fill: var(--Text-text_secondary, #757575);
  }
`;

export const Footnote = styled.div`
  color: var(--Text-text_secondary, #757575);
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;
