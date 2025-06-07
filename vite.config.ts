import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set the correct base path so built assets load when served from
  // https://<user>.github.io/reddit-snoo-generator/
  base: '/reddit-snoo-generator/',
  plugins: [react()],
});
