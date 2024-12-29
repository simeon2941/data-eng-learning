// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // This should match your deployment URL
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Create separate chunks for examples
          if (id.includes("/examples/")) {
            return "examples";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    // Ensure source files are included in the build
    assetsInclude: ["**/*.jsx", "**/*.js"],
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
});
