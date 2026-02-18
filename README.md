# Soufiane Chami - Portfolio Website

Personal portfolio for **Soufiane Chami** — AI Infrastructure Architect & Strategic Operator. Designed to position him as a top-tier sovereign AI leader for speaking opportunities at GITEX, LEAP, Web Summit, and similar conferences.

**Live site:** [https://soufianechami.github.io](https://soufianechami.github.io)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 7 |
| Styling | Tailwind CSS 3.4 + custom CSS tokens |
| Animations | Framer Motion |
| Routing | wouter (single-page, smooth scroll) |
| Icons | lucide-react, react-icons |
| UI Components | shadcn/ui (Radix primitives) |
| Fonts | Space Grotesk (headings/mono), Inter (body) |

## Design System

### Color Palette (Bain & Company inspired)

- **Accent / Primary:** Bain Red `hsl(0 100% 40%)` in light mode, `hsl(0 100% 50%)` in dark mode (#CC0000)
- **Background:** Near-black `hsl(0 0% 6%)` in dark, near-white `hsl(0 0% 98%)` in light
- **Foreground:** Near-white `hsl(0 0% 93%)` in dark, near-black `hsl(0 0% 8%)` in light
- **Palette is strictly red + black + white** — disciplined and authoritative

### Theme

- Dark mode is the **default**
- Toggle in the navigation bar (sun/moon icon)
- Theme state persisted in `localStorage`
- Implementation: `client/src/lib/theme.tsx` — React context provider with `dark` class on `<html>`

### CSS Tokens

Defined in `client/src/index.css` using HSL values (space-separated, no `hsl()` wrapper) consumed by Tailwind config:

```css
--primary: 0 100% 40%;        /* Bain Red */
--background: 0 0% 98%;       /* Light mode bg */
--foreground: 0 0% 8%;        /* Light mode text */
```

Custom utility classes:
- `.accent-text` — applies the red accent color to text
- `.section-divider` — subtle horizontal separator between sections

## Project Structure

```
client/
  index.html                    # Entry HTML
  public/
    favicon.png
    images/                     # All logo and profile image assets
      soufiane-profile.jpg      # Hero profile photo
      sambanova-white-logo.png  # SambaNova (dark mode)
      sambanova-gray-logo.png   # SambaNova (light mode)
      bain-white-logo.svg       # Bain & Company (dark mode)
      bain-red-logo.svg         # Bain & Company (light mode)
      sdaia-logo.svg            # SDAIA (light mode, colorful)
      sdaia-logo-dark.svg       # SDAIA (dark mode, light text)
      ovhcloud-logo.png         # OVHcloud (uses CSS invert for dark)
      site-logo.svg             # SITE (light mode, dark green)
      site-logo-dark.svg        # SITE (dark mode, light fill)
      hero-bg.png               # Hero background texture
  src/
    main.tsx                    # React entry point
    App.tsx                     # Root component with routing
    index.css                   # Theme tokens, utility classes, fonts
    lib/
      theme.tsx                 # Dark/light ThemeProvider
      utils.ts                  # cn() utility (clsx + tailwind-merge)
      queryClient.ts            # TanStack Query client
    pages/
      home.tsx                  # Main page composing all sections
      not-found.tsx             # 404 page
    components/
      navigation.tsx            # Sticky top nav with smooth scroll + theme toggle
      hero-section.tsx          # Full-screen hero with profile, CTAs, social links
      client-logos-section.tsx   # Auto-rotating logo carousel (3 at a time)
      about-section.tsx         # Bio + 4 metric cards
      experience-section.tsx    # Career timeline
      impact-section.tsx        # 4 impact category cards
      speaking-section.tsx      # Speaking topics and engagements
      expertise-section.tsx     # Skills grid + publications
      contact-section.tsx       # 3 CTA cards + social links
      footer.tsx                # Site footer
      ui/                       # shadcn/ui base components
```

## Page Sections (in order)

1. **Navigation** — Sticky top bar, logo, section links with smooth scroll, dark/light toggle
2. **Hero** — Full-screen with profile photo, animated grid background, employer logos floating in background, title, tagline, CTA buttons, social links (LinkedIn, GitHub, Twitter)
3. **Client Logos** — "Trusted By & Worked With" carousel rotating 5 logos (SambaNova, Bain, SDAIA, OVHcloud, SITE) in groups of 3 with dot pagination
4. **About** — Bio narrative + 4 metric cards ($100M+, 25k+, Fulbright Scholar, Publications)
5. **Experience** — Career timeline: SambaNova Systems, Bain & Company, Sultan Center, UND, BMCE Capital
6. **Impact** — 4 category cards: Sovereign AI Infrastructure, Enterprise AI Deployment, LLM Engineering, Strategic Advisory
7. **Speaking** — Topics, engagement types (keynote/panel/workshop), notable events
8. **Expertise** — Technical skills grid + Publications & Recognition section
9. **Contact** — 3 CTA cards (Advisory, Consulting, Speaking) + social links
10. **Footer** — Copyright, social links

## Logo Handling

Logos use **theme-aware rendering** — different assets for dark vs light mode:

| Logo | Light Mode | Dark Mode | Technique |
|------|-----------|-----------|-----------|
| SambaNova | `sambanova-gray-logo.png` | `sambanova-white-logo.png` | Conditional `src` |
| Bain | `bain-red-logo.svg` | `bain-white-logo.svg` | Conditional `src` |
| SDAIA | `sdaia-logo.svg` (colorful) | `sdaia-logo-dark.svg` (light text) | Conditional `src` |
| OVHcloud | `ovhcloud-logo.png` | Same file | CSS `dark:invert dark:brightness-200` |
| SITE | `site-logo.svg` (dark green) | `site-logo-dark.svg` (light fill) | Conditional `src` |

## Development

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:5000` with hot module replacement.

### Available Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server (Express + Vite HMR) |
| `npm run build` | Production build to `dist/public/` |
| `npm run check` | TypeScript type checking |
| `npm start` | Start production server |

### Build for Static Hosting

```bash
npx vite build --base=/
```

Output goes to `dist/public/` — contains `index.html`, `assets/`, `images/`, and all static files ready to serve.

## Deployment

The site is deployed to **GitHub Pages** at [soufianechami.github.io](https://soufianechami.github.io).

### How to Deploy

1. Build the site: `npx vite build --base=/`
2. Push the contents of `dist/public/` to the `main` branch of the `soufianechami.github.io` repository
3. GitHub Pages serves from the `main` branch root (legacy/branch mode)
4. A `.nojekyll` file is included to prevent Jekyll processing

### Custom Domain

To use a custom domain (e.g., `soufianechami.com`):
1. Go to the repo's Settings > Pages
2. Enter your custom domain
3. Add a `CNAME` DNS record pointing to `soufianechami.github.io`
4. GitHub will provision HTTPS automatically

## Architecture Notes

- **Frontend-only** — No backend required for the portfolio. The Express server in `server/` is only used during Replit development for serving the Vite build.
- **Single-page app** — All sections on one page with smooth scroll navigation. No client-side routing beyond the home page.
- **Responsive** — Mobile-first design with `md:` breakpoints for tablet/desktop.
- **Animations** — Framer Motion for scroll-triggered reveals (`whileInView`), hero background animations, and logo carousel transitions.
- **No external API calls** — All content is hardcoded in the component files. To update content, edit the relevant component in `client/src/components/`.

## Content Updates

All portfolio content is defined directly in the component files. To update:

| Content | File |
|---------|------|
| Name, title, tagline | `hero-section.tsx` |
| Bio text, metrics | `about-section.tsx` |
| Job history | `experience-section.tsx` |
| Impact areas | `impact-section.tsx` |
| Speaking topics | `speaking-section.tsx` |
| Skills, publications | `expertise-section.tsx` |
| Contact CTAs | `contact-section.tsx` |
| Client logos | `client-logos-section.tsx` |
| Social links | `hero-section.tsx`, `contact-section.tsx`, `footer.tsx` |

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | Scroll animations, transitions, hero effects |
| `lucide-react` | Icon library (ArrowDown, Linkedin, Github, etc.) |
| `react-icons` | Additional icons (company logos via `react-icons/si`) |
| `wouter` | Lightweight client-side routing |
| `tailwindcss-animate` | Animation utilities for Tailwind |
| `@radix-ui/*` | Accessible UI primitives (shadcn foundation) |
