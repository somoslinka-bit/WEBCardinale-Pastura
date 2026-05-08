<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Website Reverse-Engineer Template

## What This Is
A reusable template for reverse-engineering any website into a clean, modern Next.js codebase using AI coding agents. The Next.js + shadcn/ui + Tailwind v4 base is pre-scaffolded — just run `/clone-website <url1> [<url2> ...]`.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (default — will be replaced/supplemented by extracted SVGs)
- **Styling:** Tailwind CSS v4 with oklch design tokens
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first

## Design Principles
- **Pixel-perfect emulation** — match the target's spacing, colors, typography exactly
- **No personal aesthetic changes during emulation phase** — match 1:1 first, customize later
- **Real content** — use actual text and assets from the target site, not placeholders
- **Beauty-first** — every pixel matters

## Project Structure
```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # Extracted SVG icons as React components
  lib/
    utils.ts        # cn() utility (shadcn)
  types/            # TypeScript interfaces
  hooks/            # Custom React hooks
public/
  images/           # Downloaded images from target site
  videos/           # Downloaded videos from target site
  seo/              # Favicons, OG images, webmanifest
docs/
  research/         # Inspection output (design tokens, components, layout)
  design-references/ # Screenshots and visual references
scripts/            # Asset download scripts
```

## MOST IMPORTANT NOTES
- When launching Claude Code agent teams, ALWAYS have each teammate work in their own worktree branch and merge everyone's work at the end, resolving any merge conflicts smartly since you are basically serving the orchestrator role and have full context to our goals, work given, work achieved, and desired outcomes.
- After editing `AGENTS.md`, run `bash scripts/sync-agent-rules.sh` to regenerate platform-specific instruction files.
- After editing `.claude/skills/clone-website/SKILL.md`, run `node scripts/sync-skills.mjs` to regenerate the skill for all platforms.

---

# Contexto LINKA

Este proyecto es operado por **LINKA**, agencia de marketing digital de Tandil, Argentina.
El flujo de trabajo tiene dos fases bien definidas: primero clonar, después personalizar con el material del cliente.

## Quiénes somos
- Agencia de marketing digital para pymes locales (Tandil y zona)
- Servicios: Google Ads, Meta Ads, SEO, desarrollo web
- Director: Francisco Mendiberri
- Email: somoslinka@gmail.com
- Instagram: @publicidad.linka

## Identidad de marca LINKA
- Color primario: `#2A5C72`
- Fuente: Plus Jakarta Sans
- Tono de copy: cercano, directo, en español rioplatense

## Workflow de dos fases

### Fase 1 — Clonado (estructura base)
1. Ejecutar `/clone-website <url>` para clonar el sitio objetivo
2. El clon debe ser pixel-perfect: colores, tipografía, espaciado y assets del original
3. No hacer cambios estéticos propios en esta fase — primero replicar, después adaptar
4. Al terminar el clon, hacer commit: `git commit -m "feat: clone base de <nombre-sitio>"`

### Fase 2 — Personalización con material del cliente
1. Colocar los assets del cliente en `client/assets/` (ver estructura abajo)
2. Completar `client/BRIEF.md` con la información del cliente
3. Reemplazar en el código:
   - **Logos e imágenes** → usar los de `client/assets/images/`
   - **Textos y copy** → usar el contenido de `client/BRIEF.md`, respetando el tono en español rioplatense
   - **Colores** → actualizar los design tokens en `src/app/globals.css` con la paleta del cliente
   - **Tipografía** → cambiar la fuente si el cliente tiene una definida
   - **Datos de contacto** → teléfono, dirección, email, redes sociales del cliente
   - **SEO** → title, description, og:image con los datos reales del cliente
4. Al terminar, hacer commit: `git commit -m "feat: personalización <nombre-cliente>"`

## Estructura de assets del cliente

Antes de personalizar, el cliente debe haber provisto su material en esta carpeta:

```
client/
  BRIEF.md              # Información del cliente (completar antes de personalizar)
  assets/
    images/             # Logos, fotos, banners del cliente
    videos/             # Videos del cliente (si aplica)
    fonts/              # Fuentes personalizadas (si aplica)
```

## Plantilla de BRIEF del cliente (`client/BRIEF.md`)

```markdown
# Brief del cliente

## Datos generales
- Nombre del negocio:
- Rubro:
- Ciudad:
- Teléfono:
- Email:
- Sitio web actual (si tiene):
- Redes sociales:

## Identidad visual
- Colores principales (hex):
- Fuente (si tiene):
- Estilo visual (moderno, clásico, minimalista, etc.):

## Contenido
- Tagline o frase principal:
- Descripción del negocio (2-3 oraciones):
- Servicios o productos principales:
- Propuesta de valor diferencial:
- Llamada a la acción principal (CTA):

## SEO
- Keywords principales:
- Título de la página (title tag):
- Meta description:

## Notas adicionales:
```

## Convenciones de copy para clientes
- Siempre en español rioplatense (vos, che, etc.)
- Tono cercano y directo, sin tecnicismos
- Destacar el diferencial local (proximidad, confianza, trayectoria)
- CTA claros y accionables: "Pedí tu presupuesto", "Contactanos", "Escribinos"

@docs/research/INSPECTION_GUIDE.md
