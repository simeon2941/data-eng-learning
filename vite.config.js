// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "https://demastery.com/", // Use your custom domain
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
