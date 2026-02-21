# CLAUDE.md

This file provides guidance to AI assistants working with the ItsAllWater corporate website codebase.

## Project Overview

**It's All Water, LLC** is a static corporate website for a freelance software development and IT consulting business. It serves as a professional portfolio and contact hub.

- **Live site:** https://www.itsallwater.net
- **Deployment:** Azure Static Web Apps
- **Type:** Static SPA (no backend or database)

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Vue.js 3 | ^3.0.0 |
| Routing | Vue Router 4 | ^4.0.0-beta.13 |
| CSS | Tailwind CSS | ^1.8.10 |
| Build tool | Vite | ^1.0.0-rc.1 |
| Hosting | Azure Static Web Apps | — |
| Icons | Custom icon font (Icones) | — |
| Analytics | Google Analytics | UA-127913068-1 |

## Repository Structure

```
ItsAllWater/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps-lemon-water-0786c1d1e.yml  # CI/CD pipeline
├── public/                    # Static assets served directly
│   ├── icons/                 # Icon font files
│   ├── routes.json            # Azure SPA routing config (serves index.html for all routes)
│   ├── site.webmanifest.json  # PWA manifest
│   ├── browserconfig.xml      # Windows tile config
│   ├── robots.txt
│   ├── resume.pdf
│   └── favicon files (multiple sizes/formats)
├── src/
│   ├── assets/                # Bundled assets (images, fonts, CSS)
│   │   ├── icons/             # Icon font (iconfont.{css,eot,svg,ttf,woff,woff2})
│   │   ├── main.css           # Tailwind CSS entry (imports base/components/utilities)
│   │   ├── logo.png / logo.svg / logo-bare.png
│   │   ├── profile.jpg
│   │   └── splash.jpg
│   ├── components/            # Reusable Vue components
│   │   ├── Navbar.vue         # Fixed navigation with mobile hamburger menu
│   │   ├── Footer.vue         # Site footer with wave divider
│   │   ├── IconLink.vue       # Reusable icon+label link component
│   │   ├── TransitionTop.vue  # SVG wave divider (top variant)
│   │   └── TransitionBottom.vue # SVG wave divider (bottom variant)
│   ├── views/                 # Page-level Vue components (one per route)
│   │   ├── Home.vue           # Landing page / hero
│   │   ├── About.vue          # Biography and tech stack
│   │   ├── Contact.vue        # Contact form (Formspree) + links
│   │   ├── Portfolio.vue      # External links (GitHub, LinkedIn, etc.)
│   │   ├── Privacy.vue        # Full privacy policy
│   │   └── NotFound.vue       # 404 page
│   ├── App.vue                # Root component (wraps Navbar + router-view + Footer)
│   ├── main.js                # App entry point; creates Vue app + router
│   └── routes.js              # Vue Router route definitions
├── index.html                 # HTML entry point; Google Analytics embedded here
├── package.json
├── tailwind.config.js         # PurgeCSS paths configured here
├── postcss.config.js          # Tailwind + Autoprefixer plugins
└── README.md                  # Icon inventory and tech stack summary
```

## Development Workflow

### Prerequisites

```bash
node >= 12  # Vite 1.x requirement
npm
```

### Common Commands

```bash
# Install dependencies
npm install

# Start local dev server (with HMR)
npm run dev

# Production build (outputs to dist/)
npm run build
```

The dev server starts on `http://localhost:3000` by default (Vite 1.x).

### No Test Suite

This project has no unit or end-to-end tests. There are no test scripts in `package.json` and no test files in the repo. Do not add test infrastructure unless explicitly requested.

## Deployment

Deployment is fully automated via GitHub Actions on push to `main`.

**CI/CD pipeline** (`.github/workflows/azure-static-web-apps-lemon-water-0786c1d1e.yml`):
1. Triggers on push to `main` or PR open/close
2. Runs `npm run build` via the Azure Static Web Apps Deploy action
3. Uploads `dist/` to Azure Static Web Apps ("Lemon Water" instance)
4. PR close events trigger resource cleanup

**SPA routing**: `public/routes.json` configures Azure to serve `index.html` for all routes (`/*`), enabling client-side navigation.

**Required secrets** (set in GitHub repo settings):
- `AZURE_STATIC_WEB_APPS_API_TOKEN_LEMON_WATER_0786C1D1E`
- `GITHUB_TOKEN` (auto-provided)

## Architecture and Conventions

### Vue Component Conventions

- All components use the **Options API** (not Composition API)
- Single File Components (`.vue`) with `<template>`, `<script>`, and `<style>` sections
- **PascalCase** filenames for components (`Navbar.vue`, `IconLink.vue`)
- Page-level components live in `src/views/`; reusable pieces in `src/components/`
- No Vuex/Pinia — there is no global state management (site is essentially static content)

### Routing

Routes are defined in `src/routes.js` and initialized in `src/main.js`:

| Path | Component |
|------|-----------|
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/portfolio` | Portfolio |
| `/privacy` | Privacy |
| `/*` | NotFound (catch-all 404) |

### Styling

- **Tailwind CSS utility classes only** — no custom CSS except the gradient in `App.vue`
- **Mobile-first** responsive design using Tailwind breakpoint prefixes (`lg:`, `md:`)
- PurgeCSS is configured in `tailwind.config.js` to strip unused classes from the build
- The custom icon font is loaded via `src/assets/icons/iconfont.css`

### Icon System

Icons are rendered using a custom icon font (generated via Icones.netlify.app). The class pattern is:

```html
<span class="i <icon-name>"></span>
```

The `IconLink.vue` component wraps icons with optional labels and hyperlinks. Pass an `item` object with `url`, `icon`, and `alt` props.

### Contact Form

The Contact page uses **Formspree** (`https://formspree.io/mike.wright@itsallwater.net`) to handle form submissions without a backend. A hidden honeypot field (`_gotcha`) is included to reduce spam.

### Analytics

Google Analytics (UA-127913068-1) is embedded directly in `index.html` via a `<script>` tag — not via a Vue plugin.

## Key Files to Understand

| File | Why it matters |
|------|---------------|
| `src/main.js` | App bootstrap; HMR logic for routes |
| `src/routes.js` | All client-side routes defined here |
| `src/App.vue` | Root layout (Navbar + Footer wrap everything) |
| `src/components/IconLink.vue` | Shared component for all icon links |
| `public/routes.json` | Required for Azure SPA routing to work |
| `tailwind.config.js` | PurgeCSS content paths — update if adding new file types |
| `.github/workflows/azure-static-web-apps-*.yml` | Production deployment pipeline |

## Common Tasks

### Adding a new page

1. Create `src/views/NewPage.vue`
2. Add a route entry in `src/routes.js`
3. Optionally add a nav link in `src/components/Navbar.vue`

### Adding a new icon link (e.g., in Portfolio or About)

Use the `IconLink` component:
```vue
<IconLink :item="{ url: 'https://...', icon: 'i icon-name', alt: 'Label' }" />
```

Or list it in a data array and render with `v-for`:
```js
{ url: 'https://...', icon: 'i icon-name', alt: 'Label' }
```

### Updating the resume

Replace `public/resume.pdf`. No code changes needed — the Portfolio page links directly to `/resume.pdf`.

### Modifying styles

Add Tailwind classes directly in component templates. If you genuinely need custom CSS not expressible with Tailwind, add it to the component's `<style>` block (scoped or unscoped as appropriate).

## Dependencies Note

The dependency versions are intentionally older (Vite 1.x, Tailwind 1.x, Vue Router 4 beta) and reflect when the project was last substantially updated (~2020–2021). Upgrades would require:
- **Vite 1 → 5+**: Config file changes (`vite.config.js`), plugin updates
- **Tailwind 1 → 3+**: JIT mode, new config format, purge → content rename
- **Vue Router beta → stable**: Minimal API changes

Do not upgrade dependencies unless explicitly asked to do so.
