import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: { 'process.env': { ...loadEnv(mode, process.cwd()) } },
    server: {
      proxy: {
        '^/assets': {
          target: 'http://localhost:3000/'
        }
      }
    }
  });
};
