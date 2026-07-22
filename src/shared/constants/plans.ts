/**
 * Mock catalogue for the paywall design. In production these values come
 * from the payments backend — the ids and prices here are placeholders
 * that mirror the shape of PDFLeader's live plans.
 *
 * All prices are in USD cents (the design system's formatPrice treats
 * amounts as cents by default, same as the payments API).
 */

export type TDisclaimerKind = 'trial' | 'monthly';

export interface IPlan {
  id: string;
  /** Card headline, e.g. "7-Day Access". */
  name: string;
  /** Short supporting line under the plan name. */
  tagline: string;
  /** Price shown on the card, in cents. */
  displayPrice: number;
  /** Price used in the legal disclaimer, in cents. */
  recurringPrice: number;
  /** Which disclaimer template applies to the plan. */
  disclaimer: TDisclaimerKind;
}

export const PLANS: IPlan[] = [
  {
    id: 'pdfleader-7-day-access',
    name: '7-Day Access',
    tagline: 'For simple tasks',
    displayPrice: 195,
    recurringPrice: 4948,
    disclaimer: 'trial',
  },
  {
    id: 'pdfleader-1-month-access',
    name: '1-Month Access',
    tagline: 'For regular tasks',
    displayPrice: 2490,
    recurringPrice: 2490,
    disclaimer: 'monthly',
  },
];

/**
 * Group D — "choose your price" options. Every option unlocks the same
 * 7-day full access; the visitor decides how much the trial costs.
 */
export interface IPriceChoice {
  id: string;
  /** Trial price in cents. */
  trialPrice: number;
  /** Supporting line explaining what the chosen price means. */
  note: string;
  isMostPopular?: boolean;
}

export const PRICE_CHOICES: IPriceChoice[] = [
  {
    id: 'choose-price-1-95',
    trialPrice: 195,
    note: 'This price doesn’t cover our processing costs',
  },
  {
    id: 'choose-price-5-95',
    trialPrice: 595,
    note: 'Helps us cover the cost of processing your files',
    isMostPopular: true,
  },
  {
    id: 'choose-price-9-95',
    trialPrice: 995,
    note: 'Helps us keep improving PDFLeader for everyone',
  },
];

/** Recurring price (in cents) applied after any Group D trial choice. */
export const PRICE_CHOICE_RECURRING = 4948;
