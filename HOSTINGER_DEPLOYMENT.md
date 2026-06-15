# HoorStyle Hostinger Node.js Deployment Guide

This package has been prepared for Hostinger Node.js deployment while keeping Supabase as the database/auth/storage backend.

## What I changed

- Added production `start` script: `node .output/server/index.mjs`
- Changed production build script to use Node server output: `NITRO_PRESET=node-server vite build`
- Added Node engine setting: Node 22
- Added `scripts/hostinger-check.mjs` to check required environment variables
- Added `.env.hostinger.example` for Hostinger environment setup
- Updated Supabase missing-env error messages so they no longer say “Connect Supabase in Lovable Cloud”
- Prepared the ZIP with `package.json` at the root, which is required for Hostinger upload

## Important

This does **not** remove Supabase yet. Your app still uses Supabase for:

- Auth/login
- Products
- Orders
- Customers
- Storage/images
- Admin data
- Builder/templates
- Tracking/email logs

This package only removes Lovable Cloud as the live hosting platform.

## Hostinger settings

Use these values:

- Framework: Other
- Node version: 22
- Build command: `npm run build`
- Start command: `npm run start`
- Output directory: `.output`
- Entry file: `.output/server/index.mjs`

## Environment variables

Add these in Hostinger hPanel → Node.js App → Environment variables:

```env
NODE_ENV=production
NITRO_PRESET=node-server

SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY

VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY
VITE_SUPABASE_PROJECT_ID=YOUR_PROJECT_REF
```

Your project ref from the uploaded file appears to be:

```text
xofyvcvrzxxroyemddlj
```

So the Supabase URL should be:

```text
https://xofyvcvrzxxroyemddlj.supabase.co
```

Never put `SUPABASE_SERVICE_ROLE_KEY` inside frontend code or public GitHub.

## Hostinger email / SMTP

For Hostinger email, use:

```text
SMTP Host: smtp.hostinger.com
SMTP Port: 465
Encryption: SSL
Username: your full domain email address
Password: your domain email password
```

Alternative if 465 SSL does not work:

```text
SMTP Port: 587
Encryption: TLS / STARTTLS
```

If your app saves SMTP from the admin panel, configure it there after deployment.

## Supabase Auth URL settings

After Hostinger deployment, go to Supabase Dashboard:

Authentication → URL Configuration

Set:

```text
Site URL: https://yourdomain.com
Redirect URLs:
https://yourdomain.com/**
https://www.yourdomain.com/**
```

Without this, login, signup, and password reset may fail.

## Deployment steps

1. Upload the provided `hoorstyle-hostinger-ready.zip` to Hostinger Node.js app.
2. Add the environment variables above.
3. Set Node version to 22.
4. Set build command to `npm run build`.
5. Set start command to `npm run start`.
6. Deploy/build.
7. Open your domain.
8. Test the checklist below.

## Test checklist after deployment

- Homepage opens
- Shop page opens
- Product page opens
- Product images load
- Add to cart works
- Checkout opens
- Order creates successfully
- Customer order email sends
- Admin order email sends
- Admin login works
- Product add/edit works
- Image upload works
- Page builder opens
- Template activation works
- Meta Pixel/CAPI settings open
- Google Analytics/Search Console settings open
- `/sitemap.xml` opens
- `/robots.txt` opens

## If build fails

Check these first:

1. Node version is 22
2. `package.json` is at the ZIP root
3. Environment variables are added before build
4. Build command is exactly `npm run build`
5. Start command is exactly `npm run start`
6. Hostinger plan supports Node.js apps

## If site opens but admin/data does not work

Check:

1. `SUPABASE_URL` is correct
2. `SUPABASE_PUBLISHABLE_KEY` is correct
3. `SUPABASE_SERVICE_ROLE_KEY` is added
4. Supabase Auth redirect URL includes your domain
5. Supabase Storage policies allow required image access

## Lovable-only features

Some optional AI helper features may still use Lovable gateway variables, such as:

- Brand AI assistant
- SEO AI suggestion helper
- Google Search Console connector gateway if it was built using Lovable connector

The core ecommerce store does not require these features to load. They can be replaced later with OpenAI/Google APIs if needed.
