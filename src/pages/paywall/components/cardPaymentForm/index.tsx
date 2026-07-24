import { type ChangeEvent, forwardRef, useState } from 'react';

import { Input } from '@universe-forma/ui-pes';

import amexLogo from '@/shared/ui/assets/card-brands/american-express-inverted.svg';
import maestroLogo from '@/shared/ui/assets/card-brands/maestro-inverted.svg';
import mastercardLogo from '@/shared/ui/assets/card-brands/mastercard-inverted.svg';
import visaLogo from '@/shared/ui/assets/card-brands/visa-inverted.svg';
import { InfoIcon } from '@/shared/ui/icons';

import { ContinueButton } from '../continueButton';
import { BrandIcon, BrandsRow, FieldsRow, FormRoot, HeaderRow, Title } from './styles';

/* Full-color brand set for the white card. */
const CARD_BRANDS = [
  { name: 'Mastercard', logo: mastercardLogo },
  { name: 'Maestro', logo: maestroLogo },
  { name: 'Visa', logo: visaLogo },
  { name: 'American Express', logo: amexLogo },
];

/**
 * Card details form that unfolds under the "Pay with card" button.
 * Purely presentational — the production funnel wires the fields and
 * the pay button to the payment SDK.
 */
export const CardPaymentForm = forwardRef<HTMLDivElement>((_props, ref) => {
  const [fields, setFields] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardholderName: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FormRoot ref={ref} data-testid="card-payment-form">
      <HeaderRow>
        <Title>Pay with cards</Title>
        <BrandsRow>
          {CARD_BRANDS.map((brand) => (
            <BrandIcon key={brand.name} src={brand.logo} alt={brand.name} />
          ))}
        </BrandsRow>
      </HeaderRow>

      <Input
        size="lg"
        bg="default"
        label="Card Number"
        placeholder="XXXX XXXX XXXX XXXX"
        name="cardNumber"
        value={fields.cardNumber}
        onChange={handleChange}
        autoComplete="cc-number"
        inputMode="numeric"
      />

      <FieldsRow>
        <Input
          size="lg"
          bg="default"
          label="Expiry Date"
          placeholder="MM/YYYY"
          name="cardExpiry"
          value={fields.cardExpiry}
          onChange={handleChange}
          autoComplete="cc-exp"
          inputMode="numeric"
        />
        <Input
          size="lg"
          bg="default"
          label="CVV/CVC"
          placeholder="CVV"
          name="cardCvv"
          value={fields.cardCvv}
          onChange={handleChange}
          autoComplete="cc-csc"
          inputMode="numeric"
          rightIcon={<InfoIcon />}
        />
      </FieldsRow>

      <Input
        size="lg"
        bg="default"
        label="Cardholder name"
        placeholder="Full name as on card"
        name="cardholderName"
        value={fields.cardholderName}
        onChange={handleChange}
        autoComplete="cc-name"
      />

      <ContinueButton>Pay &amp; download my file</ContinueButton>
    </FormRoot>
  );
});

CardPaymentForm.displayName = 'CardPaymentForm';
