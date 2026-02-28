# CLAUDE.md

## Project Overview

ProjectFuze website - a single-page operator site for David Fuesser's fractional product operations practice. Targeting Series A/B SaaS founders (10-50 people). Positioned as "Fractional Product Operator" — hands-on, embedded, proof-led.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Package Manager**: npm

## Key Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage (single-page pitch, 8 sections)
│   ├── infuzed/           # Newsletter signup page
│   ├── privacy/           # Privacy policy
│   ├── impressum/         # Legal notice (German requirement)
│   └── snake/             # Easter egg
├── components/
│   ├── home/              # Homepage sections
│   │   ├── Hero.tsx       # Title + headshot + CTAs
│   │   ├── Problem.tsx    # 01 — The Pattern (founder's internal monologue)
│   │   ├── Proof.tsx      # 02 — What I Find (anonymized findings with numbers)
│   │   ├── WhoIAm.tsx     # 03 — Who I Am (photo + bio + credibility)
│   │   ├── HowIWork.tsx   # 04 — How I Work (Embed. Diagnose. Build.)
│   │   ├── Engagements.tsx # 05 — Three-tier offer stack
│   │   ├── FitCheck.tsx   # 06 — Good fit / Not a fit
│   │   └── FinalCTA.tsx   # Book a Call close
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable components (Button, Section)
```

## Brand & Design

- **Primary dark**: `#3D3D3D`
- **Accent gold**: `#D4A84B`
- **Logo**: "PROJECT" in dark/white + "FUZE" in gold
- **Font**: Plus Jakarta Sans
- **Section numbers**: Mono font, gold accent, uppercase tracking

## Offer Stack

| Tier | Name | Price | Duration |
|------|------|-------|----------|
| 1 | Product Health Scan | $5,000 | 2 weeks |
| 2 | Embedded Diagnostic | $15,000–$20,000 | 4 weeks |
| 3 | Operating System Build | $10,000/month | 3–6 months |

## Key Patterns

### Navbar Dark/Light Mode
The navbar adapts colors based on page hero background:
- Dark hero pages: `/infuzed`
- Light hero pages: `/`, `/privacy`, `/impressum`

### Calendly Integration
All "Book a Call" CTAs link to: `https://calendly.com/davidfuesser/30min`

## Current State

- Single-page homepage with 8 sections
- Email forms are static (no backend integration yet)
- Newsletter service TBD (Beehiiv, ConvertKit, etc.)

## Positioning

- **Title**: Fractional Product Operator
- **Tagline**: "I don't bring decks. I bring clarity."
- **Voice**: Intellectually precise, counter-intuitive, pattern-based, direct but not aggressive
- **Target**: Series A/B SaaS founders scaling from founder-led to product-led
