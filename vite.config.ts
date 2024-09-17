import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hphb_potions_helper_app/',
  build: {
    outDir: 'docs',
  }
})
