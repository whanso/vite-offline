import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      mode: "development",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      injectManifest: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallbackAllowlist: [/^index.html$/],
      },
    }),
  ],
});
