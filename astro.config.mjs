// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.postureperfectwellnesscenter.com',
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/home-2') })],
  vite: {
    plugins: [tailwindcss()],
  },
});
