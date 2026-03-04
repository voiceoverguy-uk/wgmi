# WGMI — William George Management & Investments

## Overview
Premium property website for a UK property company. Features a public homepage, password-protected portfolio section, individual property pages with gallery, JWT-based share links, and an admin panel for generating share URLs.

## Tech Stack
- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Playfair Display (serif headings) + Inter (body) via next/font
- **Auth**: Cookie-based password protection via middleware
- **Share Links**: Signed JWT tokens with expiry
- **Email**: Resend (contact form sends to enquiries@wgmi.co.uk)
- **Data**: Properties stored in `/data/properties.json`

## Project Structure
```
src/
├── app/
│   ├── page.tsx          # Public homepage
│   ├── about/page.tsx    # Public about page
│   ├── login/page.tsx    # Login page
│   ├── portfolio/page.tsx # Protected portfolio grid
│   ├── p/[slug]/page.tsx  # Protected property detail
│   ├── s/[token]/page.tsx # Share link (JWT-verified, no login needed)
│   ├── admin/share/page.tsx # Admin: generate share links
│   └── api/
│       ├── login/route.ts
│       ├── contact/route.ts
│       ├── share/route.ts
│       └── properties/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   ├── PropertyImage.tsx
│   └── PropertyGallery.tsx
├── lib/
│   ├── auth.ts           # JWT + password helpers
│   └── properties.ts     # Property data access
└── middleware.ts          # Auth middleware
data/
└── properties.json       # Property data (add your 26 properties here)
public/
├── images/hero-drone.png # Hero background image
└── properties/<slug>/    # Property images (01.jpg, 02.jpg, etc.)
```

## Environment Variables
- `WGMI_PORTFOLIO_PASSWORD` — Password to access portfolio
- `WGMI_SHARE_JWT_SECRET` — Secret for signing share link tokens
- `RESEND_API_KEY` — API key for Resend email service (contact form)

## Design System
- Background: warm cream #FAF8F5
- Text: soft charcoal #3A3A3A
- Accent: deep red #d42027 (used sparingly)
- Max width: 1200px
- Serif headings, sans-serif body, lots of whitespace

## How to Add Properties
1. Edit `/data/properties.json` — add entries following the existing format
2. Place property images in `/public/properties/<slug>/01.jpg`, `02.jpg`, etc.
3. The portfolio and property pages will automatically pick them up

## Running
- Dev: `npm run dev` (port 5000)
- Build: `npm run build`
- Start: `npm start` (port 5000)
