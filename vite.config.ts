import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    server: {
      open: true,
    },
    build: {
      outDir: 'build',
    },
    plugins: [react()],
    define: {
      'process.env': {},
    },
    resolve: {
      alias: {
        '~': path.join(__dirname, './src'),
      },
    },
  };
});
