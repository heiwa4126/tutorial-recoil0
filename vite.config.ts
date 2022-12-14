import { ConfigEnv, defineConfig, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig(({ command }: ConfigEnv) => {
  const cfg: UserConfigExport = {
    plugins: [react()],
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

  if (command === "build") {
    cfg.esbuild = {
      drop: ["console", "debugger"], // https://esbuild.github.io/api/#drop
    };
  }

  return cfg;
});
