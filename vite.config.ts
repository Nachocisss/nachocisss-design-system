// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Puedes usar un index que re-exporte todos los componentes o apuntar a un componente en particular.
      entry: path.resolve(__dirname, 'src/components/Button.jsx'),
      name: 'DesignSystem',
      // Opcional: define los formatos (UMD, ESM, etc.)
      formats: ['es', 'umd'],
      fileName: (format) => `design-system.${format}.js`
    },
    rollupOptions: {
      // Marca como externas dependencias que no quieras incluir en tu bundle (por ejemplo, react)
      external: ['react', 'react-dom']
    }
  }
});
