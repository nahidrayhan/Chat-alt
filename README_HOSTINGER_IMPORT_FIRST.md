# Hostinger import fix

This repository is intentionally structured with a simple Express-compatible Node wrapper at the root so Hostinger can detect/import it.

Root files Hostinger should see:
- package.json
- index.js
- app/

The real HoorStyle TanStack Start app is inside `/app`.

Use Hostinger settings:
- Framework: Express.js / Other / Node.js
- Node version: 22
- Root directory: leave empty or `/`
- Build command: `npm run build`
- Start command: `npm run start`
- Entry file: `index.js`
- Output directory: leave empty or use `app/.output` if Hostinger asks

Add environment variables in Hostinger, not GitHub:
- NODE_ENV=production
- NITRO_PRESET=node-server
- SUPABASE_URL=...
- SUPABASE_PUBLISHABLE_KEY=...
- SUPABASE_SERVICE_ROLE_KEY=...
- VITE_SUPABASE_URL=...
- VITE_SUPABASE_PUBLISHABLE_KEY=...
- VITE_SUPABASE_PROJECT_ID=...

Do not upload the ZIP itself to GitHub. Unzip and upload the inside files so GitHub root shows package.json, index.js, and app/.
