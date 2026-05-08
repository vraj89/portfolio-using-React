import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Minify and optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      },
    },
    // Chunk splitting for better caching
    rollupOptions: {
      output: {
        // Replace object form with function
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            if (id.includes('react-router-dom')) return 'react-router';
            return 'vendor';
          }
        }
      },
    },
    // Optimize chunk size reporting
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging (set to false to reduce bundle size)
    sourcemap: false,
    // Output directory
    outDir: 'dist',
  },
  // Performance optimization for development
  server: {
    middlewareMode: false,
  },
  // Environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development'),
  },
})