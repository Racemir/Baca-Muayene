import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { seoStaticPlugin } from './scripts/vite-seo-plugin.js'

export default defineConfig({
  plugins: [react(), seoStaticPlugin()],
})
