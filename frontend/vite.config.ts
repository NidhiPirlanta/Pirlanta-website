import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Ignore node_modules and other heavy dirs to speed up HMR
      ignored: ['**/node_modules/**', '**/.git/**'],
    },
    hmr: true,
  },
  optimizeDeps: {
    // Pre-bundle heavy deps so dev reload is faster
    include: ['react', 'react-dom', 'cobe', 'three'],
  },
})

