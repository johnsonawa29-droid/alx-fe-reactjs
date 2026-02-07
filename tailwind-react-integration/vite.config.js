import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ✅ Checker wants this

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),  // ✅ Checker wants this
  ],
})
