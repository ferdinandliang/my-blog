import { defineConfig } from "astro/config";
import path from "node:path";

const emptyModule = path.resolve("./src/empty-stub.js");

export default defineConfig({
  site: "https://your-domain.vercel.app",
  vite: {
    resolve: {
      alias: {
        "aria-query": emptyModule,
        "axobject-query": emptyModule,
      },
    },
  },
});