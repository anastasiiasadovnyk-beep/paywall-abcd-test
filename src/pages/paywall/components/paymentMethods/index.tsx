import type { FC } from 'react';

import { ReactComponent as ApplePayLogo } from '@/shared/ui/assets/payment-methods/apple-pay.svg?react';
import { ReactComponent as GPayLogo } from '@/shared/ui/assets/payment-methods/gpay.svg?react';
import payPalLogo from '@/shared/ui/assets/payment-methods/paypal.svg';
/* The plain card-brand set is white (for dark buttons); the "-inverted"
   set is full-color (for light buttons) — same convention as the main app. */
import amexColor from '@/shared/ui/assets/card-brands/american-express-inverted.svg';
import amexWhite from '@/shared/ui/assets/card-brands/american-express.svg';
import maestroColor from '@/shared/ui/assets/card-brands/maestro-inverted.svg';
import maestroWhite from '@/shared/ui/assets/card-brands/maestro.svg';
import mastercardColor from '@/shared/ui/assets/card-brands/mastercard-inverted.svg';
import mastercardWhite from '@/shared/ui/assets/card-brands/mastercard.svg';
import visaColor from '@/shared/ui/assets/card-brands/visa-inverted.svg';
import visaWhite from '@/shared/ui/assets/card-brands/visa.svg';

import {
  BrandLogo,
  CardBrandIcon,
  CardBrandsRow,
  CardButton,
  CardLabel,
  PaymentButton,
  PaymentButtonsContainer,
} from './styles';

export type TPaymentMethodsLayout = 'stacked' | 'grid';
export type TCardButtonStyle = 'dark' | 'light';

interface IPaymentMethodsProps {
  /** 'stacked' — one button per row (groups A, C); 'grid' — 2×2 (group B). */
  layout?: TPaymentMethodsLayout;
  /** Card button appearance: dark grey (A, B) or light outlined (C). */
  cardStyle?: TCardButtonStyle;
}

const CARD_BRANDS = {
  dark: [
    { name: 'Mastercard', logo: mastercardWhite },
    { name: 'Maestro', logo: maestroWhite },
    { name: 'Visa', logo: visaWhite },
    { name: 'American Express', logo: amexWhite },
  ],
  light: [
    { name: 'Mastercard', logo: mastercardColor },
    { name: 'Maestro', logo: maestroColor },
    { name: 'Visa', logo: visaColor },
    { name: 'American Express', logo: amexColor },
  ],
};

/**
 * Payment method buttons (PayPal / Google Pay / Apple Pay / card).
 * Purely presentational — the production funnel wires these to the
 * payment SDK.
 */
export const PaymentMethods: FC<IPaymentMethodsProps> = ({
  layout = 'stacked',
  cardStyle = 'dark',
}) => {
  return (
    <PaymentButtonsContainer $layout={layout}>
      <PaymentButton type="button" $brand="paypal" data-testid="paypal-button">
        <BrandLogo as="img" src={payPalLogo} alt="PayPal" />
      </PaymentButton>
      <PaymentButton type="button" $brand="gpay" data-testid="gpay-button" aria-label="Google Pay">
        <GPayLogo />
      </PaymentButton>
      <PaymentButton
        type="button"
        $brand="apple-pay"
        data-testid="apple-pay-button"
        aria-label="Apple Pay"
      >
        <ApplePayLogo />
      </PaymentButton>
      <CardButton type="button" $cardStyle={cardStyle} data-testid="card-button">
        <CardLabel>Pay with card</CardLabel>
        <CardBrandsRow>
          {CARD_BRANDS[cardStyle].map((brand) => (
            <CardBrandIcon key={brand.name} src={brand.logo} alt={brand.name} />
          ))}
        </CardBrandsRow>
      </CardButton>
    </PaymentButtonsContainer>
  );
};
