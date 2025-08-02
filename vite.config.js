import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/cyberknight-portfolio/', // Change to '/repo-name/' if using GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})