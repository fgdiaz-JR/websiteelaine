# Elaine - Sitio web (React + Tailwind)

Proyecto con React (Vite) y Tailwind CSS para el sitio del salón de uñas "Elaine".

Cómo ejecutar localmente (PowerShell):

```
# Instalar dependencias
npm install

# Levantar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la build
npm run preview
```

Deploy a GitHub Pages (project site)
- `vite.config.js` usa `base: '/websiteelaine/'` para que el sitio funcione en `https://fgdiaz-jr.github.io/websiteelaine/`.
- Hay una GitHub Action en `.github/workflows/gh-pages.yml` que construye y publica `dist/` a la rama `gh-pages` cuando haces push a `main`.

Estructura principal:
- `src/components/` — componentes modulares: `Navbar`, `Hero`, `Services`, `Gallery`, `Footer`, `Button`, `ServiceCard`, `TestimonialCard`.
- `src/index.css` — estilos Tailwind y ajustes de galería.

Reemplaza las imágenes de la galería en `src/components/Gallery.jsx` por tus fotos o súbelas a `public/`.
