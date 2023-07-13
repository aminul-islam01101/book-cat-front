import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(() => ({
    server: {
        port: 3000,
    },
    plugins: [react(), eslint()],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: 'features', replacement: path.resolve(__dirname, 'src/redux/features') },
        ],
    },
}));
