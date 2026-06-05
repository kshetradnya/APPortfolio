import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/APPortfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})
