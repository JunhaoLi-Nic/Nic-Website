import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@components': Path.resolve(__dirname, './src/components'),
      '@css': Path.resolve(__dirname, './src/css')
    },
  },
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // put all libraries into a separate chunk
          }
        }
      }
    }
    
    }
}
);
