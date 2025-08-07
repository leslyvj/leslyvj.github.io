// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Make sure this base matches your GitHub repo name
export default defineConfig({
  base: '/leslyvj.github.io/',
  plugins: [react()],
})
