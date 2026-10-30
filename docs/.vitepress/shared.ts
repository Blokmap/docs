import { readFileSync } from 'node:fs';
import { defineConfig } from 'vitepress';

const logo = `data:image/svg+xml;base64,${readFileSync(new URL('../assets/logo.svg', import.meta.url)).toString('base64')}`;

export const shared = defineConfig({
    title: 'Blokmap',
    base: '/',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: logo }]],

    vite: {
        server: {
            allowedHosts: ['.dev.blokmap.io'],
        },
    },

    themeConfig: {
        logo,

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/blokmap',
            },
        ],
    },
});
