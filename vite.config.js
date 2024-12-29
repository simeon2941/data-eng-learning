// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper to copy directory recursively
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-examples",
      writeBundle() {
        // Copy examples directory to dist
        const examplesDir = path.resolve(__dirname, "src/examples");
        const destDir = path.resolve(__dirname, "dist/examples");
        if (fs.existsSync(examplesDir)) {
          copyDirectory(examplesDir, destDir);
        }
      },
    },
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("recharts") ||
              id.includes("lucide-react")
            ) {
              return "vendor";
            }
          }
          return null;
        },
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/",
  server: {
    port: 3000,
  },
});
