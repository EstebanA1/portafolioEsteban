import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

export default defineConfig({
  base: "/portafolioEsteban/",
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-react-remove-properties'],
      },
    }),
    compression({ 
      algorithm: 'brotliCompress',
      ext: ['.js', '.css', '.html', '.svg']
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-leaflet'], 
    exclude: ['@vite/client'] 
  },
  performance: {
    maxEntrypointSize: 500000, 
    maxAssetSize: 500000 
  }
})