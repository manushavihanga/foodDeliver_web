import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' if your app is hosted at the root of your Azure Web App
  build: {
    outDir: 'dist', // Default build folder
  },
});
