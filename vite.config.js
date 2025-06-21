import css from "rollup-plugin-import-css";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      ...css({ modules: true }),
      enforce: 'post'
    }
  ]
});
