# Environment variables

This project is prepared for Hostinger Node.js deployment while keeping Supabase as the backend for database, auth, and storage.

## Required Hostinger variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `NODE_ENV` | server | Use `production` |
| `NITRO_PRESET` | build + server | Use `node-server` for Hostinger Node.js |
| `VITE_SUPABASE_URL` | client + server build | Public Supabase API URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | client + server build | Public anon/publishable key |
| `VITE_SUPABASE_PROJECT_ID` | client build | Supabase project ref |
| `SUPABASE_URL` | server | Supabase API URL |
| `SUPABASE_PUBLISHABLE_KEY` | server | Public anon/publishable key for server auth middleware |
| `SUPABASE_SERVICE_ROLE_KEY` | server only | Privileged backend operations. Never expose to browser. |

## Optional variables

| Variable | Purpose |
| --- | --- |
| `SMTP_HOST` | SMTP host, e.g. `smtp.hostinger.com` |
| `SMTP_PORT` | SMTP port, e.g. `465` |
| `SMTP_USERNAME` | Full domain email address |
| `SMTP_PASSWORD` | Email password |
| `META_PIXEL_ID` | Optional front-end Meta Pixel fallback |
| `META_CAPI_ACCESS_TOKEN` | Optional server-side Conversions API fallback |
| `META_TEST_EVENT_CODE` | Optional CAPI test event code |
| `GOOGLE_ANALYTICS_ID` | Optional GA4 fallback |
| `GOOGLE_SITE_VERIFICATION` | Optional Google verification fallback |
| `LOVABLE_API_KEY` | Optional only for old Lovable AI helper features, not core store hosting |

## Notes

- Add real values in Hostinger environment variables, not in public code.
- The deployment ZIP intentionally does not include the original `.env` file.
- Keep Supabase enabled until a separate database/auth/storage migration is completed.
