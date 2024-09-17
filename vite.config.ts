'use strict';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs',
    rollupOptions: {
      plugins: [
        visualizer()
      ]
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
