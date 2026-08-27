# Patagonia — Itinerario

Webapp statica con l'itinerario del viaggio in Patagonia (26 dicembre – 5 gennaio): Buenos Aires, El Calafate, Puerto Natales, Torres del Paine, Santiago del Cile.

I giorni sono organizzati come **tab in alto con scorrimento orizzontale**: si tocca un giorno e tutto il suo contenuto (volo, pernottamento, tappe) appare sotto in un'unica schermata.

## Struttura del progetto

```
patagonia-app/
├── index.html          # struttura della pagina
├── style.css           # tema grafico (ghiacciai / Patagonia)
├── data.js             # tutti i contenuti dell'itinerario
├── script.js           # logica: tab, pannello del giorno, countdown
├── build_artifact.py   # (opzionale) genera artifact.html single-file
└── README.md
```

Nessun build step: è puro HTML/CSS/JS, si può aprire `index.html` direttamente nel browser oppure servirlo con un web server statico.

## Funzionalità

- Tab dei giorni in alto, scorrevoli orizzontalmente; il tab attivo si centra da solo.
- Un giorno alla volta: volo, pernottamento, descrizione e tappe in griglia, tutto visibile senza scrollare troppo.
- Navigazione con i pulsanti ← → in fondo al pannello **o con le frecce della tastiera**.
- Countdown alla partenza (22:40 del 26 dicembre, ora italiana) e nota sul fuso orario (−4h).
- Link diretto a un giorno specifico: l'URL si aggiorna con `#giorno-6`, quindi si può condividere il link di una singola giornata.

Per modificare l'itinerario basta editare `data.js` — non serve toccare `script.js` o `style.css`.

## Come mettere il progetto su Git / GitHub

1. **Crea un repository su GitHub** (dal sito github.com, pulsante "New repository"), ad es. `patagonia-2026`. Lascialo vuoto (senza README, senza .gitignore).

2. **Nella cartella del progetto**, apri il terminale ed esegui:

   ```bash
   cd patagonia-app
   git init
   git add .
   git commit -m "Itinerario Patagonia"
   git branch -M main
   git remote add origin https://github.com/<tuo-utente>/patagonia-2026.git
   git push -u origin main
   ```

3. **Pubblicare online gratis con GitHub Pages** (così tu e tua moglie potete aprirlo dal telefono con un link):

   - GitHub → il tuo repository → **Settings → Pages**.
   - In "Build and deployment" scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`.
   - Salva: dopo un minuto la pagina è online su `https://<tuo-utente>.github.io/patagonia-2026/`.

4. **Aggiornamenti futuri**: dopo ogni modifica

   ```bash
   git add .
   git commit -m "Aggiorna itinerario"
   git push
   ```

   GitHub Pages si aggiorna automaticamente in circa un minuto.

## build_artifact.py

Script opzionale: genera `artifact.html`, una versione in un solo file con CSS e JS inline (comoda da condividere o incollare altrove). Si lancia con `python3 build_artifact.py` e non serve per GitHub Pages.
