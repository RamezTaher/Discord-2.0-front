import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "localhost",
    proxy: {
      init: "http://localhost:5000",
    },
  },
  resolve: {
    alias: {
      "@": "/src/assets/",
    },
  },

  plugins: [react()],
})
