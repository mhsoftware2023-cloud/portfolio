# mhsoftware Portfolio

Personal portfolio website for **mhsoftware** — a software development studio. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** Custom implementation with `app/[lang]/` routing and `Accept-Language` auto-detection

## Features

- Bilingual (English 🇺🇸 / Spanish 🇪🇸) with automatic language detection from browser settings
- Default language: Spanish
- Language switcher in the navbar
- Sections: Hero, About, Services (with detail modals), Projects (with images), Testimonials, Contact
- Fully static — pre-rendered at build time via `generateStaticParams`
- Responsive design with mobile navigation

## Project Structure

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx       # Per-locale layout (loads dictionary, renders Navbar/Footer)
│   │   └── page.tsx         # Main page (assembles all sections)
│   ├── layout.tsx           # Root passthrough layout
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AboutServices.tsx    # About + Services sections with modal trigger
│   ├── ServiceModal.tsx     # Service detail modal
│   ├── Projects.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── dictionaries/
│   ├── en.json              # English content
│   └── es.json              # Spanish content
├── i18n/
│   └── dictionaries.ts      # getDictionary helper, Locale type
└── proxy.ts                 # Middleware: detects locale from Accept-Language, redirects /→/es or /en
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/es` or `/en` based on your browser language.

## Available Routes

| Route | Description |
|-------|-------------|
| `/`   | Redirected by middleware to `/es` or `/en` |
| `/es` | Spanish version |
| `/en` | English version |

## Adding a New Language

1. Add a new dictionary file in `src/dictionaries/<locale>.json` (copy `en.json` as a template)
2. Register the locale in `src/i18n/dictionaries.ts`
3. The middleware and static generation will pick it up automatically

## Deployment

Deploy to [Vercel](https://vercel.com) with zero configuration — just connect the repository.

```bash
npm run build   # production build
npm start       # start production server
```
