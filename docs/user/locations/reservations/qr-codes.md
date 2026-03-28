# Aanwezigheden & QR-codes

Om de registratie en bevestiging van aanwezigheden deels te automatiseren kun je op Blokmap werken met bevestigings-QR-codes. Enkel studenten met een geldige reservatie kunnen hiermee inchecken en hun aanwezige status bevestigen in hun app.

[SCREENSHOT_PLACEHOLDER: Screenshot of generating a QR code on the dashboard]

### Hoe werkt het?
Vanaf het dashboard kan je dynamische QR Code-SVG's genereren. Deze codes hebben speciale versleuteling waardoor ze niet klakkeloos gekopieerd kunnen worden door afwezige studenten. Ze encoderen data zoals het Location ID evenals een ondertekende `geldig-van/geldig-tot` timestamp.
Zodra een student binnen de locatie arriveert, scannen ze de QR-code met de Blokmap omgeving.

### Veiligheid (Anti-misbruik)
Om fraude te voorkomen zijn er een paar mechanismen in te stellen:
- **Roterende Secrets:** QR-codes kunnen onbruikbaar gemaakt worden door simpelweg de *Location Secret* achter in de instellingen te roteren. De oude QR-codes worden per direct ongeldig.
- **Tijdelijke validiteit:** De locatiebeheerder kiest de tijdsgranulariteit (bijv. de code blijft slechts 30 seconden of 5 minuten geldig).

Je kunt naar eigen voorkeur en budget bepalen hoe je de QR-codes voorziet: geprint op een poster, dynamisch op een goedkope e-ink display, of levensgroot op een televisie.
