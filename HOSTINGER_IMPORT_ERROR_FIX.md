# Hostinger Git Import Error Fix

If Hostinger shows:

> Unsupported framework or invalid project structure

it usually means Hostinger cannot detect a supported app in the selected GitHub repository.

This package has been adjusted to look like a normal Node/Express app:

- root `package.json`
- root `app.js`
- `main: app.js`
- dependency: `express`
- build command: `npm run build`
- start command: `npm run start`

## Important GitHub structure

When opening the GitHub repo, these files must be visible immediately at the top level:

```text
package.json
app.js
server.js
vite.config.ts
src/
supabase/
```

Do not upload the ZIP file itself into GitHub. Unzip it first, then upload/push the files inside.

## Hostinger settings

Use Node.js Web App, not Static Website.

- Framework: Other / Node.js / Express if shown
- Node version: 22
- Build command: npm run build
- Start command: npm run start
- Entry file: app.js
- Output directory: .output

## Environment variables

Add in Hostinger only, not in GitHub:

```env
NODE_ENV=production
NITRO_PRESET=node-server
SUPABASE_URL=https://xofyvcvrzxxroyemddlj.supabase.co
SUPABASE_PUBLISHABLE_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
VITE_SUPABASE_URL=https://xofyvcvrzxxroyemddlj.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_key
VITE_SUPABASE_PROJECT_ID=xofyvcvrzxxroyemddlj
```
