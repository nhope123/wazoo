/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint2';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false, // Disable caching to ensure the latest linting results
      include: ['src/**/*.ts', 'src/**/*.tsx'], // Specify the files to lint
      exclude: ['node_modules', 'dist'], // Exclude unnecessary directories
    }),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
  test: {
    include: ['src/**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
