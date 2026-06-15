import { existsSync } from "node:fs";
import { resolve } from "node:path";

const entry = resolve(".output/server/index.mjs");

if (!existsSync(entry)) {
  console.error("Production server file not found: .output/server/index.mjs");
  console.error("Run npm run build before npm run start.");
  process.exit(1);
}

await import(entry);
