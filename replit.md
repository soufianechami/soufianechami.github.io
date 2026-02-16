# Soufiane Chami - Portfolio Website

## Overview
A stunning, executive-level personal portfolio website for Soufiane Chami — AI Infrastructure Architect & Strategic Operator. Designed to position him as a top-tier sovereign AI leader for speaking opportunities at GITEX, LEAP, Web Summit, and similar conferences.

## Architecture
- **Frontend-only**: Single-page portfolio with smooth scroll navigation
- **Framework**: React + Vite + Tailwind CSS + Framer Motion
- **Routing**: wouter (single route "/" for home page)
- **Theme**: Dark/Light mode with dark as default. Anthropic/OpenAI inspired blend — warm charcoal/off-white base with burnt orange accent
- **Typography**: Space Grotesk for headings/mono, Inter for body text

## Key Sections
1. **Hero** - Full-screen with profile photo, animated accent text, CTAs, social links
2. **About** - Bio narrative + 4 metric cards ($100M+, 25k+, Fulbright, Publications)
3. **Experience** - Timeline of career: SambaNova, Bain, Sultan Center, UND, BMCE
4. **Impact** - 4 category cards: Sovereign AI, Enterprise, LLM Engineering, Strategy
5. **Speaking** - Topics, engagement types, notable events
6. **Expertise** - Technical skills grid + Publications & Recognition
7. **Contact** - 3 CTA cards (Advisory, Consulting, Speaking) + social links

## Project Structure
- `client/src/pages/home.tsx` - Main page composing all sections
- `client/src/components/` - All section components (navigation, hero, about, etc.)
- `client/src/lib/theme.tsx` - Dark/light mode ThemeProvider
- `client/src/index.css` - Theme tokens and utility classes
- `client/public/images/` - Profile photo and generated images

## Design Tokens
- Primary/Accent: Burnt orange (18 60% 58%) — Anthropic-inspired warm tone
- Background: Warm charcoal in dark mode (40 5% 7%), warm off-white in light mode (40 20% 98%)
- Foreground: Near-white in dark (40 15% 93%), near-black in light (40 5% 8%)
- accent-text utility class for colored heading accents
- section-divider utility class for subtle section separators
- Editorial, warm aesthetic with generous whitespace

## User Preferences
- Prefers Anthropic/OpenAI visual style blend over purple/violet themes
- Dark mode as default
- LinkedIn profile image used for hero section
