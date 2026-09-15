# Portafolio profesional

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react. Export estático (`output: 'export'`), desplegado en Cloudflare Pages.

## Desarrollo (Docker)

```bash
docker compose up --build   # http://localhost:3001
docker compose down
```

El código del host se monta como volumen — los cambios en `data/*.ts` o componentes recargan solos (hot reload) dentro del container.

### Alternativa sin Docker

```bash
npm run dev      # http://localhost:3000
npm run build    # genera out/ (export estático)
npm run lint
```

## Contenido editable

Todo el contenido personal vive en `data/*.ts` — no hay textos ni links dentro de los componentes:

- `data/profile.ts` — nombre, cargo, bio, ubicación, idiomas, CV, redes
- `data/projects.ts` — proyectos (e-commerce, ERP y los que agregues), incluye el Case Study del ERP
- `data/experience.ts` — experiencia laboral
- `data/skills.ts` — stack por categoría
- `data/education.ts` — educación y certificaciones

## Antes de publicar

1. `grep -rn "TODO:" data/ public/` — reemplaza cada placeholder por tu información real.
2. Sube tu CV a `public/cv/` y actualiza `profile.cvUrl` en `data/profile.ts`.
3. Sube screenshots reales a `public/images/projects/` y pon `isPlaceholderImage: false` en cada proyecto/módulo de `data/projects.ts`.
4. Completa `demoUrl` y `repoUrl` de tus proyectos. Si un repo es privado, deja `repoUrl: null` y `isRepoPrivate: true` — nunca se genera un enlace roto.
5. Reemplaza el dominio placeholder en `app/sitemap.ts` y `app/robots.ts`.
6. Agrega `public/og-image.png` (1200x630) y descomenta `images` en `app/layout.tsx`.
7. `npm run build` y sirve `out/` localmente (`npx serve out`) para probar el export estático.
8. Verifica que no haya credenciales del proyecto ERP: `grep -rniE "supabase_key|service_role|password|token" data/ components/ app/ public/`.

## Deploy — Cloudflare Pages (solo esto, no Vercel)

Repo: https://github.com/Richard282004/portfolio-richard-lagos

Conectar el repo desde el dashboard de Cloudflare Pages (Workers & Pages → Create → Pages → Connect to Git) con esta configuración de build:

| Campo | Valor |
|---|---|
| Framework preset | Next.js (Static HTML Export) — o "None" |
| Build command | `npm run build` |
| Build output directory | `out` |
| Versión de Node | 22 (via `.nvmrc`, Cloudflare lo detecta solo) |

Cada push a `main` dispara un build y deploy automático. No se usa Vercel ni Wrangler CLI para esto.
