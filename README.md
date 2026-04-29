# LiveShopHub

A Progressive Web App for hosting and joining **live shopping streams**. Sellers demo products in real time; buyers tap to purchase instantly.

Built for the booming live commerce category (projected to hit $1.5T) with a focus on independent makers, vintage curators, and small shops who need affordable tools beyond the big platforms.

## What's in here

- **Discover** (`/`) — featured live stream, full live grid, upcoming, sellers
- **Watch** (`/watch/[slug]`) — video stage, live chat, floating reactions, pinned product, full product rail with one-tap buy, activity feed, recommended streams
- **Upcoming** (`/upcoming`) — scheduled stream list with weekly calendar
- **Sell live** (`/sell`) — seller console: camera preview, stream metadata, product rail editor, live revenue dashboard
- **About** (`/about`) — manifesto, seller stories, stats
- **Checkout** (`/checkout`) — three-step flow with order summary, payment options, success state

PWA: installable via `manifest.webmanifest`, responsive across mobile and desktop, works offline-tolerant via Next.js static rendering of the discover catalog.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4
- React Context for the cart
- All data is local mock data in `lib/data.ts`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```
