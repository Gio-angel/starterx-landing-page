import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change back to '/' once you add a custom domain
  base: '/starterx-landing-page/',
})
