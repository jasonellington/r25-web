# Routine 25 — Web

The marketing site and web checkout for [Routine 25](https://routine25.com), an AI-powered morning routine coaching app. Built with Next.js 15, React 19, and Tailwind CSS.

This is one of three repos that make up the Routine 25 project:

| Repo | Description |
|------|-------------|
| **r25-web** (this repo) | Marketing site, pricing page, and Paddle web checkout |
| [r25-app](https://github.com/jasonellington/r25-app) | iOS app — SwiftUI + SwiftData |
| [r25-backend](https://github.com/jasonellington/r25-backend) | AI coaching backend — FastAPI + Claude |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

### Install

```bash
pnpm install
```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `APPLE_TEAM_ID` | Your Apple Team ID (for Universal Links) |
| `NEXT_PUBLIC_BUNDLE_IDENTIFIER` | Your iOS app's bundle identifier |
| `NEXT_PUBLIC_APP_REDIRECT_URL` | Redirect URL back to your app after checkout |
| `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` | Your Paddle client token |
| `NEXT_PUBLIC_PADDLE_ENV` | `sandbox` or `production` |

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
pnpm build
```

## Tech Stack

- **Next.js 15** with Turbopack
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Paddle** for payments
- **Radix UI** for accessible primitives
- **Motion** for animations

## Project Structure

```
src/
  app/           # Next.js App Router pages
    (legal)/     # Terms, privacy policy, refund policy
    checkout/    # Paddle checkout page
    pricing/     # Pricing page
  components/    # UI and feature components
  hooks/         # Custom React hooks (Paddle integration)
  lib/           # Utilities and types
public/          # Static assets
```

## License

[MIT](LICENSE)
