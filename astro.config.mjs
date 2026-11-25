// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { redirects } from './redirects.mjs';

export default defineConfig({
  site: 'https://www.postureperfectwellnesscenter.com',
  trailingSlash: 'always',
  redirects,
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/home-2') && !page.endsWith('/about/'), lastmod: new Date() })],
  vite: {
    plugins: [tailwindcss()],
  },
});
