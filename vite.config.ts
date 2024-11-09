import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.js',
    css: true,
    coverage: {
      include: ['src/**/*'],
      reporter: ['text', 'html'],
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/router.tsx',
      ],
    },
  }
});