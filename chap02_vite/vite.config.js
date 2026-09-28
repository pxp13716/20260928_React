import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 3000,
    open: true,
  },
});
