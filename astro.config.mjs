// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  site: 'https://easydiagrams.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ja'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
