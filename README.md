# Servana

A UK service marketplace web app — find and book trusted local & online professionals (cleaning, care, trades, household help, and online tutoring), or list your own services. Built as a polished, fully navigable **frontend** with realistic dummy data, structured for a real backend to be dropped in later.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom emerald/slate design tokens)
- **lucide-react** icons, **framer-motion**, **clsx**
- Fonts: Bricolage Grotesque (display) + Plus Jakarta Sans (body), loaded at runtime

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To create a production build:

```bash
npm run build && npm start
```

## What's inside

**Public site**
- Landing page with search-first hero, categories, featured services, how-it-works, trust section, dual provider/agency CTAs
- `/services` — marketplace with live client-side filtering (category, location, delivery mode, max rate, min rating, sort)
- `/services/[id]` — service detail with gallery, provider card, reviews and a working booking form (price breakdown, add-ons, wallet)
- `/categories`, `/categories/[slug]`, `/providers`, `/providers/[id]`, `/agencies`, `/agencies/[id]`
- `/about`, `/how-it-works`, `/pricing`, `/help` (searchable FAQ)
- `/login`, `/register` (+ customer / provider / agency flows with multi-step verification wizards)

**Four role-based dashboards** (under `/dashboard`)
- **Customer** — overview, orders + order detail, wallet, saved, messages, reviews, settings
- **Provider** — overview, services, add service, orders + detail, earnings, availability, reviews, messages, onboarding, settings
- **Agency** — overview, managed services, order-on-behalf, clients, referrals, commissions, payouts, onboarding, settings
- **Admin** — overview, customers, providers, agencies, categories, services, orders, commissions, disputes, reviews, reports

> Tip: the login page and the dashboard sidebar both have shortcuts to switch between the four role dashboards for easy demoing.

## Project structure

```
app/                 # routes (App Router)
  dashboard/         # customer | provider | agency | admin
  ...                # public pages
components/
  ui/                # Button, Card, Badge, Input, Avatar, Rating, etc.
  layout/            # Navbar, Footer, SiteShell, AuthShell
  marketplace/       # ServiceCard, ProviderCard, filters, etc.
  dashboard/         # sidebar, header, tables, stat cards, etc.
  forms/             # booking + registration + service-creation forms
lib/
  types.ts           # all domain types
  data.ts            # dummy data + lookup helpers
  utils.ts           # formatting helpers (GBP, dates, etc.)
```

## Notes on the data layer

All data lives in `lib/data.ts` as typed arrays with lookup helpers (`getService`, `getOrdersByCustomer`, etc.). When wiring a real backend, replace these helpers with API/database calls that return the same shapes defined in `lib/types.ts` — the UI won't need to change.

Placeholder imagery is generated deterministically from string seeds (`gradientFromSeed`), so no image assets are required.
# servana
