import type { FC } from 'react';

import type { IPriceChoice } from '@/shared/constants/plans';
import { formatPlanPrice } from '@/shared/lib/price';
import { BorderedCardCheckmark } from '@/shared/ui/borderedCardCheckmark';
import { PriceWithSup } from '@/shared/ui/priceWithSup';
import { FireIcon } from '@/shared/ui/icons';

import {
  MostPopularBadge,
  PriceChoiceHeaderRow,
  PriceChoiceNote,
  PriceChoicePrice,
  PriceChoicesContainer,
} from './styles';

interface IPriceChoiceSelectorProps {
  choices: IPriceChoice[];
  selectedChoiceId: string | null;
  onSelectChoice: (choice: IPriceChoice) => void;
}

/**
 * Group D — the visitor picks how much the 7-day trial costs.
 * Every option unlocks exactly the same access.
 */
export const PriceChoiceSelector: FC<IPriceChoiceSelectorProps> = ({
  choices,
  selectedChoiceId,
  onSelectChoice,
}) => {
  return (
    <PriceChoicesContainer>
      {choices.map((choice) => {
        const isSelected = selectedChoiceId === choice.id;

        return (
          <BorderedCardCheckmark
            key={choice.id}
            className="flex-col gap-0.5 items-start pl-[72px] pr-[42px] max-sm:p-6 max-sm:pl-12 max-sm:outline-2"
            isSelected={isSelected}
            data-testid="price-choice-item"
            onClick={() => onSelectChoice(choice)}
          >
            <PriceChoiceHeaderRow>
              <PriceChoicePrice data-testid="price-choice-value" $active={isSelected}>
                <PriceWithSup price={formatPlanPrice(choice.trialPrice)} />
              </PriceChoicePrice>
              {choice.isMostPopular && (
                <MostPopularBadge>
                  <FireIcon />
                  Most popular
                </MostPopularBadge>
              )}
            </PriceChoiceHeaderRow>
            <PriceChoiceNote>{choice.note}</PriceChoiceNote>
          </BorderedCardCheckmark>
        );
      })}
    </PriceChoicesContainer>
  );
};
