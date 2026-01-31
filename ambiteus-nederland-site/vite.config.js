import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from parent directory (content folder)
      allow: ['..'],
    },
  },
  resolve: {
    alias: {
      '@content': path.resolve(__dirname, '../content'),
    },
  },
})
