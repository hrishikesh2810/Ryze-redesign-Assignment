import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                features: resolve(__dirname, 'features.html'),
                pricing: resolve(__dirname, 'pricing.html'),
            },
        },
    },
});
