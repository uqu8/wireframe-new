import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-dom/client',
      'react-router-dom',
      'lucide-react'
    ],
    exclude: ['react-dom/client']
  },
  server: {
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
});