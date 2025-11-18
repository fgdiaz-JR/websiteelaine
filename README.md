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

- Si quieres publicar como sitio de proyecto (ej. `https://fgdiaz-jr.github.io/websiteelaine/`):
	- Mantén `base` apuntando al subpath `/websiteelaine/` en `vite.config.js`.
	- Usa la Action `.github/workflows/gh-pages.yml` y publica la rama `gh-pages`.

- Si prefieres publicar como sitio de usuario (raíz): `https://fgdiaz-jr.github.io/`
	- Cambié `vite.config.js` para usar `base: '/'`.
	- Atención: para que esto funcione la convención de GitHub Pages exige que el repositorio se llame `fgdiaz-jr.github.io` (es decir, el repo debe ser `fgdiaz-jr/fgdiaz-jr.github.io`). Si quieres publicar en la raíz y aún no tienes ese repo, crea un repositorio con ese nombre y empuja este código allí.
	- La Action seguirá construyendo y publicando `dist/` en la rama `gh-pages`, y GitHub Pages servirá la web desde la rama `gh-pages` del repo `fgdiaz-jr.github.io`.

Cómo activar (pasos rápidos):
1. Si quieres publicar en `https://fgdiaz-jr.github.io/`, crea (o usa) el repo `fgdiaz-jr/fgdiaz-jr.github.io` y empuja este código a `main` en ese repo.
2. Haz push a `main`. La Action construirá y publicará automáticamente en `gh-pages`.
3. En GitHub, ve a Settings → Pages y confirma que la fuente de Pages está configurada en la rama `gh-pages` (root).


