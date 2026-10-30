# Blokmap-documentatie

Nederlandstalige gebruikershandleidingen voor studenten, locatiebeheerders en organisatiebeheerders, gebouwd met VitePress.

## Ontwikkelen

Installeer Nix met flakes en direnv. Activeer direnv in je shell en voer in deze map uit:

```sh
direnv allow
npm ci
npm run docs:dev
```

Zonder direnv kan je `nix develop` gebruiken. De flake bevat Node.js 22 (inclusief npm), Git, direnv en nix-direnv. VitePress, Prettier en de importformatter worden via `package-lock.json` geïnstalleerd. De ontwikkelserver toont zijn lokale adres in de terminal.

## Bouwen en controleren

```sh
npm run docs:build
npm run docs:preview
```

VitePress controleert interne paginalinks tijdens de build. De uitvoer staat in `docs/.vitepress/dist`.

## Inhoud bijwerken

Handleidingen staan in `docs/user/students`, `docs/user/locations` en `docs/user/institutions`. Pas bij nieuwe pagina's ook de navigatie in `docs/.vitepress/nl.ts` aan. Bewaar alle afbeeldingen centraal in `docs/assets` en verwijs ernaar met `/assets/bestandsnaam` en geef elke afbeelding een beschrijvende alt-tekst.

Controleer werkwijzen in de applicatie voordat je ze beschrijft. Schermafbeeldingen kunnen voorbeeldgegevens bevatten; publiceer geen persoonlijke e-mailadressen of bruikbare check-in-codes. Zie [de reviewnotities](REVIEW.md) voor de gecontroleerde schermen en de grenzen van de controle.
