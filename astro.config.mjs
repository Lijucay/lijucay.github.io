// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    site: "https://lijucay.github.io/",
    output: 'static',
    integrations: [react()],
    redirects: {
        "/blog/": "/blog/1"
    }
});
