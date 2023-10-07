import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind(), prefetch(), solidJs()],
});
