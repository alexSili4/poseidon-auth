import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    // minify: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/index.html'),
        'sign-in': resolve(__dirname, './src/sign-in/index.html'),
        'sign-up': resolve(__dirname, './src/sign-up/index.html'),
        'forgot-password': resolve(__dirname, './src/forgot-password/index.html'),
        'reset-password': resolve(__dirname, './src/reset-password/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'js/script[extname]';
          }
          if (assetInfo.name.endsWith('.svg')) {
            return 'icons/[name][extname]';
          }
          if (assetInfo.name.endsWith('.ttf')) {
            return 'fonts/[name][extname]';
          }
          if (assetInfo.name.endsWith('.png')) {
            return 'images/[name][extname]';
          }
          return 'assets/[name][extname]';
        },
        chunkFileNames: 'js/script.js',
        entryFileNames: 'js/script.js',
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  base: './',
});
