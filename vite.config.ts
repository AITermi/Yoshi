import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// IMPORTANT: The 'base' must match your GitHub Repository name exactly.
// If your repo is https://github.com/user/MyRepo, set base to '/MyRepo/'
export default defineConfig({
  plugins: [react()],
  base: '/Yoshi/', 
  build: {
    outDir: 'dist',
  },
});