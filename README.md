# Modern Academic E-Portfolio

A redesigned three-page academic e-portfolio built with React, Vite, Tailwind CSS, and React Router DOM.

## Pages
- `/` — Home / student identity and editorial introduction
- `/page-2` — Academic Archive with category filters
- `/page-3` — Reflections / personal academic space

## Main additions
- Purpose-built editorial academic layout
- Light / Dark theme toggle with localStorage persistence
- System theme preference on first visit
- Theme anti-flash script in `index.html`
- Responsive mobile navigation
- Filterable archive data model
- Shared design tokens through CSS variables
- Reduced-motion support
- Existing `Juswa.jpeg` profile image retained and used in the hero

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Edit content
Most editable content is centralized in:

`src/data/portfolioData.js`

Update the `student`, `archiveItems`, and `reflections` objects/arrays as your academic content changes.
