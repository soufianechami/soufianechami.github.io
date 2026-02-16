# Soufiane Chami - Portfolio Website

## Overview
A stunning, executive-level personal portfolio website for Soufiane Chami — AI Infrastructure Architect & Strategic Operator. Designed to position him as a top-tier sovereign AI leader for speaking opportunities at GITEX, LEAP, Web Summit, and similar conferences.

## Architecture
- **Frontend-only**: Single-page portfolio with smooth scroll navigation
- **Framework**: React + Vite + Tailwind CSS + Framer Motion
- **Routing**: wouter (single route "/" for home page)
- **Theme**: Dark/Light mode with dark as default. Graphite/deep blue/violet palette
- **Typography**: Space Grotesk for headings/mono, Inter for body text

## Key Sections
1. **Hero** - Full-screen with animated gradient text, CTAs, social links
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
- `client/public/images/` - Generated hero background and profile images

## Design Tokens
- Primary: Deep blue (235 70% 55%)
- Accent: Electric violet (270 60% 55%)
- Background: Near-black in dark mode (225 25% 6%), light gray in light mode
- Gradient text effect for headings using primary-to-accent gradient
