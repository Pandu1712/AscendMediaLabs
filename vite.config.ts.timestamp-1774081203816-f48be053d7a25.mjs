// vite.config.ts
import { defineConfig } from "file:///E:/AscendMediaLabs/node_modules/vite/dist/node/index.js";
import react from "file:///E:/AscendMediaLabs/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///E:/AscendMediaLabs/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "E:\\AscendMediaLabs";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
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
          "vendor-three": ["three", "@react-three/fiber", "@react-three/drei"]
        }
      }
    },
    // Increase chunk size warning limit (3D libs are legitimately large)
    chunkSizeWarningLimit: 1e3,
    // Enable minification
    minify: "esbuild",
    // Drop console logs in production
    esbuildOptions: {
      drop: ["console", "debugger"]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxBc2NlbmRNZWRpYUxhYnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEFzY2VuZE1lZGlhTGFic1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQXNjZW5kTWVkaWFMYWJzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiBcIjo6XCIsXG4gICAgcG9ydDogODA4MCxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCldLmZpbHRlcihCb29sZWFuKSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIFNwbGl0IHZlbmRvciBjaHVua3MgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFJlYWN0IGNvcmUgXHUyMDE0IGNhY2hlZCBzZXBhcmF0ZWx5XG4gICAgICAgICAgXCJ2ZW5kb3ItcmVhY3RcIjogW1wicmVhY3RcIiwgXCJyZWFjdC1kb21cIl0sXG4gICAgICAgICAgLy8gRnJhbWVyIE1vdGlvbiBcdTIwMTQgbGFyZ2UgYW5pbWF0aW9uIGxpYlxuICAgICAgICAgIFwidmVuZG9yLW1vdGlvblwiOiBbXCJmcmFtZXItbW90aW9uXCJdLFxuICAgICAgICAgIC8vIFRocmVlLmpzIC8gM0QgXHUyMDE0IGhlYXZpZXN0IGNodW5rLCBsb2FkZWQgbGFzdFxuICAgICAgICAgIFwidmVuZG9yLXRocmVlXCI6IFtcInRocmVlXCIsIFwiQHJlYWN0LXRocmVlL2ZpYmVyXCIsIFwiQHJlYWN0LXRocmVlL2RyZWlcIl0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gSW5jcmVhc2UgY2h1bmsgc2l6ZSB3YXJuaW5nIGxpbWl0ICgzRCBsaWJzIGFyZSBsZWdpdGltYXRlbHkgbGFyZ2UpXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAxMDAwLFxuICAgIC8vIEVuYWJsZSBtaW5pZmljYXRpb25cbiAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxuICAgIC8vIERyb3AgY29uc29sZSBsb2dzIGluIHByb2R1Y3Rpb25cbiAgICBlc2J1aWxkT3B0aW9uczoge1xuICAgICAgZHJvcDogW1wiY29uc29sZVwiLCBcImRlYnVnZ2VyXCJdLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTRPLFNBQVMsb0JBQW9CO0FBQ3pRLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFIaEMsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxTQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxpQkFBaUIsZ0JBQWdCLENBQUMsRUFBRSxPQUFPLE9BQU87QUFBQSxFQUM5RSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosZ0JBQWdCLENBQUMsU0FBUyxXQUFXO0FBQUE7QUFBQSxVQUVyQyxpQkFBaUIsQ0FBQyxlQUFlO0FBQUE7QUFBQSxVQUVqQyxnQkFBZ0IsQ0FBQyxTQUFTLHNCQUFzQixtQkFBbUI7QUFBQSxRQUNyRTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsUUFBUTtBQUFBO0FBQUEsSUFFUixnQkFBZ0I7QUFBQSxNQUNkLE1BQU0sQ0FBQyxXQUFXLFVBQVU7QUFBQSxJQUM5QjtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
