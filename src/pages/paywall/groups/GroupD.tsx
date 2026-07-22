import { type FC, useState } from 'react';

import { PRICE_CHOICES } from '@/shared/constants/checkout';
import { NorthEastIcon } from '@/shared/ui/icons';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { ContinueButton } from '../components/continueButton';
import {
  ChoiceCard,
  Content,
  Footnote,
  IntroPanel,
  PriceBox,
  PriceBoxesGrid,
  SectionHeading,
  SupporterNote,
  Title,
} from './groupD.styles';

/**
 * Group D — "choose your price": the visitor picks what the 7-day trial
 * costs; every option unlocks the same full access.
 */
export const GroupD: FC = () => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);

  return (
    <>
      <HeaderFlowSection />
      <Content>
        <Title>Choose a price for your 7-day trial</Title>

        <ChoiceCard>
          <IntroPanel>
            <p>Money shouldn’t stand in the way of getting your file done.</p>
            <p>
              <b>It costs us approximately $10* to offer a 7-day trial.</b> Please pick an amount
              that’s reasonable for you.
            </p>
          </IntroPanel>

          <SectionHeading>Pick your trial price — the access is the same</SectionHeading>

          <PriceBoxesGrid>
            {PRICE_CHOICES.map((choice) => (
              <PriceBox
                key={choice.id}
                type="button"
                $selected={selectedChoiceId === choice.id}
                data-testid="price-choice"
                onClick={() => setSelectedChoiceId(choice.id)}
              >
                {choice.label}
              </PriceBox>
            ))}
          </PriceBoxesGrid>

          <SupporterNote>
            This option will help us support those who need to select the lowest trial prices!
            <NorthEastIcon />
          </SupporterNote>

          <ContinueButton disabled={!selectedChoiceId} />

          <Footnote>*Cost of trial as of July 2026</Footnote>
        </ChoiceCard>
      </Content>
    </>
  );
};
