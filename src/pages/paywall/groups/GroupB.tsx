import type { FC } from 'react';

import { CHECKOUT, CHECKOUT_FILE } from '@/shared/constants/checkout';
import { formatPlanPrice } from '@/shared/lib/price';
import { DocumentMock } from '@/shared/ui/documentMock';
import { HeaderFlowSection } from '@/widgets/headerFlowSection';

import { CheckoutDisclaimer } from '../components/checkoutDisclaimer';
import { PaymentMethods } from '../components/paymentMethods';
import { SecuredPaymentNote } from '../components/securedPaymentNote';
import { TrustpilotRating } from '../components/trustpilotRating';
import {
  Content,
  DisclaimerContainer,
  DownloadPanel,
  FileDetails,
  FileMeta,
  FileNameRow,
  FileRow,
  FileThumbnail,
  PdfChip,
  ProgressBarRow,
  ProgressFill,
  ProgressPercent,
  ProgressTrack,
  Subtitle,
  Title,
  TotalDuePrice,
  TotalDueRow,
  TotalDueTitle,
  TrialCaption,
  TrustDivider,
  TrustItem,
  TrustRow,
} from './groupB.styles';

/** Group B — checkout with a big download-progress panel. */
export const GroupB: FC = () => {
  const trialPrice = formatPlanPrice(CHECKOUT.trialPriceCents);
  const recurringPrice = formatPlanPrice(CHECKOUT.recurringPriceCents);

  return (
    <>
      <HeaderFlowSection />
      <Content>
        <Title>Your download is almost complete</Title>
        <Subtitle>It starts the moment your payment goes through.</Subtitle>

        <DownloadPanel data-testid="download-panel">
          <FileRow>
            <FileThumbnail>
              <DocumentMock />
            </FileThumbnail>
            <FileDetails>
              <FileNameRow>
                <PdfChip>PDF</PdfChip>
                {CHECKOUT_FILE.longFileName}
              </FileNameRow>
              <FileMeta>{CHECKOUT_FILE.sizeLabel} · converted &amp; ready</FileMeta>
            </FileDetails>
          </FileRow>
          <ProgressBarRow>
            <ProgressTrack>
              <ProgressFill style={{ width: `${CHECKOUT_FILE.progressPercentB}%` }} />
            </ProgressTrack>
            <ProgressPercent>{CHECKOUT_FILE.progressPercentB}%</ProgressPercent>
          </ProgressBarRow>
          <TrustRow>
            <TrustpilotRating score={4.8} />
            <TrustDivider />
            <TrustItem>10+ million users</TrustItem>
            <TrustDivider />
            <TrustItem>Cancel anytime</TrustItem>
          </TrustRow>
        </DownloadPanel>

        <TotalDueRow>
          <TotalDueTitle>Total due today</TotalDueTitle>
          <TotalDuePrice data-testid="total-due-price">{trialPrice}</TotalDuePrice>
        </TotalDueRow>

        <PaymentMethods layout="grid" cardStyle="dark" />

        <TrialCaption>
          7-day trial for {trialPrice} · then {recurringPrice} every 4 weeks · cancel anytime
        </TrialCaption>

        <DisclaimerContainer>
          <CheckoutDisclaimer variant="short" align="left" />
        </DisclaimerContainer>

        <SecuredPaymentNote />
      </Content>
    </>
  );
};
