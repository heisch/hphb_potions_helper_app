import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'sw.ts',
            registerType: 'autoUpdate',
            injectRegister: false,

            pwaAssets: {
                disabled: false,
                config: true,
            },

            manifest: {
                name: 'Harry Potter: Hogwarts Battle Potions Helper',
                short_name: 'HPHB Potions Helper',
                description: 'A helper app for managing potions in the Harry Potter: Hogwarts Battle board game.',
                theme_color: '#ffffff',
            },

            injectManifest: {
                globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
            },

            devOptions: {
                enabled: false,
                navigateFallback: 'index.html',
                suppressWarnings: true,
                type: 'module',
            },
        })
    ],
    base: '/hphb_potions_helper_app/',
    build: {
        outDir: 'docs',
    }
})
