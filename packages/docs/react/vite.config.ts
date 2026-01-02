import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ui-forge/tokens': resolve(__dirname, '../../tokens/src'),
      '@ui-forge/core': resolve(__dirname, '../../core/dist'),
      '@ui-forge/react': resolve(__dirname, '../../react/dist'),
    },
  },
});
