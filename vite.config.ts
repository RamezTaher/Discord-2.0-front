import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  server: {
    port: 3000,
    host: "localhost",
    proxy: {
      init: "http://localhost:5000",
    },
  },
  resolve: {
    alias: {
      "@": "/src/__assets__/",
    },
  },
})
