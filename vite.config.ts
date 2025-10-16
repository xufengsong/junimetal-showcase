import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import vercel from "vite-plugin-vercel";

// Note: We are temporarily removing lovable-tagger to ensure a clean test.
// You can add it back after we confirm the API works.

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    // Always include the Vercel plugin.
    // It should generally come before the framework plugin (react).
    vercel(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});