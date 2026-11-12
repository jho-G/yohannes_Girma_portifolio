# Yohannes — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Languages**: TypeScript, Python, Go, JavaScript
- **Styling**: Tailwind CSS v4
- **Backend & Architecture**: Microservices, REST API, gRPC, Kafka
- **DevOps & Tools**: Docker, CI/CD, Git, Postman
- **Smooth Scroll**: Lenis
- **Theming**: next-themes (dark/light mode)
- **Form Service**: EmailJS

## Getting started

```bash
npm install
npm run dev
```

Copy `.env.local.example` to `.env.local` and fill in your EmailJS service/template/public key:

```bash
cp .env.local.example .env.local
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the codebase

## Project structure

- `app/` — routes, layout, global styles
- `components/` — page sections, UI primitives, providers
- `lib/` — data, utilities, EmailJS wrapper
- `hooks/` — shared client hooks
- `types/` — shared TypeScript types
- `legacy-static/` — the original static HTML/CSS/JS version, kept for reference
# updated-portifolio
