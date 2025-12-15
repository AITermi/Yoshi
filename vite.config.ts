import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Yoshi/', // Configuration for GitHub Pages subdirectory deployment
  build: {
    outDir: 'dist',
  },
});