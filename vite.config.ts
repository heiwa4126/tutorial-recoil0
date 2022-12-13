import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        passes: 2,
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          v: ["react", "react-dom", "recoil", "immer"],
        },
      },
    },
  },
});
