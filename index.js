import { existsSync } from 'node:fs';
import { join } from 'node:path';

const builtServer = join(process.cwd(), 'app', '.output', 'server', 'index.mjs');

if (!existsSync(builtServer)) {
  console.error('Built app server not found at:', builtServer);
  console.error('Run npm run build first.');
  process.exit(1);
}

process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.NITRO_PRESET = process.env.NITRO_PRESET || 'node-server';
process.env.PORT = process.env.PORT || process.env.NITRO_PORT || '3000';
process.env.NITRO_PORT = process.env.NITRO_PORT || process.env.PORT;

console.log('Starting HoorStyle app from', builtServer);
await import(builtServer);
