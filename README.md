# Tábuas de Pinho — landing page

Landing de una sola página para la carpintería **Tábuas de Pinho** (Ponta Grossa – PR), en portugués y español, con formulario que abre WhatsApp.

Para publicar el código en GitHub, seguí la guía [SUBIR-A-GITHUB.md](SUBIR-A-GITHUB.md).

## Stack

- **Astro 7.4.2** (versión estable más reciente), salida estática.
- CSS propio (sin Tailwind) y JavaScript mínimo: menú móvil, lightbox de la galería, revelado al hacer scroll y armado del mensaje de WhatsApp.
- Fotografías propias optimizadas a JPEG + WebP con `srcset` (640 / 1280 px).
- Tipografías Fraunces + Inter desde Google Fonts, con fallback a Georgia y la fuente del sistema.

## Comandos

Requiere **Node.js 22.23.4 o superior**.

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción en dist/
npm run preview  # sirve el build
```

> Nota del entorno: en esta sesión `astro dev` falla al crear la app de desarrollo por un conflicto de Vite (`require is not defined`). El build y la vista previa estáticos funcionan sin problema; para revisar cambios usar `npm run build && npm run preview`.

## Estructura

```
src/
  components/   Header, Footer, Landing (secciones), Icon
  data/
    content.ts  Todos los textos PT/ES, contacto y navegación
    photos.json Generado por scripts/process_photos.py
  layouts/      BaseLayout (head, SEO, JSON-LD, header/footer)
  pages/        index.astro (PT) · es/index.astro (ES)
  styles/       global.css
public/
  img/          Fotos optimizadas
  favicon.svg   Icono de la marca
  og.jpg        Imagen para redes (1200×630)
  (robots.txt y sitemap.xml se generan desde src/pages)
brand/          Archivos de marca (icono final y propuestas)
scripts/        Optimización de fotos y auditoría de enlaces
```

## Editar contenido

- Textos, servicios, FAQ, datos de contacto e idiomas: `src/data/content.ts`.
- Fotos de la galería y textos alternativos: `src/components/Landing.astro` + `src/data/photos.json`.
- Fotografías nuevas: agregarlas a `scripts/process_photos.py` y ejecutar el script con Python + Pillow.
- Dominio: `astro.config.mjs` (`site`). Hoy apunta a `https://tabuas-de-pinho.jlaffitteg.workers.dev`; robots y sitemap se generan desde esa URL. Para un dominio propio, cambiá el `site` o definí la variable `SITE_URL` en el build.

## Datos del negocio cargados

- WhatsApp: +55 42 99867-5871 (`wa.me/5542998675871`).
- Ateliê: Rua Aurora Alves Vieira da Silva, 790 — Neves, Ponta Grossa – PR, CEP 84023-100.
- Facebook: facebook.com/tabuasdepinho · TikTok: @palletdesignpg.
- 10 años de oficio, Jonathan Louis al frente.
- Sin servicio de transporte: retiro en el ateliê (aclarado en las FAQ).

## Pendientes para completar

- Dominio definitivo (hoy se publica en `tabuas-de-pinho.jlaffitteg.workers.dev`).
- Horarios de atención, correo e Instagram (no estaban en la tarjeta).
- Testimonios reales, si se quieren mostrar.
- Reemplazar fotos por otras de mejor resolución cuando estén disponibles.
