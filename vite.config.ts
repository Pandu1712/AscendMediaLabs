import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Split vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — cached separately
          "vendor-react": ["react", "react-dom"],
          // Framer Motion — large animation lib
          "vendor-motion": ["framer-motion"],
          // Three.js / 3D — heaviest chunk, loaded last
          "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"],
        },
      },
    },
    // Increase chunk size warning limit (3D libs are legitimately large)
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: "esbuild",
    // Drop console logs in production
    esbuildOptions: {
      drop: ["console", "debugger"],
    },
  },
}));
