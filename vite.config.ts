import { ConfigEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    plugins: [react()],
    esbuild:
      command === "build"
        ? {
            drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
          }
        : null,
    build: {
      //// https://terser.org/docs/api-reference#minify-options
      // minify: "terser",
      // terserOptions: {
      //   compress: {
      //     passes: 2,
      //     drop_console: true,
      //     drop_debugger: true,
      //   },
      // },
      rollupOptions: {
        output: {
          manualChunks: {
            v: ["react", "react-dom", "recoil", "immer"],
          },
        },
      },
    },
  };
});
