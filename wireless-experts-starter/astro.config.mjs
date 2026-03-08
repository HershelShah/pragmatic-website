import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://www.wireless-experts.com',
  integrations: [
    tailwind(),
    sitemap(),
    react(),
    ...(isProd ? [] : [keystatic()]),
  ],
  build: {
    format: 'directory'
  }
});
