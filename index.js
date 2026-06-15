import express from 'express';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const builtServer = resolve(process.cwd(), 'app/.output/server/index.mjs');

if (existsSync(builtServer)) {
  await import(builtServer);
} else {
  const app = express();
  const port = process.env.PORT || process.env.NITRO_PORT || 3000;
  app.get('*', (_req, res) => {
    res.status(503).send(`
      <h1>HoorStyle build not found yet</h1>
      <p>The Hostinger wrapper is working, but app/.output/server/index.mjs was not found.</p>
      <p>Run: <code>npm run build</code>, then <code>npm run start</code>.</p>
    `);
  });
  app.listen(port, () => {
    console.log(`HoorStyle wrapper fallback listening on port ${port}`);
    console.log(`Expected built server at: ${builtServer}`);
  });
}
