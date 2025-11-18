# Elaine - Sitio web (React + Tailwind)

Proyecto mínimo con React (Vite) y Tailwind CSS para el sitio del salón de uñas "Elaine".

Comandos (PowerShell):

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

Notas:
- Proyecto modular: los componentes están en `src/components` (Navbar, Hero, Servicios, Gallery, Footer).
- Tailwind está configurado en `tailwind.config.cjs` y `postcss.config.cjs`.
- La galería usa imágenes remotas (Unsplash) como ejemplo; reemplaza con tus fotos en `public/` o `src/assets/`.

Despliegue en GitHub Pages
 - Este proyecto está configurado para desplegar en GitHub Pages; Vite usa `base: '/websiteelaine/'` en `vite.config.js` para asegurar que los assets se resuelvan correctamente si publicas en `https://<usuario>.github.io/websiteelaine/`.
 - Hay una GitHub Action en `.github/workflows/gh-pages.yml` que se ejecuta cuando haces push a la rama `main`. Compila (`npm run build`) y publica el contenido de `dist/` en la rama `gh-pages`.

Cómo activar (pasos rápidos):
1. Asegúrate de que tu repositorio remoto es `https://github.com/fgdiaz-JR/websiteelaine.git` y que estás empujando a `main`.
2. Haz push a `main`. La Action construirá y publicará automáticamente en `gh-pages`.
3. En GitHub, ve a Settings → Pages y confirma que la fuente de Pages está configurada en la rama `gh-pages` (root). La URL final será `https://<usuario>.github.io/websiteelaine/`.

