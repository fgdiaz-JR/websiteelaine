import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Public path for GitHub Pages project site
export default defineConfig({
  base: '/websiteelaine/',
  plugins: [react()]
})
