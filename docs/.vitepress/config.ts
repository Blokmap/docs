import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
    title: 'Blokmap Docs',
    description: 'Documentation for Blokmap',
	base: "/docs/",

    locales: {
        en: {
            label: 'English',
            lang: 'en',

            themeConfig: {
                nav: [{ text: 'Home', link: '/en' }],

                sidebar: {
                    '/en/users': [
                        {
                            text: 'Students',
                            items: [
                                { text: 'Locations', link: '/en/users/individuals/locations' },
                                {
                                    text: 'Reservations',
                                    link: '/en/users/individuals/reservations',
                                },
                                { text: 'Profile', link: '/en/users/individuals/profile' },
                            ],
                        },
                        {
                            text: 'Authorities',
                            items: [
                                { text: 'Members', link: '/en/users/authorities/members' },
                                { text: 'Locations', link: '/en/users/authorities/locations' },
                            ],
                        },
                        {
                            text: 'Institutions',
                            items: [{ text: 'Login', link: '/en/users/institutions/login' }],
                        },
                    ],
                },
            },
        },
        nl: {
            label: 'Nederlands',
            lang: 'nl',

            themeConfig: {
                nav: [{ text: 'Home', link: '/nl' }],

                sidebar: {
                    '/nl/users': [
                        {
                            text: 'Studenten',
                            items: [
                                { text: 'Locaties', link: '/nl/users/individuals/locations' },
                                { text: 'Reservaties', link: '/nl/users/individuals/reservations' },
                                { text: 'Profiel', link: '/nl/users/individuals/profile' },
                            ],
                        },
                        {
                            text: 'Authoriteiten',
                            items: [
                                { text: 'Leden', link: '/nl/users/authorities/members' },
                                { text: 'Locaties', link: '/nl/users/authorities/locations' },
                            ],
                        },
                        {
                            text: 'Instituties',
                            items: [{ text: 'Login', link: '/nl/users/institutions/login' }],
                        },
                    ],
                },
            },
        },
    },

    themeConfig: {
        socialLinks: [{ icon: 'github', link: 'https://github.com/blokmap' }],

        sidebar: { '/developers': [] },
    },
});
