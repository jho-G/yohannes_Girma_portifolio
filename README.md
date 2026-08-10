# Yohannes — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Base UI primitives)
- Framer Motion + GSAP (ScrollTrigger) for animation
- Lenis for smooth scrolling
- next-themes for dark/light mode
- EmailJS for the contact form

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
