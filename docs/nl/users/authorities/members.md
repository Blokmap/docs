# Leden beheren

Als autoriteit binnen een organisatie kun je leden toevoegen, beheren en hun toegangsrechten instellen. Deze gids laat zien hoe je effectief je team kunt organiseren.

## Leden overzicht

### Toegang tot ledenbeheer
1. Log in met je autoriteitsaccount
2. Navigeer naar "Organisatie" → "Leden"
3. Je ziet een overzicht van alle huidige leden

### Ledenlijst informatie
Voor elk lid zie je:
- 👤 Naam en profielfoto
- 📧 Email adres
- 🏷️ Rol binnen de organisatie
- 📅 Laatst actief
- ✅ Status (actief/inactief)

## Nieuwe leden toevoegen

### Individuele uitnodiging

**Stap-voor-stap proces**
1. Klik op "Nieuw lid uitnodigen"
2. Voer het email adres in van de nieuwe gebruiker
3. Selecteer de gewenste rol:
   - **Lid**: Basis toegang tot locaties
   - **Beheerder**: Kan ook andere leden beheren
   - **Autoriteit**: Volledige beheersrechten
4. Voeg een persoonlijk bericht toe (optioneel)
5. Klik "Uitnodiging versturen"

**Uitnodiging proces**
- De nieuwe gebruiker ontvangt een email met instructies
- Ze kunnen een account aanmaken of inloggen met bestaand account
- Na acceptatie krijgen ze toegang tot organisatie resources

### Bulk uitnodigingen

**Meerdere leden tegelijk toevoegen**
1. Ga naar "Leden" → "Bulk import"
2. Download de CSV template
3. Vul de template in met:
   - Email adressen
   - Namen
   - Gewenste rollen
4. Upload het bestand
5. Controleer de preview
6. Bevestig de bulk import

**CSV formaat**
```csv
email,name,role
jan.janssen@universiteit.nl,Jan Janssen,member
marie.klaassen@universiteit.nl,Marie Klaassen,admin
```

## Leden beheren

### Rollen en rechten

**Lid (Member)**
- Locaties zoeken en bekijken
- Eigen reservaties maken
- Profiel beheren
- Toegang tot organisatie locaties

**Beheerder (Admin)**
- Alle lid rechten
- Andere leden uitnodigen (behalve autoriteiten)
- Locatie informatie bewerken
- Reservaties van leden inzien

**Autoriteit (Authority)**
- Alle beheerder rechten
- Autoriteiten toevoegen/verwijderen
- Organisatie instellingen wijzigen
- Volledige leden- en locatiebeheer

### Rol wijzigingen

**Rol aanpassen**
1. Zoek het betreffende lid in de ledenlijst
2. Klik op de drie puntjes naast hun naam
3. Selecteer "Rol wijzigen"
4. Kies de nieuwe rol
5. Bevestig de wijziging

::: warning Belangrijk
Wees voorzichtig met het toekennen van autoriteitenrechten. Deze rol heeft volledige toegang tot organisatiebeheer.
:::

### Leden deactiveren/verwijderen

**Lid deactiveren**
- Tijdelijk toegang intrekken
- Lid blijft in de lijst maar kan niet inloggen
- Kan later opnieuw geactiveerd worden

**Lid verwijderen**
- Permanent verwijderen uit de organisatie
- Verliest alle toegang tot organisatie resources
- Kan niet ongedaan gemaakt worden

## Toegangsbeheer

### Locatie toegang

**Toegang per locatie instellen**
1. Ga naar "Locaties" → Selecteer een locatie
2. Klik op "Toegangsbeheer"
3. Stel in welke rollen toegang hebben:
   - ✅ Alle leden
   - ✅ Alleen beheerders en autoriteiten
   - ⬜ Specifieke leden selecteren

**Tijdelijke toegang**
- Stel specifieke datums in voor toegang
- Bijvoorbeeld tijdens examenweken
- Automatische activering/deactivering

### Reservatie rechten

**Reservatie beperkingen**
Per rol kun je instellen:
- Maximum aantal gelijktijdige reservaties
- Maximale duur per reservatie
- Hoe ver vooruit gereserveerd kan worden
- Welke tijdsloten beschikbaar zijn

**Goedkeuring vereist**
Voor bepaalde locaties kun je instellen dat reservaties goedkeuring nodig hebben van een beheerder of autoriteit.

## Communicatie met leden

### Mededelingen versturen

**Organisatie-brede berichten**
1. Ga naar "Communicatie" → "Nieuwe mededeling"
2. Schrijf je bericht
3. Selecteer doelgroep:
   - Alle leden
   - Specifieke rollen
   - Individuele leden
4. Kies verzendmethode:
   - Email
   - Platform notificatie
   - Beide
5. Plan verzending (direct of later)

**Urgente mededelingen**
Voor belangrijke berichten:
- Markeer als "Urgent"
- Verstuur ook SMS (indien geconfigureerd)
- Eis leesbevestiging

### Groepscommunicatie

**Teams aanmaken**
1. Ga naar "Leden" → "Teams beheren"
2. Klik "Nieuw team aanmaken"
3. Geef het team een naam
4. Voeg leden toe
5. Stel team-specifieke rechten in

**Team functies**
- Privé communicatiekanaal
- Gedeelde reservaties
- Team-specifieke locatie toegang
- Gezamenlijke agenda

## Statistieken en rapportages

### Gebruiksstatistieken

**Lid activiteit**
Bekijk per lid:
- Aantal reservaties per maand
- Meest gebruikte locaties
- Gemiddelde reservatieduur
- No-show percentage

**Organisatie overzicht**
- Totaal aantal actieve leden
- Groeicijfers (nieuwe leden per maand)
- Populairste locaties
- Piekuren voor reservaties

### Export functionaliteit

**Data export**
- Ledenlijst exporteren (CSV, Excel)
- Reservatie rapporten
- Gebruiksstatistieken
- Toegang logs

## Troubleshooting

### Veelvoorkomende problemen

**Uitnodiging niet ontvangen**
- Controleer spam folder van ontvanger
- Verificeer email adres spelling
- Verstuur uitnodiging opnieuw

**Lid kan niet inloggen**
- Check of account actief is
- Controleer of 2FA correct ingesteld is
- Reset wachtwoord indien nodig

**Toegang problemen**
- Verificeer rol en rechten van lid
- Check locatie-specifieke toegangsinstellingen
- Controleer of er tijdelijke beperkingen actief zijn

### Support en hulp
- Raadpleeg de technische documentatie
- Neem contact op met systeembeheer
- Gebruik de ingebouwde helpdesk functie

---

**Volgende stap**: Leer hoe je [locaties beheert](/nl/users/authorities/locations) binnen je organisatie.
