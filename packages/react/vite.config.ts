import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { copyFileSync, mkdirSync, existsSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-styles',
      closeBundle() {
        // Copy the CSS file to dist/styles
        const srcPath = resolve(__dirname, 'src/styles/ui-forge.css');
        const destDir = resolve(__dirname, 'dist/styles');
        const destPath = resolve(destDir, 'ui-forge.css');

        if (!existsSync(destDir)) {
          mkdirSync(destDir, { recursive: true });
        }

        if (existsSync(srcPath)) {
          copyFileSync(srcPath, destPath);
          console.log('Copied ui-forge.css to dist/styles/');
        }
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'UIForgeReact',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    minify: 'esbuild',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
  },
});
