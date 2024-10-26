import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  // used to generate images
  site:
    process.env.VERCEL_ENV === 'production'
      ? 'https://wrideveloper.github.io/'
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/`
      : 'https://localhost:3000/',
      base: 'Hacktober2024-CICD',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});