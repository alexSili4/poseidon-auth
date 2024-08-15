import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    minify: false,
    rollupOptions: {
      input: glob.sync('./src/*.html'),
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
