import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://my-blog.vercel.app",
  vite: {
    optimizeDeps: {
      exclude: ["aria-query", "axobject-query"],
    },
  },
});
