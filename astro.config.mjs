import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Set this to your production URL (updated during deployment)
  site: 'https://example.com',
  output: 'static',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
