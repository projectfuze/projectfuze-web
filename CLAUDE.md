# CLAUDE.md

## Project Overview

ProjectFuze website — a duo service by David Fuesser (product architect) and Lucas (engineering lead). They install AI-native backbones for Series A/B SaaS companies (10–50 people). David handles product intent (decision frameworks, workflows, alignment). Lucas handles engineering quality (quality gates, automated checks, CI/CD safety nets). Together they "bookend" the product-to-engineering pipeline with AI agents building in between.

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
│   ├── page.tsx           # Homepage (7 sections)
│   ├── deck/              # Pitch deck (slide-based)
│   ├── infuzed/           # Newsletter signup page
│   ├── privacy/           # Privacy policy
│   ├── impressum/         # Legal notice (German requirement)
│   └── snake/             # Easter egg
├── components/
│   ├── home/              # Homepage sections
│   │   ├── Hero.tsx       # Headline + duo headshots + CTA
│   │   ├── Shift.tsx      # 01 — The Shift (tools → teamwork, before/after)
│   │   ├── System.tsx     # 02 — The System (bookends visual + duo bios)
│   │   ├── HowIWork.tsx   # 03 — How We Work (Scan. Build. Hand off.)
│   │   ├── Engagements.tsx # 04 — The Engagement (3-tier offer stack)
│   │   ├── FitCheck.tsx   # 05 — Fit Check
│   │   └── FinalCTA.tsx   # Book a Call close
│   ├── deck/              # Pitch deck slides
│   │   ├── Deck.tsx       # Deck container + navigation
│   │   ├── SlideTitle.tsx
│   │   ├── SlideProblem.tsx
│   │   ├── SlideShift.tsx
│   │   ├── SlideSystem.tsx
│   │   ├── SlideDuo.tsx
│   │   ├── SlideHowWeWork.tsx
│   │   ├── SlideTimeSavings.tsx
│   │   ├── SlideNextStep.tsx
│   │   └── ProgressBar.tsx
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable components (Button, Section)
```

## Brand & Design

- **Primary dark**: `#3D3D3D`
- **Accent gold**: `#D4A84B`
- **Dark sections**: `#09090b` (System section, deck)
- **Logo**: "PROJECT" in dark/white + "FUZE" in gold
- **Font**: Plus Jakarta Sans
- **Section numbers**: Mono font, gold accent, uppercase tracking

## Offer Stack

| Tier | Name | Price | Duration |
|------|------|-------|----------|
| Entry | AI-Readiness Scan | $4,000 | 2 weeks |
| Build A | The Architect (David solo) | $15,000/month | 2 months |
| Build B | David + Lucas (Turnkey) | $25,000/month | 2 months |

## Key Patterns

### Navbar Dark/Light Mode
The navbar adapts colors based on page hero background:
- Dark hero pages: `/infuzed`
- Light hero pages: `/`, `/privacy`, `/impressum`

### CTA Links
All "Book a Call" / "Check Your AI Readiness" CTAs link to: `https://cal.com/davidfuesser/ai-readiness-call`

## Current State

- MVP — homepage (7 sections) + pitch deck, both reflecting duo positioning
- Email forms are static (no backend integration yet)
- Newsletter service TBD (Beehiiv, ConvertKit, etc.)

## Positioning

- **Framing**: "Your team has AI tools. They don't have an AI-native workflow."
- **Core pitch**: We install the backbone that connects Product, Design, and Engineering into a single AI-native workflow. We build it, hand it off, and the system stays.
- **Voice**: Intellectually precise, counter-intuitive, pattern-based, direct but not aggressive
- **Target**: Series A/B SaaS founders, 10–50 people
- **Shared backstory**: David and Lucas have been on opposite sides of the same scaling startups — twice. Once at a platform SaaS (Seed to $200M), now at an AI tool going through the same transition.
