import { defineConfig } from 'vitepress';

export const shared = defineConfig({
    title: 'Blokmap',
    base: '/',
    head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

    vite: {
        server: {
            allowedHosts: ['.dev.blokmap.io'],
        },
    },

    themeConfig: {
        logo: '/logo.svg',

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/blokmap',
            },
        ],
    },
});
