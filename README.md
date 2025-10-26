# The Burger Tavern — React (Part 8)

React rebuild of your Burger Tavern site. Keeps the white/red color scheme and overall style, and breaks the site into **pages** and **components** like the rubric requires.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Create a new GitHub repo (e.g., `burger-tavern-react`).
2. In `vite.config.js`, set:
   ```js
   base: '/<YOUR_REPO_NAME>/'
   ```
3. Push to GitHub.
4. Enable **Pages** → Source: `GitHub Actions` or use the provided script:
   ```bash
   npm run deploy
   ```
   (This uses `gh-pages` to publish `dist/` to the `gh-pages` branch.)

## Structure
- `src/components/*` — Navbar, Footer, MenuItemCard, etc.
- `src/pages/*` — Home, Menu, About, Contact, Order, Item
- `src/styles/base.css` — Ported + cleaned CSS (responsive; vertical nav on small screens)
- `public/menu.json` — Placeholder for later JSON-driven lists (not required yet)

## Notes for the rubric
- **All Pages / Styles / Pictures** — Implemented with the same look/feel. Images use temporary placeholders (`picsum.photos`) — replace with your own URLs when ready.
- **Responsive** — Layout and nav adapt for small screens (nav stacks vertically; no JS toggle needed for this part).
- **Components for list items** — `MenuItemCard` is reused for burgers and sides. `Item` page shows a detail view from a small in-file database.
- **No forms / toggle / JSON fetching required yet** — Contact form is UI-only for now; no toggle logic; JSON file is included for future parts.
