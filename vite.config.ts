'use strict';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    outDir: './docs',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-aria': [
            'focus',
            'selection'
          ].map(name => `@react-aria/${ name }`),
          highlight: ['highlight.js'],
          lodash: ['lodash'],
          refractor: ['refractor']
        }
      },
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
