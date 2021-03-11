import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
