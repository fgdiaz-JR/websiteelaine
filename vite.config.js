import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: set `base` to the repo name so assets load correctly on GitHub Pages
export default defineConfig({
  // Para publicar en https://fgdiaz-jr.github.io/ usar base: '/'
  // Nota: publicar en la raíz requiere que el repo sea `fgdiaz-jr.github.io`
  base: '/',
  plugins: [react()]
})
