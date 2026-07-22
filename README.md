# Paywall — A/B/C/D test

PDFLeader checkout paywall with four experiment variants, built as a
standalone React app for design review and developer handoff. Groups A–C
reproduce the reference mockups; group D applies the "choose your price"
idea in PDFLeader's visual style.

| Group | URL | Screen |
| ----- | --- | ------ |
| **A** | `/?group=a` | Default checkout (control): payment card with PayPal / Google Pay / Apple Pay / card, legal disclaimer, trust badges; file-ready card and "Your 7-day trial includes" summary on the right |
| **B** | `/?group=b` | Big progress bar: centered layout with a large download panel (file, 95% green bar, TrustScore row) above the payment methods |
| **C** | `/?group=c` | Small progress bar: title header, compact file card with a slim 89% bar, document preview, trial timeline; payments and an illustrated "everything unlocks" grid on the right |
| **D** | `/?group=d` | Choose your price: the visitor picks what the 7-day trial costs ($0.50 / $3 / $10 / $18.37); Continue stays disabled until a price is chosen |

The visitor's group is resolved in `src/shared/abTest`: the `?group=` query
parameter always wins and is persisted to localStorage; the control group A is
the fallback. In production the assignment would come from the experimentation
platform (GrowthBook in PDFLeader) — this hook is the single place to swap.

In the dev server a floating A/B/C/D switcher (bottom-right) links between the
groups. It is rendered only when `import.meta.env.DEV` is true and does not
ship in a production build.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run lint:types   # typecheck
```

`@universe-forma/ui-pes` is a private package on GitHub Packages. The project
`.npmrc` contains only the scope-to-registry mapping; authentication must live
in your user-level `~/.npmrc` (never commit tokens to this repository):

```
//npm.pkg.github.com/:_authToken=<your token with read:packages>
```

## Stack & conventions

- Vite + React 18 + TypeScript, styled-components, Tailwind CSS v4 — the same
  stack and visual conventions as `pdfleader-fe`.
- **Design system:** `@universe-forma/ui-pes` (Button, Toaster, `cn`,
  `formatPrice`). Design tokens live in `src/app/styles/vars.css` (copied from
  the main app) and are activated by the `data-ds` attribute set in
  `src/shared/lib/designSystem.ts`.
- **Icons:** Google [Material Icons](https://github.com/google/material-design-icons)
  via `@material-design-icons/svg` (rounded style), re-exported from
  `src/shared/ui/icons.ts`.
- **Brand assets:** payment method and card-brand logos come from the
  `pdfleader-fe` checkout assets; feature illustrations are exported from the
  PDFLeader graphic set in Figma (`src/shared/ui/assets/features`).
- **Typography:** Montserrat (woff2 files in `public/fonts`, declared in
  `index.html`).

## Project structure

```
src/
├── app/                  # App shell: router, Toaster, global styles/tokens
├── pages/paywall/        # The checkout paywall screen
│   ├── groups/           # GroupA…GroupD — one component (+styles) per variant
│   └── components/       # paymentMethods, checkoutDisclaimer, trustBadges,
│                         # securedPaymentNote, continueButton,
│                         # groupSwitcher (dev-only)
├── widgets/              # headerFlowSection (logo + numbered steps),
│                         # headerTitleSection (logo + page title),
│                         # footerSection
└── shared/
    ├── abTest/           # Experiment group resolution
    ├── constants/        # checkout.ts (mock data, prices in USD cents)
    ├── lib/              # designSystem init, price formatting
    └── ui/               # icons, DocumentMock, PriceWithSup, assets
```

## Mock data

Prices, file names, trial checklist and legal contacts live in
`src/shared/constants/checkout.ts` and mirror the shape of the payments
backend (prices in cents — the design system's `formatPrice` expects cents).
Payment buttons are presentational; the production funnel wires them to the
payment SDK. The legal links in `src/shared/constants/pageLinks.ts` are
placeholders.

## Notes for reviewers

- No analytics, i18n or Redux — this is a design deliverable; component
  structure follows the `pdfleader-fe` conventions (FSD-flavoured layers,
  styled-components with design tokens) so screens can be ported back easily.
- `npm run build` is available but build output (`dist/`) is git-ignored;
  review the source, not artifacts.
