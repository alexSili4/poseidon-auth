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
        // Настройка для вывода файлов в разные папки
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]';
          }
          if (assetInfo.name.endsWith('.js')) {
            return 'js/[name][extname]';
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
          // Настройка для других файлов, если необходимо
          return 'assets/[name][extname]';
        },
        // Настройка для вывода файлов JavaScript
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  base: './',
});
