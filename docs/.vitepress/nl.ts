import { type DefaultTheme, type LocaleSpecificConfig } from 'vitepress';

export const nl: LocaleSpecificConfig<DefaultTheme.Config> = {
    lang: 'nl',
    themeConfig: {
        nav: [
            {
                text: 'Studenten',
                link: '/user/students/',
            },
            {
                text: 'Beheerders',
                items: [
                    { text: 'Locatiebeheerders', link: '/user/locations/' },
                    { text: 'Organisatiebeheerders', link: '/user/institutions/' },
                ],
            },
        ],

        sidebar: {
            '/user/students/': [
                {
                    text: 'Blokmap Profiel',
                    items: [
                        { text: 'Overzicht', link: '/user/students/' },
                        { text: 'Inloggen', link: '/user/students/' },
                        {
                            text: 'Profiel beheren',
                            link: '/user/students/managing-profile',
                        },
                    ],
                },
                {
                    text: 'Locaties',
                    items: [
                        {
                            text: 'Locaties zoeken',
                            link: '/user/students/finding-locations',
                        },
                    ],
                },
                {
                    text: 'Reserveren',
                    items: [
                        {
                            text: 'Reservaties maken',
                            link: '/user/students/making-reservations',
                        },
                        {
                            text: 'Reservaties beheren',
                            link: '/user/students/managing-reservations',
                        },
                        {
                            text: 'Reservaties bevestigen',
                            link: '/user/students/managing-reservations',
                        },
                    ],
                },
            ],
            '/user/locations/': [
                {
                    text: 'Aan de slag',
                    items: [
                        { text: 'Locatie aanmaken', link: '/user/locations/' },
                        {
                            text: 'Dashboard & Overzicht',
                            link: '/user/locations/dashboard-overview',
                        },
                    ],
                },
                {
                    text: 'Instellingen',
                    link: '/user/locations/settings/',
                    items: [
                        { text: 'Overzicht', link: '/user/locations/settings/general' },
                        { text: 'Afbeeldingen', link: '/user/locations/settings/images' },
                        {
                            text: 'Algemene instellingen',
                            link: '/user/locations/settings/advanced',
                        },
                    ],
                },
                {
                    text: 'Openingstijden',
                    items: [
                        { text: 'Enkele openingstijden', link: '/user/locations/openings/' },
                        {
                            text: 'Herhalende openingstijden',
                            link: '/user/locations/openings/repeating',
                        },
                    ],
                },
                {
                    text: 'Reservaties',
                    items: [
                        {
                            text: 'Reservaties beheren',
                            link: '/user/locations/reservations/',
                        },
                        { text: 'Aanwezigheden', link: '/user/locations/reservations/qr-codes' },
                        {
                            text: 'Strafpunten',
                            link: '/user/locations/reservations/penalty-points',
                        },
                    ],
                },
                {
                    text: 'Toegangsbeheer',
                    items: [
                        { text: 'Beheerders', link: '/user/locations/access/' },
                        { text: 'Rollen & Rechten', link: '/user/locations/access/roles' },
                    ],
                },
            ],
            '/user/institutions/': [
                {
                    text: 'Aan de slag',
                    items: [
                        { text: 'Overzicht', link: '/user/institutions/' },
                        {
                            text: 'Organisatietypes',
                            link: '/user/institutions/institution-types',
                        },
                    ],
                },
                {
                    text: 'Locaties',
                    items: [
                        {
                            text: 'Locaties beheren',
                            link: '/user/institutions/managing-locations',
                        },
                        {
                            text: 'Openingstijden',
                            link: '/user/institutions/openings',
                        },
                    ],
                },
                {
                    text: 'Reservaties',
                    items: [
                        {
                            text: 'Reservaties beheren',
                            link: '/user/institutions/managing-reservations',
                        },
                    ],
                },
                {
                    text: 'Toegang',
                    items: [
                        {
                            text: 'Toegangscontrole',
                            link: '/user/institutions/access-control',
                        },
                    ],
                },
                {
                    text: 'Groepen',
                    items: [
                        {
                            text: 'Groepen beheren',
                            link: '/user/institutions/authorities',
                        },
                        {
                            text: 'Toegang beheren',
                            link: '/user/institutions/institution-access',
                        },
                    ],
                },
            ],
        },
    },
};
