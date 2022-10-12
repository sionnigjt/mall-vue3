import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import pxtoViePort from "postcss-px-to-viewport";

// const loder_pxtovw = pxtoViePort({
//   unitToConvert: "px",
//   viewportWidth: 750,
//   viewportUnit: "vw",
// });
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // css: {
  //   postcss: {
  //     plugins: [loder_pxtovw],
  //   },
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
