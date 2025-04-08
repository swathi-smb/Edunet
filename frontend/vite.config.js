import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['express'] // Prevents Vite from bundling Express
  },
  plugins: [react(),
    tailwindcss(),
  ],
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out',
      'fade-in-up': 'fadeInUp 0.5s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  }
  
  
})
