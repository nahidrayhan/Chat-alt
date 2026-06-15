# Hostinger GitHub import fix

This repo is prepared for Hostinger Git import.

Required repo structure:

```
package.json
server.js
vite.config.ts
src/
supabase/
```

Do not put the project inside another parent folder in GitHub. `package.json` must be visible immediately when the repository opens.

Hostinger settings:

- Framework: Other / Node.js
- Node version: 22
- Build command: `npm run build`
- Start command: `npm run start`
- Entry file: `server.js`
- Output directory: `.output`

Environment variables must be added in Hostinger before build.
