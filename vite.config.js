import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'OSquare',
        short_name: 'OSquare',
        theme_color: '#ffffff',
        icons: [
            {
                src: '/icons/pwa-64x64.png',
                sizes: '64x64',
                type: 'image/png'
            },
            {
                src: '/icons/pwa-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: '/icons/pwa-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any'
            },
            {
                src: '/icons/maskable-icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable'
            }
        ],
      }, 
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})