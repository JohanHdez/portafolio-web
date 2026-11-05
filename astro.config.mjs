import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicado en Railway (tools/deploy.sh). Si algún día hay dominio propio, cámbialo aquí y en public/robots.txt.
export default defineConfig({
  site: 'https://johanhdez.up.railway.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-CO', en: 'en-US' } } })],
});
