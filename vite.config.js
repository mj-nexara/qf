import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/qf/', // 👈 Must match your repo name
  plugins: [react()],
  server: {
    host: true, // 👈 Exposes the dev server to your local network
  },
})
