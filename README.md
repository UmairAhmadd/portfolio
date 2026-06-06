# Umair Ahmad — Portfolio

Personal portfolio website built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Features

- Editorial, magazine-style layout (not a typical dev portfolio)
- Ghost text behind section headings with parallax scroll
- Bold Inter typography, light-gray paper background, black pill buttons
- Animated hero, scroll-reveal project cards, filterable work grid
- Fully responsive (mobile / tablet / desktop)
- SEO meta tags + Open Graph, Vercel deploy ready

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form (EmailJS)

The contact form sends email via [EmailJS](https://www.emailjs.com) — no backend needed.

1. Create a free account, then add an **Email Service** (e.g. Gmail) and an **Email Template**.
2. In the template, use these variables so the form fields map correctly:
   `{{name}}`, `{{email}}`, `{{message}}`. Set the template's **To** address to
   `umairahmad3921@gmail.com` and **Reply-To** to `{{email}}`.
3. Copy `.env.local.example` to `.env.local` and fill in your Service ID, Template ID,
   and Public Key (from the EmailJS dashboard).
4. Restart `npm run dev`.

Until the keys are set the form renders and validates, but submitting shows a
"not configured" message instead of sending.

## Build

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — `vercel.json`
already targets the Next.js framework preset, so no extra config is needed.

## Structure

```
app/         layout, page, global styles
components/   Navbar, Hero, About, Projects, Experience, Contact, Footer
public/       static assets
```
