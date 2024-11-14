/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
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
    // extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@src': path.resolve(__dirname, 'src/'),
    },
  },

  test: {
    root: __dirname,
    include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/vitest-setup.tsx',
    name: 'Wazoo',
    workspace: './vite.config.ts',
  },
});
