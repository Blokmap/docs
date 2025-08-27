import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
export default defineConfig({
    title: 'Blokmap Docs',
    description: 'Documentation for Blokmap',
    base: "/docs/",
    
    // Redirect root to Dutch docs by default
    rewrites: {
        'index.md': 'nl/index.md'
    },

    locales: {
        en: {
            label: 'English',
            lang: 'en',

            themeConfig: {
                nav: [
                    { text: 'Home', link: '/en' },
                    { text: 'User Manual', link: '/en/users/' },
                    { text: 'Developer Docs', link: '/developers/' }
                ],

                sidebar: {
                    '/en/users/': [
                        {
                            text: 'Getting Started',
                            items: [
                                { text: 'Introduction', link: '/en/users/' },
                                { text: 'Account Setup', link: '/en/users/getting-started' }
                            ]
                        },
                        {
                            text: 'For Students',
                            items: [
                                { text: 'Finding Locations', link: '/en/users/individuals/locations' },
                                { text: 'Making Reservations', link: '/en/users/individuals/reservations' },
                                { text: 'Managing Profile', link: '/en/users/individuals/profile' },
                            ],
                        },
                        {
                            text: 'For Authorities',
                            items: [
                                { text: 'Managing Members', link: '/en/users/authorities/members' },
                                { text: 'Managing Locations', link: '/en/users/authorities/locations' },
                            ],
                        },
                        {
                            text: 'For Institutions',
                            items: [
                                { text: 'Institution Login', link: '/en/users/institutions/login' },
                                { text: 'System Administration', link: '/en/users/institutions/admin' }
                            ],
                        },
                    ],
                },
            },
        },
        nl: {
            label: 'Nederlands',
            lang: 'nl',

            themeConfig: {
                nav: [
                    { text: 'Home', link: '/nl' },
                    { text: 'Gebruikershandleiding', link: '/nl/users/' },
                    { text: 'Ontwikkelaarsdocs', link: '/developers/' }
                ],

                sidebar: {
                    '/nl/users/': [
                        {
                            text: 'Aan de slag',
                            items: [
                                { text: 'Introductie', link: '/nl/users/' },
                                { text: 'Account aanmaken', link: '/nl/users/getting-started' }
                            ]
                        },
                        {
                            text: 'Voor Studenten',
                            items: [
                                { text: 'Locaties zoeken', link: '/nl/users/individuals/locations' },
                                { text: 'Reservaties maken', link: '/nl/users/individuals/reservations' },
                                { text: 'Profiel beheren', link: '/nl/users/individuals/profile' },
                            ],
                        },
                        {
                            text: 'Voor Authoriteiten',
                            items: [
                                { text: 'Leden beheren', link: '/nl/users/authorities/members' },
                                { text: 'Locaties beheren', link: '/nl/users/authorities/locations' },
                            ],
                        },
                        {
                            text: 'Voor Instituties',
                            items: [
                                { text: 'Institutie login', link: '/nl/users/institutions/login' },
                                { text: 'Systeembeheer', link: '/nl/users/institutions/admin' }
                            ],
                        },
                    ],
                },
            },
        },
    },

    themeConfig: {
        socialLinks: [{ icon: 'github', link: 'https://github.com/blokmap' }],

        sidebar: {
            '/developers/': [
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/developers/' },
                        { text: 'Quick Setup', link: '/developers/setup' },
                        { text: 'Architecture Overview', link: '/developers/architecture' }
                    ]
                },
                {
                    text: 'Frontend Development',
                    items: [
                        { text: 'Overview', link: '/developers/frontend/' },
                        { text: 'Setup & Installation', link: '/developers/frontend/setup' },
                        { text: 'Code Style Guide', link: '/developers/frontend/code-style' },
                        { text: 'Component Guidelines', link: '/developers/frontend/components' },
                        { text: 'State Management', link: '/developers/frontend/state' },
                        { text: 'Testing', link: '/developers/frontend/testing' }
                    ]
                },
                {
                    text: 'Backend Development',
                    items: [
                        { text: 'Overview', link: '/developers/backend/' },
                        { text: 'Setup & Installation', link: '/developers/backend/setup' },
                        { text: 'Code Style Guide', link: '/developers/backend/code-style' },
                        { text: 'API Design', link: '/developers/backend/api' },
                        { text: 'Database', link: '/developers/backend/database' },
                        { text: 'Authentication', link: '/developers/backend/auth' },
                        { text: 'Testing', link: '/developers/backend/testing' }
                    ]
                },
                {
                    text: 'Deployment',
                    items: [
                        { text: 'Overview', link: '/developers/deploy/' },
                        { text: 'Environment Setup', link: '/developers/deploy/environment' },
                        { text: 'CI/CD Pipeline', link: '/developers/deploy/pipeline' },
                        { text: 'Production Deployment', link: '/developers/deploy/production' },
                        { text: 'Monitoring', link: '/developers/deploy/monitoring' }
                    ]
                }
            ]
        },
    },
});
