import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const repoName = 'PortfolioUpdated'; // ✅ EXACT repo name (case-sensitive)
  const isProd = mode === 'production';

  return {
    base: isProd ? `/${repoName}/` : '/', // ✅ FIXED BASE PATH

    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'), // cleaner
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});