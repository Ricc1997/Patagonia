# Patagonia — Itinerario

Webapp statica con l'itinerario del viaggio in Patagonia: 11 giorni dal 26 dicembre al 5 gennaio, tra Buenos Aires, El Calafate, Puerto Natales (Torres del Paine) e Santiago del Cile.

I giorni sono organizzati come **tab in alto con scorrimento orizzontale**: si tocca un giorno e tutto il suo contenuto — volo, alloggio, tappe e consigli — appare sotto in un'unica schermata.

## Struttura del progetto

```
patagonia-app/
├── index.html          # struttura della pagina
├── style.css           # tema grafico chiaro, titoli in DynaPuff
├── data.js             # TUTTI i contenuti: giorni, tappe, consigli, alloggi
├── script.js           # logica: tab, pannello del giorno, countdown
├── manifest.json       # nome e icona quando si aggiunge alla home (Android)
├── icon-180.png        # icona per iPhone (apple-touch-icon)
├── icon-512.png        # icona per Android
├── make_icon.py        # (opzionale) rigenera le due icone
├── build_artifact.py   # (opzionale) genera artifact.html single-file
└── README.md
```

Nessun build step: è puro HTML/CSS/JS. Si può aprire `index.html` nel browser o servirlo con un web server statico.

**Per modificare l'itinerario basta editare `data.js`** — non serve toccare `script.js` o `style.css`.

## Funzionalità

- Tab dei giorni scorrevoli in alto; il tab attivo si centra da solo.
- Un giorno alla volta: volo, alloggio, tappe in griglia e consigli, tutto a colpo d'occhio.
- **Colori per paese**: celeste per l'Argentina 🇦🇷, rosso per il Cile 🇨🇱. Cambiando giorno si ritinge tutta la pagina. Il giorno della frontiera (31 dicembre) mostra le due bandiere.
- **Consigli del giorno**: un blocco per giornata con schede colorate per tipo — 🧭 pratico, 💎 chicca, 🍽️ mangiare, 🌧️ piano B, ⚠️ attenzione (per le cose che se sbagliate rovinano la giornata).
- **Alloggi cliccabili**: il riquadro "Notte a..." apre l'annuncio Airbnb e mostra quartiere, date del soggiorno e modalità di check-in.
- Countdown alla partenza e nota sul fuso orario (−4h).
- Navigazione con i pulsanti in fondo al pannello o con le **frecce ← → della tastiera**.
- Link diretto a un giorno: l'URL si aggiorna con `#giorno-6`, quindi si può condividere una singola giornata.
- Tema scuro automatico se il dispositivo è in dark mode.
- Icona e nome dedicati quando si aggiunge alla schermata home, in modalità standalone (senza barra del browser).

## Come aggiornare il sito su GitHub

Caricare un file con lo stesso nome lo sovrascrive: non serve cancellare nulla prima.

1. Repository su github.com → **Add file** → **Upload files**.
2. Trascina i file (i *file*, non la cartella che li contiene) nell'area tratteggiata.
3. In fondo scrivi un messaggio di commit e clicca **Commit changes**.

Con GitHub Pages attivo il sito si aggiorna da solo in circa un minuto. Se vedi ancora la versione vecchia è la cache del browser: `Ctrl+F5`.

### Prima attivazione di GitHub Pages

Settings → **Pages** → *Source*: **Deploy from a branch**, branch `main`, cartella `/ (root)` → **Save**. Dopo un minuto il sito è online su `https://<utente>.github.io/<repository>/`.

## Aggiungere l'icona sull'iPhone

iOS legge l'icona solo quando aggiungi il collegamento, quindi un segnalibro già esistente non si aggiorna:

1. Tieni premuto il collegamento sulla home → **Rimuovi segnalibro**.
2. Apri il sito in **Safari** (non Chrome).
3. **Condividi** → **Aggiungi a Home** → **Aggiungi**.

## Script opzionali

- `python3 make_icon.py` — rigenera `icon-180.png` e `icon-512.png`. Utile se vuoi cambiare soggetto o colori dell'icona.
- `python3 build_artifact.py` — genera `artifact.html`, versione in un solo file con CSS e JS inline, comoda da condividere altrove. Non serve per GitHub Pages.

## Nota sui contenuti

Prezzi, orari e consigli sono indicativi e raccolti da fonti pubbliche (siti ufficiali dei parchi, compagnie di bus, SAG cileno). Vanno riconfermati a ridosso delle date, in particolare:

- il bus El Calafate → Puerto Natales del 31 dicembre (una compagnia indica corse solo mer/ven/dom);
- i bus per Torres del Paine il 1 gennaio, festivo in Cile;
- la navetta interna Laguna Amarga → Hotel Las Torres, di cui non esistono orari pubblicati.
