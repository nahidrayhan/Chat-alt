import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({ preset: "node-server" }),
    viteReact(),
    tailwindcss(),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
