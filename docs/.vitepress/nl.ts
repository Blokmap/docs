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
                            text: 'Dashboard',
                            link: '/user/locations/institution-dashboard',
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
                    items: [{ text: 'Dashboard & Overzicht', link: '/user/institutions/' }],
                },
                {
                    text: 'Locaties',
                    items: [
                        {
                            text: 'Locaties beheren',
                            link: '/user/institutions/locations',
                        },
                    ],
                },
                {
                    text: 'Locatiegroepen',
                    items: [
                        {
                            text: 'Overzicht',
                            link: '/user/institutions/authorities/',
                        },
                        {
                            text: 'Groepen beheren',
                            link: '/user/institutions/authorities/authority-dashboard',
                        },
                        {
                            text: 'Rollen & Rechten',
                            link: '/user/institutions/authorities/authority-roles',
                        },
                    ],
                },
                {
                    text: 'Leden',
                    items: [
                        {
                            text: 'Leden beheren',
                            link: '/user/institutions/members',
                        },
                    ],
                },
                {
                    text: 'Toegangsbeheer',
                    items: [
                        { text: 'Beheerders', link: '/user/institutions/access/' },
                        { text: 'Rollen & Rechten', link: '/user/institutions/access/roles' },
                    ],
                },
            ],
        },
    },
};
