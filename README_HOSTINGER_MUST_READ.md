# HoorStyle Hostinger Import Fix

This repo is intentionally structured as a small Vite + React project so Hostinger can detect it.

The real HoorStyle TanStack app is stored in `vendor/hoorstyle-app-source.tgz` and is extracted during `npm run build`.

## Hostinger settings

- Framework: Vite / React
- Node version: 22
- Build command: `npm run build`
- Start command: `npm run start`
- Entry file: `index.js`
- Output directory: leave empty or use `app/.output`

## Very important

Do not unzip `vendor/hoorstyle-app-source.tgz` manually before importing into Hostinger. The scanner may reject the app if it sees the real TanStack project at the repo root.

Add Supabase environment variables in Hostinger, not GitHub.
