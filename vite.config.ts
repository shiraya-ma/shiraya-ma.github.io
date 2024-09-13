'use strict';
import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './docs'
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
