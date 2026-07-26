import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/family-finance/',
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['icon.svg'],
    manifest: {
      name: 'نظام مالية العائلة',
      short_name: 'مالية العائلة',
      description: 'إدارة الدفعات ورواتب أفراد العائلة والمصروفات والتقارير',
      lang: 'ar',
      dir: 'rtl',
      theme_color: '#1e3a8a',
      background_color: '#f8fafc',
      display: 'standalone',
      start_url: '/family-finance/',
      scope: '/family-finance/',
      icons: [
        { src: 'icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
      navigateFallback: 'index.html'
    }
  })]
})
