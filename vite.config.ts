import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigpaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3020,
  },
  plugins: [react(), tsconfigpaths()],
});
