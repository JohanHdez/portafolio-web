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

Para **agregar un proyecto**, añade un objeto a `cases` (casos grandes) o a `smallProjects` en `src/data/site.ts`.

**Repos privados:** con `privateRepo` (en `smallProjects`) o `requestAccess` (en `cases`) aparece el botón
"Pedir acceso al código". Abre un correo ya escrito con el nombre del proyecto, el enlace del repositorio y
los datos que hacen falta para dar acceso (nombre, empresa, usuario de GitHub y para qué lo quieren ver).
La plantilla del mensaje está en `ui.*.request` de `src/data/site.ts`.

## Despliegue (Railway)

Publicado en **https://johanhdez.up.railway.app** (Railway, proyecto `portafolio`, servicio `web`).
No está conectado a GitHub: un push no lo actualiza. Para publicar:

```bash
bash tools/deploy.sh   # npm run build + sube dist/ servido con Caddy (tools/railway/)
```

Necesita la CLI de Railway con sesión iniciada y la carpeta vinculada (`railway link`, una sola vez).
Si algún día hay dominio propio, cámbialo en `site` de `astro.config.mjs` y en `public/robots.txt`.

La versión anterior (Angular 13) sigue en la rama `main` del historial.
