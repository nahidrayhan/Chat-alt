import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detection-only Vite config for Hostinger's importer.
// Real app config is in /app/vite.config.ts and is used by root npm run build.
export default defineConfig({
  plugins: [react()],
});
