import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages has no SPA rewrites: serving the app as 404.html lets
// direct visits to /services, /work, etc. load the router.
const spaFallback = (): Plugin => {
  let outDir = 'dist';
  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaFallback()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
