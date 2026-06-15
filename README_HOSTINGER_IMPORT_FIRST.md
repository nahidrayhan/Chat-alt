# HoorStyle Hostinger Import Fix

This repo root intentionally looks like a standard Vite + React app so Hostinger's Git importer can detect it.

The real HoorStyle website is inside `/app`.

Use these Hostinger settings after the repo is accepted:

- Framework: Vite / React / Other
- Node version: 22
- Root directory: leave empty
- Build command: `npm run build`
- Start command: `npm run start`
- Entry file: `index.js`
- Output directory: `app/.output`

Root `npm run build` runs:

```bash
cd app && npm install && npm run build
```

Root `npm run start` starts the built TanStack/Nitro server through `index.js`.

Add Supabase variables only in Hostinger, not GitHub.
