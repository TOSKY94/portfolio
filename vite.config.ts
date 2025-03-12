import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    proxy: {
      '/medium-feed': {
        target: 'https://medium.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/medium-feed/, '/feed/@pyrosv')
      }
    }
  },
  build: {
    outDir: 'dist',
  }
});
