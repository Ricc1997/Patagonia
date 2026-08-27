// Dati dell'itinerario Patagonia — 26 dicembre / 5 gennaio
const TRIP = {
  title: "Patagonia",
  subtitle: "Buenos Aires · El Calafate · Puerto Natales · Santiago",
  startDate: "2026-12-26T22:40:00+01:00", // partenza da Roma, ora italiana
  timezoneNote: "−4h rispetto all'Italia",
  days: [
    {
      day: 1,
      dateLabel: "26 dicembre",
      tabLabel: "26 dic",
      title: "Partenza",
      location: "Roma → Buenos Aires",
      icon: "flight",
      flight: {
        route: "Roma → Buenos Aires",
        carrier: "ITA Airways",
        depart: "22:40 del 26 dicembre",
        arrive: "8:45 del 27 dicembre"
      },
      overnight: "Buenos Aires (1)",
      intro: "Giornata per riprendersi dal lungo viaggio e primo assaggio della città.",
      activities: [
        {
          title: "Quartiere di San Telmo",
          desc: "Free walking tour (spesso la domenica, giorno della Feria settimanale con bancarelle di antiquariato, arte artigiana, marionette, t-shirt personalizzate e souvenir). Da vedere: la Casa Mínima (2,50 x 13 m, la casa più piccola della città), la scultura dedicata a Mafalda e la passeggiata dei cartoni animati argentini."
        },
        {
          title: "Quartiere di Puerto Madero",
          desc: "Elegante e moderno, lungomare riqualificato, grattacieli di lusso, ristoranti esclusivi e l'iconico Puente de la Mujer (Santiago Calatrava). Ex zona portuale con architettura industriale in mattoni rossi mescolata allo stile contemporaneo: atmosfera tranquilla e sicura per passeggiare lungo il Rio de la Plata."
        },
        {
          title: "Quartiere La Boca",
          desc: "Prende il nome dalla foce (\"boca\") del Riachuelo. Case coloratissime, pavimenti a scacchi, profumo di asado, statue di Messi, Maradona e del Papa. Qui si trova lo stadio del Boca Juniors, \"La Bombonera\" (Estadio Alberto José Armando). El Caminito è la via più pittoresca, con i Conventijos (case dei poveri del porto) e la leggenda del tango omonimo."
        }
      ]
    },
    {
      day: 2,
      dateLabel: "28 dicembre",
      tabLabel: "28 dic",
      title: "Visita di Buenos Aires",
      location: "Buenos Aires",
      icon: "city",
      overnight: "Buenos Aires (2)",
      intro: "Giornata dedicata alla visita della città.",
      activities: [
        {
          title: "Quartiere di Monserrat",
          desc: "Plaza de Mayo: qui il 25 maggio 1810 ebbe luogo la Rivoluzione verso l'indipendenza; nel 1580 Juan de Garay rifondò qui la città. Ospita la Piramide de Mayo e il monumento equestre al Generale Belgrano. Luogo simbolo delle Madri dei Desaparecidos. Sulla piazza si affaccia la Casa Rosada (sede del governo)."
        },
        {
          title: "Cattedrale Metropolitana",
          desc: "Cattedrale neoclassica in Plaza de Mayo, dodici colonne come un tempio greco, cinque navate, volta a 41 m. Costruzione iniziata nel 1605, sette fasi fino a metà '800. Aperta lun–ven 8–19, weekend 9–19:30, con visite guidate."
        },
        {
          title: "Plaza del Congreso",
          desc: "Collegata a Plaza de Mayo dall'Avenida de Mayo. Ingresso libero al Parlamento, visite guidate gratuite ogni giorno 10:00–18:00 (durata 1h). Serve il passaporto."
        },
        {
          title: "Avenida 9 de Julio & Obelisco",
          desc: "Una delle strade più larghe al mondo (7 corsie). Verso sera si passeggia tra vetrine e ristoranti fino all'Obelisco (1936, alto 67,5 m). Il Teatro Colón offre visite guidate quotidiane in inglese."
        },
        {
          title: "Quartiere La Recoleta",
          desc: "Quartiere residenziale raffinato, dal convento dei Recoletos (ordine Francescano): Chiesa di Nostra Signora del Pilar e il Cimitero della Recoleta. Mercato di artigianato in Plaza Alvear e la scultura Floralis Genérica."
        },
        {
          title: "Serata: cena tipica / tango",
          desc: "Cena tipica argentina con spettacolo di tango."
        }
      ]
    },
    {
      day: 3,
      dateLabel: "29 dicembre",
      tabLabel: "29 dic",
      title: "El Calafate",
      location: "Buenos Aires → El Calafate",
      icon: "flight",
      flight: {
        route: "Buenos Aires (AEP) → El Calafate",
        carrier: "3h 20m di volo",
        depart: "4:30",
        arrive: "7:47"
      },
      overnight: "El Calafate (1)",
      intro: "Breve visita alla città di El Calafate.",
      activities: [
        {
          title: "Avenida Libertador General San Martín",
          desc: "Via principale dello shopping e dei souvenir, con numerosi tour operator che organizzano escursioni al Perito Moreno."
        },
        {
          title: "Lago Argentino",
          desc: "Passeggiata lungo Avenida Costanera (circa 6 km totali). Chiamato anche \"mare interno\" per la sua grandezza."
        }
      ]
    },
    {
      day: 4,
      dateLabel: "30 dicembre",
      tabLabel: "30 dic",
      title: "Ghiacciaio Perito Moreno",
      location: "El Calafate",
      icon: "glacier",
      overnight: "El Calafate (2)",
      intro: "Escursione full-day al ghiacciaio Perito Moreno, in autonomia o con tour guidati.",
      activities: [
        {
          title: "Trasferimento al ghiacciaio",
          desc: "Auto o bus, circa 1h30m. In bus in giornata: A/R + biglietto d'ingresso al ghiacciaio + eventuale tour, da comprare in loco."
        },
        {
          title: "I 5 sentieri del Perito Moreno",
          desc: "5 sentieri diversi, tutti segnalati con codice colore, per vedere il ghiacciaio da (quasi) tutte le angolazioni. I più belli: Sendero de la Costa e Sendero Central. In circa 3 ore si possono vedere tutti, con punti panoramici, pannelli informativi e viste scenografiche."
        },
        {
          title: "Rientro",
          desc: "Rientro a El Calafate nel tardo pomeriggio."
        }
      ]
    },
    {
      day: 5,
      dateLabel: "31 dicembre",
      tabLabel: "31 dic",
      title: "Puerto Natales",
      location: "El Calafate → Puerto Natales (Cile)",
      icon: "border",
      overnight: "Puerto Natales (1)",
      intro: "Trasferimento in bus (~6h, da acquistare in anticipo) con attraversamento della frontiera Argentina → Cile.",
      activities: [
        {
          title: "Passeggiata sul lungomare",
          desc: "Molo storico. Tre statue: il Milodonte (segnala l'ingresso in città), il Monumento al vento e la Mano (5 dita che emergono dal suolo, come la statua gemella nel Deserto di Atacama)."
        },
        {
          title: "Centro e Plaza de Armas",
          desc: "Nei pressi si trova un grande murales sulla storia degli Indios."
        }
      ]
    },
    {
      day: 6,
      dateLabel: "1 gennaio",
      tabLabel: "1 gen",
      title: "Torres del Paine",
      location: "Puerto Natales",
      icon: "mountain",
      overnight: "Puerto Natales (2)",
      intro: "Escursione full-day (in giornata) a Torres del Paine.",
      link: { label: "Sito ufficiale del parco", url: "https://torresdelpaine.com/en/" },
      activities: [
        {
          title: "Ingresso al parco",
          desc: "Da acquistare online in anticipo, non è rimborsabile.",
          link: { label: "pasesparques.cl", url: "https://pasesparques.cl" }
        },
        {
          title: "Come arrivare",
          desc: "In auto o con i bus (da prenotare almeno il giorno prima). I rifugi/campeggi lungo il Circuito W e O vanno prenotati con mesi di anticipo, specie in alta stagione; quelli fuori da questi circuiti hanno spesso posto (meglio comunque prenotare 1-2 giorni prima)."
        },
        {
          title: "Mirador Base Las Torres",
          desc: "La salita alla Laguna Base Torres è la vista iconica: 20 km e 1000 m di dislivello A/R, fattibile in giornata con un minimo di allenamento. L'ultima salita è ammessa fino alle 15:00, poi l'accesso chiude. Nessuna auto propria: da organizzare con i mezzi.",
          link: { label: "Guida al trekking in giornata", url: "https://thismustbethetrip.com/patagonia-cilena-trekking-un-giorno-torres-del-paine#C7" }
        }
      ]
    },
    {
      day: 7,
      dateLabel: "2 gennaio",
      tabLabel: "2 gen",
      title: "Puerto Natales → Santiago",
      location: "Puerto Natales → Santiago del Cile",
      icon: "flight",
      flight: {
        route: "Puerto Natales → Santiago del Cile",
        depart: "12:00",
        arrive: "14:05"
      },
      overnight: "Santiago (1)",
      intro: "Prima passeggiata in città all'arrivo.",
      activities: []
    },
    {
      day: 8,
      dateLabel: "3 gennaio",
      tabLabel: "3 gen",
      title: "Santiago del Cile",
      location: "Santiago",
      icon: "city",
      overnight: "Santiago (2)",
      intro: "Visita completa della città.",
      activities: [
        { title: "Chiesa di San Francesco", desc: "" },
        { title: "Fermata metro Universidad del Chile", desc: "Street art nella metropolitana." },
        { title: "Palacio La Moneda", desc: "Palazzo presidenziale." },
        { title: "Plaza de Armas", desc: "Il cuore di Santiago, a scacchiera, con parco verde centrale e architettura coloniale." },
        { title: "Cattedrale di Santiago", desc: "" },
        { title: "Mercado Central", desc: "" },
        { title: "Cerro Santa Lucía", desc: "Parco collinare nel bel mezzo del traffico metropolitano: scalinate, viuzze in pietra tra due forti, una chiesa, fontane, monumenti e punti panoramici sulla città e sulle Ande." },
        { title: "Cerro San Cristóbal", desc: "" },
        { title: "Barrio Lastarria / Bellavista", desc: "Quartiere bohémien con strade colorate, street art e locali." }
      ]
    },
    {
      day: 9,
      dateLabel: "4 gennaio",
      tabLabel: "4 gen",
      title: "Santiago",
      location: "Santiago",
      icon: "city",
      overnight: "Santiago (3)",
      intro: "Giornata libera a Santiago.",
      activities: []
    },
    {
      day: 10,
      dateLabel: "5 gennaio",
      tabLabel: "5 gen",
      title: "Rientro",
      location: "Santiago → Milano",
      icon: "flight",
      flight: {
        route: "Santiago (SCL) → Milano (MXP)",
        depart: "21:00 del 5 gennaio",
        arrive: "18:25 del 6 gennaio"
      },
      intro: "Volo di rientro. Arrivo a Milano il 6 gennaio.",
      activities: []
    }
  ]
};
