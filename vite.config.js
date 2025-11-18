import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: set `base` to the repo name so assets load correctly on GitHub Pages
export default defineConfig({
  base: '/websiteelaine/',
  plugins: [react()]
})
