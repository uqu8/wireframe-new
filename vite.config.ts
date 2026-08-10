import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

<<<<<<< HEAD
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
    // 排除这些依赖，让 Vite 不要反复优化它们
    exclude: []
  }
})
=======
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
>>>>>>> 6c431ff6ac9c43cf5eaf12e76b1835136d3736c3
