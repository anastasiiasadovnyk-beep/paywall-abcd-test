# Paywall — A/B/C/D test

PDFLeader paywall (select plan) screen with four experiment variants, built as a
standalone React app for design review and developer handoff.

| Group | URL | What changes vs. control |
| ----- | --- | ------------------------ |
| **A** | `/?group=a` | Default control screen (mirrors the live pricing page) |
| **B** | `/?group=b` | Big progress banner ("Your file is almost ready!", 90% bar + illustration) between the header and the plans |
| **C** | `/?group=c` | Small progress strip (label + slim 90% bar) right above the page title |
| **D** | `/?group=d` | "Choose your price" — three trial-price options ($1.95 / $5.95 / $9.95) instead of the plan list |

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
- **Illustrations:** exported from the PDFLeader graphic set in Figma
  (`src/shared/ui/assets/folder-with-file.svg`, `pdf-file-ready.svg`).
- **Typography:** Montserrat (woff2 files in `public/fonts`, declared in
  `index.html`).

## Project structure

```
src/
├── app/                  # App shell: router, Toaster, global styles/tokens
├── pages/paywall/        # The paywall screen
│   ├── groups/           # GroupA…GroupD — one component per test variant
│   ├── components/       # plansSelector, priceChoiceSelector, fileProgress,
│   │                     # continueButton, planFeaturesList, planDisclaimer,
│   │                     # groupSwitcher (dev-only)
│   └── styles.tsx        # Shared page layout (Content, Title, hero split)
├── widgets/              # headerFlowSection, filePreviewCard,
│                         # pricingFeaturesSection, footerSection
└── shared/
    ├── abTest/           # Experiment group resolution
    ├── constants/        # plans.ts (mock catalogue, prices in USD cents)
    ├── lib/              # designSystem init, price formatting
    └── ui/               # icons, BorderedCardCheckmark, PriceWithSup, assets
```

## Mock data

Plan names, prices and legal copy live in `src/shared/constants/plans.ts` and
mirror the shape of the payments backend (prices in cents — the design
system's `formatPrice` expects cents). The legal links in
`src/shared/constants/pageLinks.ts` are placeholders.

## Notes for reviewers

- No analytics, i18n or Redux — this is a design deliverable; the group
  components are intentionally kept close to the `pdfleader-fe` pricing page
  structure so they can be ported back easily.
- `npm run build` is available but build output (`dist/`) is git-ignored;
  review the source, not artifacts.
