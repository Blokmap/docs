import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
    title: 'Blokmap',
    base: '/docs',

    themeConfig: {
        logo: '/logo.svg',

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/blokmap',
            },
        ],
    },

    locales: {
        nl: {
            label: 'Nederlands',
            lang: 'nl',
            themeConfig: {
                nav: [
                    {
                        text: 'Studenten',
                        link: '/nl/user/students/',
                    },
                    {
                        text: 'Beheerders',
                        items: [
                            { text: 'Locatiebeheerders', link: '/nl/user/locations/' },
                            { text: 'Organisatiebeheerders', link: '/nl/user/institutions/' },
                        ],
                    },
                    {
                        text: 'Ontwikkelaars',
                        link: '/nl/dev/',
                    },
                ],

                sidebar: {
                    '/nl/user/students/': [
                        {
                            text: 'Blokmap Profiel',
                            items: [
                                { text: 'Overzicht', link: '/nl/user/students/' },
                                { text: 'Inloggen', link: '/nl/user/students/' },
                                {
                                    text: 'Profiel beheren',
                                    link: '/nl/user/students/managing-profile',
                                },
                            ],
                        },
                        {
                            text: 'Locaties',
                            items: [
                                {
                                    text: 'Locaties zoeken',
                                    link: '/nl/user/students/finding-locations',
                                },
                            ],
                        },
                        {
                            text: 'Reserveren',
                            items: [
                                {
                                    text: 'Reservaties maken',
                                    link: '/nl/user/students/making-reservations',
                                },
                                {
                                    text: 'Reservaties beheren',
                                    link: '/nl/user/students/managing-reservations',
                                },
                                {
                                    text: 'Reservaties bevestigen',
                                    link: '/nl/user/students/managing-reservations',
                                },
                            ],
                        },
                    ],
                    '/nl/user/locations/': [
                        {
                            text: 'Aan de slag',
                            items: [{ text: 'Overzicht', link: '/nl/user/locations/' }],
                        },
                        {
                            text: 'Locatie instellen',
                            items: [
                                {
                                    text: 'Locatie indienen',
                                    link: '/nl/user/locations/submitting-location',
                                },
                            ],
                        },
                        {
                            text: 'Locatie beheren',
                            items: [
                                {
                                    text: 'Gegevens bijwerken',
                                    link: '/nl/user/locations/managing-location',
                                },
                                {
                                    text: 'Openingstijden',
                                    link: '/nl/user/locations/opening-times',
                                },
                            ],
                        },
                        {
                            text: 'Reservaties',
                            items: [
                                {
                                    text: 'Reservaties beheren',
                                    link: '/nl/user/locations/managing-reservations',
                                },
                            ],
                        },
                        {
                            text: 'Toegang',
                            items: [
                                {
                                    text: 'Toegangscontrole',
                                    link: '/nl/user/locations/access-control',
                                },
                            ],
                        },
                    ],
                    '/nl/user/institutions/': [
                        {
                            text: 'Aan de slag',
                            items: [
                                { text: 'Overzicht', link: '/nl/user/institutions/' },
                                {
                                    text: 'Organisatietypes',
                                    link: '/nl/user/institutions/institution-types',
                                },
                            ],
                        },
                        {
                            text: 'Locaties',
                            items: [
                                {
                                    text: 'Locaties beheren',
                                    link: '/nl/user/institutions/managing-locations',
                                },
                                {
                                    text: 'Openingstijden',
                                    link: '/nl/user/institutions/opening-times',
                                },
                            ],
                        },
                        {
                            text: 'Reservaties',
                            items: [
                                {
                                    text: 'Reservaties beheren',
                                    link: '/nl/user/institutions/managing-reservations',
                                },
                            ],
                        },
                        {
                            text: 'Toegang',
                            items: [
                                {
                                    text: 'Toegangscontrole',
                                    link: '/nl/user/institutions/access-control',
                                },
                            ],
                        },
                        {
                            text: 'Groepen',
                            items: [
                                {
                                    text: 'Groepen beheren',
                                    link: '/nl/user/institutions/authorities',
                                },
                                {
                                    text: 'Toegang beheren',
                                    link: '/nl/user/institutions/institution-access',
                                },
                            ],
                        },
                    ],
                    '/nl/dev/': [
                        {
                            text: 'Overzicht',
                            items: [{ text: 'Welkom', link: '/nl/dev/' }],
                        },
                        {
                            text: 'Setup',
                            items: [{ text: 'Aan de slag', link: '/nl/dev/getting-started' }],
                        },
                        {
                            text: 'Architectuur',
                            items: [{ text: 'Systeem architectuur', link: '/nl/dev/architecture' }],
                        },
                        {
                            text: 'API',
                            items: [{ text: 'API Documentatie', link: '/nl/dev/api' }],
                        },
                        {
                            text: 'Ontwikkeling',
                            items: [
                                { text: 'Development Guide', link: '/nl/dev/development' },
                                { text: 'Bijdragen', link: '/nl/dev/contributing' },
                            ],
                        },
                    ],
                },
            },
        },
        en: {
            label: 'English',
            lang: 'en',
            themeConfig: {
                nav: [{ text: 'Documentation', link: '/en/' }],
            },
        },
    },
});
