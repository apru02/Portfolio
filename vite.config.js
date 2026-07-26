import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig(({ isSsrBuild }) => ({
  base: '/',
  plugins: [svgr(), react()],
  build: isSsrBuild
    ? {
        rollupOptions: {
          output: {
            entryFileNames: 'entry-server.mjs',
          },
        },
      }
    : undefined,
  ssr: {
    noExternal: true,
  },
  server: {
    open: true,
    port: 3000,
  },
}));
