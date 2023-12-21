// vite.config.js
import { defineConfig } from 'vite';
import VitePluginWindicss from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [
    VitePluginWindicss(),
  ],
  resolve: {
    alias: {
      '@': 'universal',
    },
  },
});
