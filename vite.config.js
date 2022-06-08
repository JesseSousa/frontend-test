import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'happy-dom',
  },
  plugins: [vue()],
  base: '/crypto-vue/',
});
