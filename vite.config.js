import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: set `base` to '/<REPO_NAME>/' for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/burger-tavern-react/'
})
