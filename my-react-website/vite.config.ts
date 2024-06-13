import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      find: '@components',
      replacement: Path.resolve(__dirname, 'src/components'),
    },
  },
})
