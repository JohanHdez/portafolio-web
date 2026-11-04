# Johan Hernández — Portafolio

Portafolio personal como **AI Solutions Architect**. Sitio estático bilingüe (ES/EN) hecho con [Astro](https://astro.build).

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Dónde editar

| Qué | Archivo |
|---|---|
| Textos ES/EN, proyectos, experiencia, stack, contacto | `src/data/site.ts` |
| Estructura de la página | `src/components/Home.astro` |
| SEO (title, Open Graph, hreflang, JSON-LD) | `src/layouts/Base.astro` |
| Estilos | `src/styles/global.css` |
| Imagen para compartir en redes | `public/og.png` (1200×630) |

Para **agregar un proyecto**, añade un objeto al arreglo `projects` en `src/data/site.ts`. Con `featured: true` aparece en grande.

## Despliegue (Vercel)

1. Importa el repo en Vercel; detecta Astro solo (build `npm run build`, salida `dist`).
2. Cuando tengas dominio propio, cámbialo en `site` de `astro.config.mjs` y en `public/robots.txt`.

La versión anterior (Angular 13) sigue en la rama `main` del historial.
