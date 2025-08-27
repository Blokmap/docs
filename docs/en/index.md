---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "BlokMap"
  text: "Documentation"
  tagline: "Comprehensive documentation for users and developers of the BlokMap platform"
  image:
    src: /logo.svg
    alt: BlokMap
  actions:
    - theme: brand
      text: 📚 User Manual
      link: /en/users/
    - theme: alt
      text: 🔧 Developer Docs
      link: /developers/

features:
  - title: "📚 User Guides"
    details: "Everything you need to know about using BlokMap"
  - title: "For Students"
    details: "Learn how to find locations, make reservations and manage your profile"
    link: /en/users/individuals/locations
  - title: "For Authorities"
    details: "Manage members and locations within your organization"
    link: /en/users/authorities/members
  - title: "For Institutions"
    details: "System administration and institutional settings"
    link: /en/users/institutions/login
  - title: "💻 Developer Documentation"
    details: "Technical documentation for building and maintaining BlokMap"
  - title: "Frontend Development"
    details: "React, TypeScript and modern development tools"
    link: /developers/frontend/
  - title: "Backend Development"
    details: "API design, database and authentication"
    link: /developers/backend/
  - title: "Deployment"
    details: "CI/CD, monitoring and production deployment"
    link: /developers/deploy/
---