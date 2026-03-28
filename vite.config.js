import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // If using a custom domain → keep '/'
  // If using username.github.io/repo-name/ → change to '/repo-name/'
  base: '/',
})
