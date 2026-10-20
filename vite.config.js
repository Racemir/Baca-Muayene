import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { seoStaticPlugin } from './scripts/vite-seo-plugin.js'

export default defineConfig({
  plugins: [react(), seoStaticPlugin()],
  build: {
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router')
          ) {
            return 'react';
          }
        },
      },
    },
  },
})
