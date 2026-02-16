# Soufiane Chami - Portfolio Website

## Overview
A stunning, executive-level personal portfolio website for Soufiane Chami — AI Infrastructure Architect & Strategic Operator. Designed to position him as a top-tier sovereign AI leader for speaking opportunities at GITEX, LEAP, Web Summit, and similar conferences.

## Architecture
- **Frontend-only**: Single-page portfolio with smooth scroll navigation
- **Framework**: React + Vite + Tailwind CSS + Framer Motion
- **Routing**: wouter (single route "/" for home page)
- **Theme**: Dark/Light mode with dark as default. Bain & Company inspired — Bain Red accent with black/white neutrals
- **Typography**: Space Grotesk for headings/mono, Inter for body text

## Key Sections
1. **Hero** - Full-screen with profile photo, employer logos in background, animated accent text, CTAs, social links
2. **Client Logos** - "Trusted By & Worked With" banner with SambaNova, Bain, SDAIA, OVHCloud, STC, SITE logos
3. **About** - Bio narrative + 4 metric cards ($100M+, 25k+, Fulbright, Publications)
4. **Experience** - Timeline of career: SambaNova, Bain, Sultan Center, UND, BMCE
5. **Impact** - 4 category cards: Sovereign AI, Enterprise, LLM Engineering, Strategy
6. **Speaking** - Topics, engagement types, notable events
7. **Expertise** - Technical skills grid + Publications & Recognition
8. **Contact** - 3 CTA cards (Advisory, Consulting, Speaking) + social links

## Project Structure
- `client/src/pages/home.tsx` - Main page composing all sections
- `client/src/components/` - All section components (navigation, hero, about, client-logos, etc.)
- `client/src/components/client-logos-section.tsx` - Employer + client logos banner
- `client/src/lib/theme.tsx` - Dark/light mode ThemeProvider
- `client/src/index.css` - Theme tokens and utility classes
- `client/public/images/` - Profile photo, employer logos (SambaNova + Bain in dark/light variants)

## Design Tokens
- Primary/Accent: Bain Red (0 100% 40% light / 0 100% 50% dark) — #CC0000
- Background: Near-black in dark mode (0 0% 6%), near-white in light mode (0 0% 98%)
- Foreground: Near-white in dark (0 0% 93%), near-black in light (0 0% 8%)
- accent-text utility class for colored heading accents
- section-divider utility class for subtle section separators
- Disciplined, authoritative aesthetic — red + black + white only

## Company Logos
- SambaNova: white logo (dark mode) / gray logo (light mode) — PNG files
- Bain & Company: white logo (dark mode) / red logo (light mode) — SVG files
- Client logos (SDAIA, OVHCloud, STC, SITE): text-based representations

## User Preferences
- Prefers Bain & Company color palette (red, black, white)
- Dark mode as default
- LinkedIn profile image used for hero section
- Wants employer and client logos visible on first page view
