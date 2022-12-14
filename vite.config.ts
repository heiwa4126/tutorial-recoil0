import react from "@vitejs/plugin-react";
import { ConfigEnv, defineConfig, UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  const cfg: UserConfig = {
    plugins: [react()],
    build: {
      //// https://terser.org/docs/api-reference#minify-options
      // minify: "terser",
      // terserOptions: {
      //   compress: {
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

  if (command === "build") {
    // when `vite build`
    cfg.esbuild = {
      drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
    };
  }

  return cfg;
});
