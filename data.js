// Dati dell'itinerario Patagonia — 26 dicembre 2026 / 6 gennaio 2027
//
// Ogni giorno ha: country (AR/CL) per i colori e la bandiera, il volo o il
// trasferimento, le tappe (activities) e i consigli del giorno (tips).
// I tipi di tip sono: pratico, chicca, mangiare, pianoB, avviso.

const TRIP = {
  title: "Patagonia",
  subtitle: "Buenos Aires · El Calafate · Puerto Natales · Santiago",
  startDate: "2026-12-26T22:40:00+01:00", // partenza da Roma, ora italiana
  timezoneNote: "−4h rispetto all'Italia",
  days: [
    {
      day: 1,
      country: "AR",
      dateLabel: "sabato 26 dicembre",
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
      overnight: null,
      intro: "Volo notturno: si dorme in aereo e si atterra la mattina del 27.",
      activities: [],
      tips: [
        {
          tipo: "pratico",
          testo: "Il volo attraversa 4 fusi orari verso ovest: provate a dormire seguendo l'ora argentina (quando in Italia è mezzanotte, a Buenos Aires sono le 20), così il primo giorno sarà meno pesante."
        },
        {
          tipo: "pratico",
          testo: "Scaricate le mappe offline di Buenos Aires, El Calafate, Puerto Natales e Santiago prima di partire: in Patagonia la copertura dati è discontinua e fuori dai centri abitati spesso manca del tutto."
        },
        {
          tipo: "pratico",
          testo: "Tenete una copia digitale (foto o PDF sul telefono) di passaporti, biglietti aerei, prenotazioni alloggi e ingressi ai parchi: serve al check-in e alla frontiera cilena, dove a volte chiedono l'indirizzo dell'alloggio."
        }
      ]
    },
    {
      day: 2,
      country: "AR",
      dateLabel: "domenica 27 dicembre",
      tabLabel: "27 dic",
      title: "Arrivo a Buenos Aires",
      location: "Buenos Aires",
      icon: "city",
      overnight: "Buenos Aires (1)",
      stay: {
        nome: "Cuore di Recoleta",
        zona: "Recoleta",
        url: "https://www.airbnb.it/rooms/813958140563470853",
        periodo: "27 → 29 dicembre · 2 notti"
      },
      intro: "Atterraggio alle 8:45. Giornata per riprendersi dal lungo viaggio e primo assaggio della città.",
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
      ],
      tips: [
        {
          tipo: "pratico",
          testo: "Colpo di fortuna: il 27 è domenica, l'unico giorno della Feria di San Telmo in Plaza Dorrego (circa 10–16). Andateci verso le 10–10:30, prima che si affolli, magari dopo un riposo post-volo."
        },
        {
          tipo: "avviso",
          testo: "A La Boca restate nelle poche strade intorno a El Caminito: appena fuori da quell'area il quartiere è più povero e ci sono segnalazioni frequenti di piccoli furti. Niente borse o macchine fotografiche in vista, e meglio non andarci dopo il tramonto."
        },
        {
          tipo: "pratico",
          testo: "Sul cambio: il divario tra peso ufficiale e mercato parallelo si è molto ridotto, quindi le carte estere funzionano bene. Tenete comunque un po' di contanti in euro o dollari per le piccole spese e i mercatini."
        },
        {
          tipo: "chicca",
          testo: "San Telmo è piena di piccole gallerie d'arte e negozi di antiquariato: perdetevi nelle traverse di Calle Defensa oltre la piazza principale, dove l'atmosfera è più autentica e i prezzi più onesti."
        }
      ]
    },
    {
      day: 3,
      country: "AR",
      dateLabel: "lunedì 28 dicembre",
      tabLabel: "28 dic",
      title: "Visita di Buenos Aires",
      location: "Buenos Aires",
      icon: "city",
      overnight: "Buenos Aires (2)",
      stay: {
        nome: "Cuore di Recoleta",
        zona: "Recoleta",
        url: "https://www.airbnb.it/rooms/813958140563470853",
        periodo: "27 → 29 dicembre · 2 notti"
      },
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
      ],
      tips: [
        {
          tipo: "pratico",
          testo: "È lunedì, ma le due tappe principali tengono: il Cimitero della Recoleta è aperto tutti i giorni dell'anno 9–17 (ingresso a pagamento per stranieri, indicativamente 15–18 USD)."
        },
        {
          tipo: "pratico",
          testo: "Le visite guidate al Teatro Colón si fanno anche il lunedì, 10:00–16:45 con partenze ogni 15 minuti (in inglese alle 11, 12, 13 e 15). Prenotate online: costa circa 30 € a testa e i posti vanno a ruba."
        },
        {
          tipo: "chicca",
          testo: "Lungo Avenida de Mayo, tra Plaza de Mayo e il Congreso, fermatevi al Café Tortoni (1858): uno dei \"bares notables\" della città, con un seminterrato dove si tengono spettacoli di tango e jazz."
        },
        {
          tipo: "mangiare",
          testo: "A due passi dal cimitero della Recoleta c'è La Biela, storico caffè-ristorante aperto dal 1850: perfetto per il pranzo o un caffè all'ombra dei ficus prima della Floralis Genérica."
        },
        {
          tipo: "pianoB",
          testo: "Se piove, le Galerías Pacífico vicino all'Obelisco sono una galleria commerciale storica al coperto con affreschi notevoli sulla cupola: un buon rifugio in pieno centro."
        }
      ]
    },
    {
      day: 4,
      country: "AR",
      dateLabel: "martedì 29 dicembre",
      tabLabel: "29 dic",
      title: "El Calafate",
      location: "Buenos Aires → El Calafate",
      icon: "flight",
      flight: {
        route: "Buenos Aires (AEP) → El Calafate",
        carrier: "3h 20m di volo",
        depart: "4:45",
        arrive: "7:47"
      },
      overnight: "El Calafate (1)",
      stay: {
        nome: "Minicasa a Calafate",
        zona: "El Calafate centro",
        url: "https://www.airbnb.it/rooms/1363222031637784731",
        periodo: "29 → 31 dicembre · 2 notti",
        note: "Self check-in con cassetta di sicurezza"
      },
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
      ],
      tips: [
        {
          tipo: "avviso",
          testo: "Il volo parte alle 4:45 del mattino da Aeroparque: significa lasciare l'alloggio a Buenos Aires intorno all'1:30 di notte. Organizzate il transfer la sera prima e verificate che la vostra sistemazione permetta il check-out notturno."
        },
        {
          tipo: "pratico",
          testo: "La passeggiata sulla Costanera è di circa 6 km: scarpe comode e giacca a vento, perché nel pomeriggio il vento patagonico rinforza anche in piena estate."
        },
        {
          tipo: "pratico",
          testo: "Approfittate del pomeriggio per prenotare in agenzia sull'Avenida Libertador il bus per il Perito Moreno del giorno dopo: si prenota il giorno prima e vi risparmiate sorprese."
        },
        {
          tipo: "chicca",
          testo: "A pochi isolati dalla via principale c'è la Reserva Laguna Nimez, zona umida per il birdwatching: ottima aggiunta alla passeggiata sul lago, soprattutto verso il tramonto quando gli uccelli sono più attivi."
        },
        {
          tipo: "mangiare",
          testo: "La Tablita è uno dei ristoranti storici di El Calafate, rinomato per l'agnello patagonico allo spiedo (cordero al asador): la cena giusta per la prima sera in Patagonia."
        }
      ]
    },
    {
      day: 5,
      country: "AR",
      dateLabel: "mercoledì 30 dicembre",
      tabLabel: "30 dic",
      title: "Ghiacciaio Perito Moreno",
      location: "El Calafate",
      icon: "glacier",
      overnight: "El Calafate (2)",
      stay: {
        nome: "Minicasa a Calafate",
        zona: "El Calafate centro",
        url: "https://www.airbnb.it/rooms/1363222031637784731",
        periodo: "29 → 31 dicembre · 2 notti",
        note: "Self check-in con cassetta di sicurezza"
      },
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
      ],
      tips: [
        {
          tipo: "pratico",
          testo: "L'ingresso al Parque Nacional Los Glaciares per stranieri costa indicativamente 50.000 ARS e si acquista online su ventaweb.apn.gob.ar. Il bus (circa 1h30 a tratta) è a parte: agenzie in paese come Caltur lo organizzano."
        },
        {
          tipo: "pratico",
          testo: "L'area delle passerelle chiude alle 20:00 e a fine dicembre la luce dura fino a tardi: non serve correre, in 3–4 ore vedete con calma sia il Sendero de la Costa sia il Sendero Central."
        },
        {
          tipo: "pratico",
          testo: "Vestitevi a strati: davanti al fronte del ghiacciaio l'aria è molto più fredda che in paese e il vento che scende dal ghiaccio è pungente anche con il sole."
        },
        {
          tipo: "chicca",
          testo: "Per avvicinarsi al fronte dall'acqua l'unica concessionaria autorizzata del parco è Hielo y Aventura, che propone il Safari Náutico: si compra in loco e cambia completamente la percezione della scala del ghiacciaio."
        },
        {
          tipo: "pianoB",
          testo: "Se il vento fa saltare il trasferimento, il Glaciarium (museo del ghiaccio poco fuori El Calafate) è il ripiego migliore: ha anche il Glacio Bar, costruito interamente in ghiaccio a −10 °C."
        }
      ]
    },
    {
      day: 6,
      country: "CL",
      countryFrom: "AR",
      dateLabel: "giovedì 31 dicembre",
      tabLabel: "31 dic",
      title: "Puerto Natales",
      location: "El Calafate → Puerto Natales (Cile)",
      icon: "border",
      overnight: "Puerto Natales (1)",
      stay: {
        nome: "Camera doppia con due letti",
        zona: "Última Esperanza",
        url: "https://www.airbnb.it/rooms/1237280199772270245",
        periodo: "31 dicembre → 2 gennaio · 2 notti"
      },
      intro: "Trasferimento in bus (~6h, da acquistare in anticipo) con attraversamento della frontiera Argentina → Cile. È anche la sera di Capodanno.",
      activities: [
        {
          title: "Passeggiata sul lungomare",
          desc: "Molo storico. Tre statue: il Milodonte (segnala l'ingresso in città), il Monumento al vento e la Mano (5 dita che emergono dal suolo, come la statua gemella nel Deserto di Atacama)."
        },
        {
          title: "Centro e Plaza de Armas",
          desc: "Nei pressi si trova un grande murales sulla storia degli Indios."
        }
      ],
      tips: [
        {
          tipo: "avviso",
          testo: "Verificate con largo anticipo il giorno esatto del bus El Calafate–Puerto Natales: almeno una compagnia indica corse regolari solo mercoledì, venerdì e domenica, e il 31 dicembre è un giovedì. Riconfermate la corsa (o cercate un altro operatore) prima di partire."
        },
        {
          tipo: "avviso",
          testo: "Alla frontiera è vietato portare in Cile frutta fresca, verdura, semi, carne e latticini — anche gli avanzi del pranzo comprato in Argentina. Va compilata la dichiarazione SAG e dichiarare il falso comporta una multa: finite le scorte prima del confine."
        },
        {
          tipo: "pratico",
          testo: "È la sera di Capodanno in una città piccola e piena di turisti: prenotate la cena appena arrivati, o anche prima, perché i pochi ristoranti si riempiono in fretta."
        },
        {
          tipo: "chicca",
          testo: "Sulla Plaza de Armas c'è il Museo Histórico Municipal, che racconta la storia degli allevatori e degli indigeni Kawésqar della zona: piccolo, poco battuto e utile per dare contesto ai murales."
        },
        {
          tipo: "mangiare",
          testo: "Afrigonia (fusion africana-patagonica) e La Mesita Grande (pizze al forno a legna) sono i due indirizzi più citati di Puerto Natales. Per il 31 prenotate comunque."
        },
        {
          tipo: "pianoB",
          testo: "Se il vento rende sgradevole il molo, le distanze in paese sono brevissime: rifugiatevi in un caffè intorno alla Plaza de Armas e riprendete il giro più tardi."
        }
      ]
    },
    {
      day: 7,
      country: "CL",
      dateLabel: "venerdì 1 gennaio",
      tabLabel: "1 gen",
      title: "Torres del Paine",
      location: "Puerto Natales",
      icon: "mountain",
      overnight: "Puerto Natales (2)",
      stay: {
        nome: "Camera doppia con due letti",
        zona: "Última Esperanza",
        url: "https://www.airbnb.it/rooms/1237280199772270245",
        periodo: "31 dicembre → 2 gennaio · 2 notti"
      },
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
      ],
      tips: [
        {
          tipo: "avviso",
          testo: "La giornata più delicata del viaggio. Bus-Sur parte da Puerto Natales alle 7:00 e alle 12:00: solo quello delle 7:00 vi porta a Laguna Amarga verso le 9:00, che è il limite ufficiale del parco per imboccare il sentiero Base Torres (uscita obbligatoria entro le 15:00). Il margine è minimo."
        },
        {
          tipo: "avviso",
          testo: "È il 1 gennaio, festivo \"irrenunciable\" in Cile: non abbiamo trovato conferma che i bus turistici viaggino con orario pieno. Telefonate alla compagnia il 31 per confermare la corsa delle 7:00, altrimenti la giornata salta."
        },
        {
          tipo: "avviso",
          testo: "Da Laguna Amarga serve ancora la navetta interna fino all'Hotel Las Torres, dove il sentiero comincia davvero. Orari e prezzo non sono pubblicati online: chiedeteli all'operatore del bus, perché quel trasferimento mangia tempo prezioso."
        },
        {
          tipo: "pratico",
          testo: "Ingresso per stranieri 32.400 CLP (indicativo), da comprare su pasesparques.cl almeno 24 ore prima: basta mostrarlo dal telefono, non serve stamparlo. Prenotate anche il bus il giorno precedente."
        },
        {
          tipo: "pratico",
          testo: "Portate 2 litri d'acqua a testa, pranzo al sacco e vento-impermeabile: sul sentiero non ci sono punti di ristoro fino al rifugio Chileno e il meteo cambia in fretta. Il rientro da Laguna Amarga ha due corse, 15:00 e 20:15."
        },
        {
          tipo: "pianoB",
          testo: "Se il vento sconsiglia la salita, puntate su mete più corte vicino all'ingresso come Salto Grande e i mirador sul Lago Nordenskjöld: viste spettacolari con una frazione della fatica."
        }
      ]
    },
    {
      day: 8,
      country: "CL",
      dateLabel: "sabato 2 gennaio",
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
      stay: {
        nome: "Monolocale con terrazza",
        zona: "Casco Histórico, vicino al Cerro Santa Lucía",
        url: "https://www.airbnb.it/rooms/1528934932051358154",
        periodo: "2 → 5 gennaio · 3 notti",
        note: "Self check-in con tastierino, portineria 24/7"
      },
      intro: "Prima passeggiata in città all'arrivo.",
      activities: [],
      tips: [
        {
          tipo: "pratico",
          testo: "Dall'aeroporto SCL il bus Centropuerto parte ogni 10–15 minuti per la stazione metro Los Héroes; in alternativa i taxi ufficiali (Taxi Oficial / Taxi Vip) si prendono all'uscita degli arrivi."
        },
        {
          tipo: "pratico",
          testo: "Comprate subito la tarjeta Bip! in una biglietteria del metro (circa 1.550 CLP più la ricarica): vale sia per metro sia per i bus, e vi servirà per tutti i giorni a Santiago."
        },
        {
          tipo: "chicca",
          testo: "Per il primo giro serale il Barrio Bellavista è la scelta giusta: quartiere bohémien con gallerie d'arte e, nel weekend, un mercatino artigianale di lapislazzuli lungo Pío Nono."
        },
        {
          tipo: "mangiare",
          testo: "Aquí Está Coco, a Bellavista, è uno storico ristorante di pesce e frutti di mare molto ben recensito: ottimo per la prima cena dopo giorni di carne patagonica."
        },
        {
          tipo: "pianoB",
          testo: "Se arrivate stanchi o fa troppo caldo, limitatevi al Parque Forestal lungo il fiume Mapocho: ombra, alberi e zero fatica."
        }
      ]
    },
    {
      day: 9,
      country: "CL",
      dateLabel: "domenica 3 gennaio",
      tabLabel: "3 gen",
      title: "Santiago del Cile",
      location: "Santiago",
      icon: "city",
      overnight: "Santiago (2)",
      stay: {
        nome: "Monolocale con terrazza",
        zona: "Casco Histórico, vicino al Cerro Santa Lucía",
        url: "https://www.airbnb.it/rooms/1528934932051358154",
        periodo: "2 → 5 gennaio · 3 notti",
        note: "Self check-in con tastierino, portineria 24/7"
      },
      intro: "Visita completa della città.",
      activities: [
        { title: "Chiesa di San Francesco", desc: "" },
        { title: "Fermata metro Universidad de Chile", desc: "Street art nella metropolitana." },
        { title: "Palacio La Moneda", desc: "Palazzo presidenziale." },
        { title: "Plaza de Armas", desc: "Il cuore di Santiago, a scacchiera, con parco verde centrale e architettura coloniale." },
        { title: "Cattedrale di Santiago", desc: "" },
        { title: "Mercado Central", desc: "" },
        { title: "Cerro Santa Lucía", desc: "Parco collinare nel bel mezzo del traffico metropolitano: scalinate, viuzze in pietra tra due forti, una chiesa, fontane, monumenti e punti panoramici sulla città e sulle Ande." },
        { title: "Cerro San Cristóbal", desc: "" },
        { title: "Barrio Lastarria / Bellavista", desc: "Quartiere bohémien con strade colorate, street art e locali." }
      ],
      tips: [
        {
          tipo: "pratico",
          testo: "È domenica e il metro apre più tardi: la Linea 1, quella del centro storico, parte solo dalle 9:00. Regolate la sveglia di conseguenza, non c'è modo di anticipare."
        },
        {
          tipo: "pratico",
          testo: "In Plaza de Armas e al Mercado Central attenzione a borseggi e telefoni lasciati sul tavolo: sono gli episodi più segnalati verso i turisti in città."
        },
        {
          tipo: "chicca",
          testo: "Alla fermata metro Universidad de Chile scendete anche solo per i murales sulla storia di Santiago: quasi tutti passano dritti verso l'uscita senza alzare lo sguardo."
        },
        {
          tipo: "mangiare",
          testo: "Mestizo, tra Lastarria e il Parque Bustamante, è uno dei ristoranti più recensiti della città per pesce e cucina cilena, con tavoli immersi nel verde."
        },
        {
          tipo: "pianoB",
          testo: "La domenica il Cerro San Cristóbal è pieno di santiaghini: se c'è troppa fila alla funicolare, ripiegate sul più piccolo Cerro Santa Lucía, di solito più tranquillo e con una vista comunque bella."
        }
      ]
    },
    {
      day: 10,
      country: "CL",
      dateLabel: "lunedì 4 gennaio",
      tabLabel: "4 gen",
      title: "Giornata libera",
      location: "Santiago e dintorni",
      icon: "city",
      overnight: "Santiago (3)",
      stay: {
        nome: "Monolocale con terrazza",
        zona: "Casco Histórico, vicino al Cerro Santa Lucía",
        url: "https://www.airbnb.it/rooms/1528934932051358154",
        periodo: "2 → 5 gennaio · 3 notti",
        note: "Self check-in con tastierino, portineria 24/7"
      },
      intro: "Nessuna tappa fissata: la giornata giusta per una gita fuori città.",
      activities: [],
      tips: [
        {
          tipo: "avviso",
          testo: "È lunedì e molti musei di Santiago chiudono proprio quel giorno (il Museo de la Memoria è confermato chiuso il lunedì). Conviene dedicare la giornata a una gita fuori città e lasciare i musei al 5."
        },
        {
          tipo: "chicca",
          testo: "Valparaíso: bus diretti Turbus dal Terminal Pajaritos, circa 1h40 e corse anche ogni 20 minuti. Partendo presto vedete Valparaíso e Viña del Mar e rientrate in giornata senza affanno."
        },
        {
          tipo: "chicca",
          testo: "La Valle di Casablanca, zona di cantine, è a circa 75 km lungo la stessa Ruta 68 che porta a Valparaíso: si può abbinare come tappa all'andata o al ritorno dalla costa."
        },
        {
          tipo: "chicca",
          testo: "Alternativa in montagna: il Cajón del Maipo verso le Ande, con base a San José de Maipo e due mete classiche, l'Embalse El Yeso e il Monumento Natural El Morado. Richiede l'intera giornata, meglio con un tour organizzato."
        },
        {
          tipo: "pianoB",
          testo: "Se il tempo è incerto o non avete voglia di spostarvi, il Barrio Lastarria tra caffè, librerie e gallerie regge benissimo una giornata senza programma."
        }
      ]
    },
    {
      day: 11,
      country: "CL",
      dateLabel: "martedì 5 gennaio",
      tabLabel: "5 gen",
      title: "Rientro",
      location: "Santiago → Milano",
      icon: "flight",
      flight: {
        route: "Santiago (SCL) → Milano (MXP)",
        depart: "21:00 del 5 gennaio",
        arrive: "18:25 del 6 gennaio"
      },
      overnight: null,
      intro: "Mattinata e primo pomeriggio liberi, poi volo di rientro. Arrivo a Milano il 6 gennaio.",
      activities: [],
      tips: [
        {
          tipo: "pratico",
          testo: "È martedì: i musei chiusi il lunedì riaprono. Se avete rinunciato al Museo de la Memoria o al Museo Chileno de Arte Precolombino, questa è la mattina per recuperarli."
        },
        {
          tipo: "pratico",
          testo: "L'aeroporto è a circa 17 km dal centro. Per un volo internazionale alle 21:00 partite dal centro nel primo pomeriggio: tra traffico, check-in e controlli il margine serve tutto."
        },
        {
          tipo: "chicca",
          testo: "Chiedete all'alloggio di tenervi i bagagli dopo il check-out: vi libera la mattina per un ultimo giro senza trascinare le valigie."
        },
        {
          tipo: "mangiare",
          testo: "Per l'ultimo pasto restate semplici: un completo o un'empanada da un chiosco del centro è il modo più cileno di chiudere il viaggio."
        },
        {
          tipo: "pianoB",
          testo: "Se il caldo di gennaio si fa sentire nel pomeriggio, un caffè con aria condizionata a Lastarria o Bellavista è il posto giusto per aspettare il transfer."
        }
      ]
    }
  ]
};
