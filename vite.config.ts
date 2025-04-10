import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name: 'DesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `design-system.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
});
