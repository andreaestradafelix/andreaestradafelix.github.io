# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



--------------------------------------------------

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Production build to dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint on all JS/JSX files
```

No test suite is configured.

## Architecture

Single-page portfolio built with React 19 + Vite. All sections render sequentially in `src/App.jsx` — Navbar, Hero, Ticker, WhatIBuild, Available, About (with TechStack), Projects, Contact, Footer.

**Content data** lives in one place: `src/data/portfolioData.js`. This exports `builds`, `projects`, `techStack`, and `tickerItems`. Update content here; components read from it — don't hardcode content in components.

**Components** (`src/components/`) are one file per section with no shared state between them. The WhatIBuild carousel manages its own index with `useState`.

**Styles** follow an `ae-` prefix convention (Andrea Estrada initials) for all custom classes. `src/styles/portfolio.css` holds the bulk of styles (navbar, hero, ticker, carousel, about, tech stack, footer). Section-specific overrides live in `contact.css` and `projects.css`. `src/index.css` and `src/App.css` are fully commented out (leftover Vite template — ignore them).

Responsive breakpoints: `≤768px` (tablet) and `≤576px` (mobile), both defined at the bottom of `portfolio.css`.

**Bootstrap grid class names** (`row`, `col-12`, `col-md-8`, `d-flex`, `g-0`, `px-2`) appear in JSX but Bootstrap is **not installed or linked** — these class names have no effect. Layout is handled entirely by the custom CSS in `src/styles/`.

**Static assets** (CV/resume files) are served from `public/cv/`. The Gabarito font is loaded via Google Fonts CDN in `index.html`.