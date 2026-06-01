import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT:
// If your GitHub repository name is different, change base below.
// Example repo: https://github.com/USERNAME/vanda-nichada-homes
// Public URL: https://USERNAME.github.io/vanda-nichada-homes-ISB/
export default defineConfig({
  plugins: [react()],
  base: '/vanda-nichada-homes-ISB/',
})
