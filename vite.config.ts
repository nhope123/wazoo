/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    eslintPlugin(),
    
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname,'src/assets'),
      '@': path.resolve(__dirname,'src/'),
      '@components': path.resolve(__dirname,'src/components'),
      '@context': path.resolve(__dirname,'src/context'),
      '@hooks': path.resolve(__dirname,'src/hooks'),
    },
  },
  test: {
    include: ['src/**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', 
  }
  
})
