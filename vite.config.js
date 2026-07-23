import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// SproutSnap promo SPA
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    open: false,
    allowedHosts: ['sproutsnap.rooksnet.uk']
  }
})
