import { type FC, useState } from 'react';

import {
  CHECKOUT_FILE,
  PRICE_CHOICES,
  TRIAL_INCLUDES,
} from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import { Divider } from '@/shared/ui/divider';
import { DocumentMock } from '@/shared/ui/documentMock';
import { CheckIcon, NorthEastIcon } from '@/shared/ui/icons';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { CheckoutDisclaimer } from '../components/checkoutDisclaimer';
import { PaymentMethods } from '../components/paymentMethods';
import { SecuredPaymentNote } from '../components/securedPaymentNote';
import { TrustBadges } from '../components/trustBadges';
import {
  Content,
  FileName,
  FilePdfSuffix,
  FileReadyCard,
  FileReadyInfo,
  FileReadyThumbnail,
  FileReadyTitle,
  IncludesItem,
  IncludesList,
  IncludesTitle,
  IncludesTotalRow,
  PaymentCard,
  PaymentColumn,
  SideColumn,
} from './groupA.styles';
import {
  ChoiceColumns,
  Footnote,
  PaymentSection,
  PlainIncludesCard,
  PriceBox,
  PriceBoxesGrid,
  PriceSection,
  SupporterNote,
  Title,
} from './groupD.styles';

/**
 * Group D — "choose your price" combined with the group A checkout
 * layout: the price picker sits above the payment methods in the
 * payment card; paying is unlocked once a price is chosen, and the
 * totals update live with the selection.
 */
export const GroupD: FC = () => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const selectedChoice = PRICE_CHOICES.find((choice) => choice.id === selectedChoiceId) ?? null;

  return (
    <>
      <HeaderFlowSection />
      <Content>
        <Title>Choose a price for your 7-day trial</Title>

        <ChoiceColumns>
          <PaymentColumn>
            <PaymentCard>
              <PriceSection>
                <PriceBoxesGrid>
                  {PRICE_CHOICES.map((choice) => (
                    <PriceBox
                      key={choice.id}
                      type="button"
                      aria-pressed={selectedChoiceId === choice.id}
                      $selected={selectedChoiceId === choice.id}
                      data-testid="price-choice"
                      onClick={() => setSelectedChoiceId(choice.id)}
                    >
                      {choice.label}
                    </PriceBox>
                  ))}
                </PriceBoxesGrid>
                <SupporterNote>
                  This option will help us support those who need to select the lowest trial
                  prices!
                  <NorthEastIcon />
                </SupporterNote>
                <Footnote>*Cost of trial as of July 2026</Footnote>
              </PriceSection>

              <PaymentSection $locked={!selectedChoice} aria-disabled={!selectedChoice}>
                <PaymentMethods layout="stacked" cardStyle="dark" />
              </PaymentSection>

              <CheckoutDisclaimer variant="full" align="justify" />
              <TrustBadges badges={['cancel-anytime', 'support', 'users']} />
            </PaymentCard>
            <SecuredPaymentNote />
          </PaymentColumn>

          <SideColumn>
            <FileReadyCard data-testid="file-ready-card">
              <FileReadyInfo>
                <FileReadyTitle>Your file is ready!</FileReadyTitle>
                <FileName>
                  {CHECKOUT_FILE.longFileName.replace('.pdf', '')}
                  <FilePdfSuffix>pdf</FilePdfSuffix>
                </FileName>
              </FileReadyInfo>
              <FileReadyThumbnail>
                <DocumentMock />
              </FileReadyThumbnail>
            </FileReadyCard>

            <PlainIncludesCard data-testid="trial-includes-card">
              <IncludesTitle>Your 7-day trial includes:</IncludesTitle>
              <IncludesList>
                {TRIAL_INCLUDES.map((item) => (
                  <IncludesItem key={item.text} $bold={item.isBold}>
                    <CheckIcon />
                    {item.text}
                  </IncludesItem>
                ))}
              </IncludesList>
              <Divider />
              <IncludesTotalRow>
                <span>Total due today:</span>
                <b data-testid="includes-total-price">
                  {selectedChoice ? formatPlanPrice(selectedChoice.cents) : '—'}
                </b>
              </IncludesTotalRow>
            </PlainIncludesCard>
          </SideColumn>
        </ChoiceColumns>
      </Content>
    </>
  );
};
