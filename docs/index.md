---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "BlokMap"
  text: "Documentatie"
  tagline: "Uitgebreide documentatie voor gebruikers en ontwikkelaars van het BlokMap platform"
  image:
    src: /logo.svg
    alt: BlokMap
  actions:
    - theme: brand
      text: 📚 Gebruikershandleiding
      link: /nl/users/
    - theme: alt
      text: 🔧 Ontwikkelaarsdocs
      link: /developers/

features:
  - title: "📚 Gebruikershandleidingen"
    details: "Alles wat je moet weten over het gebruik van BlokMap"
  - title: "Voor Studenten"
    details: "Leer hoe je locaties kunt vinden, reservaties kunt maken en je profiel kunt beheren"
    link: /nl/users/individuals/locations
  - title: "Voor Autoriteiten"
    details: "Beheer leden en locaties binnen je organisatie"
    link: /nl/users/authorities/members
  - title: "Voor Instituties"
    details: "Systeembeheer en institutionele instellingen"
    link: /nl/users/institutions/login
  - title: "💻 Ontwikkelaarsdocumentatie"
    details: "Technische documentatie voor het bouwen en onderhouden van BlokMap"
  - title: "Frontend"
    details: "Ga van start met de frontend applicatie"
    link: /developers/frontend/
  - title: "Backend"
    details: "Ga van start met de backend applicatie en database"
    link: /developers/backend/
  - title: "Deployment"
    details: "CI/CD, monitoring en productie deployment"
    link: /developers/deploy/
---