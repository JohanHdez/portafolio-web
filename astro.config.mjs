import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cambia `site` por tu dominio final (p. ej. https://johanhernandez.dev) cuando lo tengas.
export default defineConfig({
  site: 'https://johanhdez.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } } })],
});
