import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// Note: Sitemap integration temporarily disabled due to compatibility issue
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.wireless-experts.com',
  integrations: [
    tailwind()
    // sitemap() - TODO: Re-enable after compatibility issue is resolved
  ],
  build: {
    format: 'directory'
  }
});
