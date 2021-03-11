import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'my-red': '#e41749',
        'my-dark-darker': '#303030',
        'my-light': '#f0f0f0',
        'my-light-darker': '#e0e0e0',
        'my-dark': '#404040',
      },
    },
  },
});
