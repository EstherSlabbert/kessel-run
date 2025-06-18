import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  define: { global: {}, }, // https://github.com/vitejs/vite/discussions/5912
  build: { chunkSizeWarningLimit: 1000 },
  base: "/kessel-run/"
});
