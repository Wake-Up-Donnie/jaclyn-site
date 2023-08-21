import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/static';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://jaclynfiorehair.com',
  adapter: vercel({
    analytics: true
  }),
  integrations: [sitemap()]
});