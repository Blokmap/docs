# Controle van de gebruikersdocumentatie

Gecontroleerd op 29–30 oktober 2026 via Firefox op `https://dev.blokmap.io`, met de bestaande aangemelde sessie. De live interface is als referentie gebruikt: de lokale frontend-checkout wijkt op belangrijke punten af.

## Bekeken schermen

- Studenten: locatieoverzicht, filters, locatiepagina, reservatiekalender, profiel, herinneringen, gekoppelde organisaties en persoonlijk reservatieoverzicht.
- Locaties: dashboard, instellingenoverzicht, zones, dialoog voor een nieuwe zone, openingsuren, rollen en voorgemaakte rollen, check-in-codes per zone en zitplaats.
- Organisaties: dashboard, locatieoverzicht, blacklist en dialoog om een profiel te blokkeren.

De screenshots bij de handleidingen tonen het locatieoverzicht, filters, organisatiedashboard, locatiedashboard, locatie-instellingen, zoneformulier en rolvoorstellen. Ze zijn in Firefox vastgelegd. Bestaande screenshots bij ongewijzigde beheeronderdelen zijn behouden; die kunnen visueel afwijken van de huidige vormgeving.

## Inhoudelijke correcties

- Capaciteit, reserveerbaarheid, stoeltoewijzing en QR-check-in worden per zone ingesteld.
- Studenten scannen een zone- of zitplaatscode met hun smartphone of de scanner op hun profiel.
- Het profiel bevat e-mailherinneringen en gekoppelde organisaties.
- Rollen bieden concrete voorgemaakte rechtencombinaties.
- De organisatie heeft een blacklist; een verwijderactie voor gewone leden is niet als beschikbare functie beschreven.
- De huidige organisatiestartpagina toont geen locatiegroepen. De oude groepspagina's blijven bereikbaar voor bestaande links en verwijzen naar de huidige werkwijzen.
- Onbevestigde toezeggingen over goedkeuringstermijnen en automatische platformbrede strafpunten zijn verwijderd.

## Grenzen van de controle

Er is geen nieuwe Google-aanmelding uitgevoerd, omdat Firefox al aangemeld was. De review bevestigt de bestaande sessie, niet het volledige Google OAuth-traject.

Er zijn geen reservaties, locaties, zones, rollen of blokkeringen aangemaakt, gewijzigd of verwijderd. Formulieren zijn uitsluitend geopend en zonder opslaan verlaten. De gecontroleerde reserveerbare locatie had geen openingsuren in de huidige week; een nieuwe boeking en de bijbehorende bevestiging, annulering, e-mail en QR-check-in zijn niet end-to-end uitgevoerd. Aanvraagstappen voor beschikbare tijdsblokken zijn mede getoetst aan de bestaande reservatiecomponenten in de lokale frontend.

De daadwerkelijke werking van rechten, overerving, blokkeringen en organisatiekoppelingen is niet met meerdere accounts getest. De documentatie beschrijft de getoonde opties en vermijdt onbevestigde garanties over hun gevolgen.

Op de ontwikkelsite werden sommige locatieafbeeldingen niet geladen. De screenshots tonen waar van toepassing die actuele toestand. Werkende QR-codes, ledenlijsten en persoonlijke e-mailadressen zijn niet als nieuwe documentatieafbeeldingen opgenomen.
