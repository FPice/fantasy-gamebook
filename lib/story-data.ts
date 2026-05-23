import type { NodoStoria, Oggetto, SetLeggendario } from "@/types/game";

// ─── Pool Oggetti ─────────────────────────────────────────────────────────────

export const OGGETTI_POOL: Oggetto[] = [
  // ── Comuni ──
  {
    id: "spada_arrugginita",
    nome: "Spada Arrugginita",
    descrizione: "Ha conosciuto tempi migliori. Molti anni fa.",
    rarità: "comune",
    slot: "arma",
    bonus: { attacco: 5 },
  },
  {
    id: "elmo_di_cartone",
    nome: "Elmo di Cartone Rinforzato",
    descrizione: "Sorprendentemente efficace contro insulti verbali.",
    rarità: "comune",
    slot: "testa",
    bonus: { difesa: 3 },
  },
  {
    id: "armatura_cuoio_logora",
    nome: "Armatura di Cuoio Logora",
    descrizione: "Puzza di avventuriero sconfitto. Ottima provenienza.",
    rarità: "comune",
    slot: "corpo",
    bonus: { difesa: 4 },
  },
  {
    id: "stivali_fango",
    nome: "Stivali del Viandante Fangoso",
    descrizione: "Lasciano impronte ovunque, anche dove non sei stato.",
    rarità: "comune",
    slot: "gambe",
    bonus: { difesa: 2 },
  },
  {
    id: "anello_cipolla",
    nome: "Anello della Cipolla Sacra",
    descrizione: "Fa piangere i nemici. Letteralmente.",
    rarità: "comune",
    slot: "anello",
    bonus: { attacco: 3 },
  },
  {
    id: "amuleto_dente_goblin",
    nome: "Amuleto del Dente di Goblin",
    descrizione: "Il goblin non ne aveva più bisogno.",
    rarità: "comune",
    slot: "amuleto",
    bonus: { punti_vita_max: 8 },
  },
  {
    id: "pugnale_taverna",
    nome: "Pugnale da Taverna",
    descrizione: "Usato più per aprire bottiglie che per combattere.",
    rarità: "comune",
    slot: "arma",
    bonus: { attacco: 4 },
  },
  {
    id: "scudo_padella",
    nome: "Padella da Cucina Rinforzata",
    descrizione: "Ottima per difendersi E per fare frittate.",
    rarità: "comune",
    slot: "corpo",
    bonus: { difesa: 5, punti_vita_max: 5 },
  },

  // ── Non Comuni ──
  {
    id: "ascia_goblin_capitano",
    nome: "Ascia del Capitano Goblin",
    descrizione: "Porta ancora il nome del precedente proprietario. Era Gruk.",
    rarità: "non_comune",
    slot: "arma",
    bonus: { attacco: 10 },
  },
  {
    id: "elmo_corvi",
    nome: "Elmo dei Corvi Urlanti",
    descrizione: "I corvi incisi sembrano fissarti. È scomodo.",
    rarità: "non_comune",
    slot: "testa",
    bonus: { difesa: 8, attacco: 3 },
  },
  {
    id: "armatura_brigantino",
    nome: "Armatura del Brigante Pentito",
    descrizione: "Il brigante si era pentito. L'armatura no.",
    rarità: "non_comune",
    slot: "corpo",
    bonus: { difesa: 10 },
  },
  {
    id: "stivali_vento",
    nome: "Stivali del Vento Capriccioso",
    descrizione: "Corrono da soli verso i pericoli. Purtroppo.",
    rarità: "non_comune",
    slot: "gambe",
    bonus: { difesa: 6, attacco: 4 },
  },
  {
    id: "anello_fortuna_storta",
    nome: "Anello della Fortuna Storta",
    descrizione: "Porta fortuna... ma solo ai tuoi nemici.",
    rarità: "non_comune",
    slot: "anello",
    bonus: { attacco: 6, punti_vita_max: 10 },
  },
  {
    id: "amuleto_luna_storta",
    nome: "Amuleto della Luna Storta",
    descrizione: "Brilla di notte. Pessimo per gli agguati.",
    rarità: "non_comune",
    slot: "amuleto",
    bonus: { punti_vita_max: 18, difesa: 4 },
  },
  {
    id: "spada_corte_spezzata",
    nome: "Spada Corta dello Squire Sfortunato",
    descrizione: "Mezza spada è meglio di nessuna spada. Forse.",
    rarità: "non_comune",
    slot: "arma",
    bonus: { attacco: 8, difesa: 3 },
  },

  // ── Rari ──
  {
    id: "lama_tempesta",
    nome: "Lama della Tempesta Minore",
    descrizione: "La tempesta maggiore era già presa.",
    rarità: "raro",
    slot: "arma",
    bonus: { attacco: 18 },
    effetto_speciale: {
      nome: "Scarica Elettrica",
      chiave: "scarica_elettrica",
      tipo: "passivo",
      descrizione: "Ogni colpo ha il 20% di stordire il nemico per un turno",
      valore: 20,
    },
  },
  {
    id: "corazza_titanio",
    nome: "Corazza del Titano Pigro",
    descrizione: "Il titano non si alzava mai. Almeno la corazza è rimasta.",
    rarità: "raro",
    slot: "corpo",
    bonus: { difesa: 20, punti_vita_max: 25 },
    effetto_speciale: {
      nome: "Pelle di Pietra",
      chiave: "pelle_pietra",
      tipo: "passivo",
      descrizione: "Riduce i danni fisici del 10%",
      valore: 10,
    },
  },
  {
    id: "elmo_aquila_reale",
    nome: "Elmo dell'Aquila Reale",
    descrizione: "Nobile. Imponente. L'aquila vuole indietro il suo nido.",
    rarità: "raro",
    slot: "testa",
    bonus: { difesa: 14, attacco: 8 },
    effetto_speciale: {
      nome: "Vista Acuta",
      chiave: "vista_acuta",
      tipo: "passivo",
      descrizione: "Aumenta la probabilità di critico del 10%",
      valore: 10,
    },
  },
  {
    id: "anello_fuoco_antico",
    nome: "Anello del Fuoco Antico",
    descrizione: "Scotta ancora. Probabilmente non si spegnerà mai.",
    rarità: "raro",
    slot: "anello",
    bonus: { attacco: 15 },
    effetto_speciale: {
      nome: "Tocco Infuocato",
      chiave: "tocco_infuocato",
      tipo: "passivo",
      descrizione: "Aggiunge 5 danni da fuoco a ogni attacco",
      valore: 5,
    },
  },
  {
    id: "amuleto_resurrezione_economica",
    nome: "Amuleto della Seconda Possibilità",
    descrizione: "Non è la Resurrezione dell'Alba, ma fa il suo lavoro.",
    rarità: "raro",
    slot: "amuleto",
    bonus: { punti_vita_max: 30 },
    effetto_speciale: {
      nome: "Vita di Riserva",
      chiave: "vita_riserva",
      tipo: "trigger",
      descrizione: "Una volta per battaglia, sopravvivi con 5 HP invece di morire",
      valore: 5,
    },
  },
  {
    id: "stivali_velocita_disperata",
    nome: "Stivali della Velocità Disperata",
    descrizione: "Corri più veloce quando sei in pericolo. O anche senza.",
    rarità: "raro",
    slot: "gambe",
    bonus: { difesa: 12, attacco: 6 },
    effetto_speciale: {
      nome: "Fuga Tattica",
      chiave: "fuga_tattica",
      tipo: "passivo",
      descrizione: "Schiva automaticamente il primo attacco di ogni battaglia",
      valore: 1,
    },
  },

  // ── Set dell'Alba Cremisi (Leggendari Guerriero) ──
  {
    id: "elmo_alba_cremisi",
    nome: "Elmo dell'Alba Cremisi",
    descrizione: "Forgiato al primo raggio dell'alba. Il fabbro era mattiniero e arrabbiato.",
    rarità: "leggendario",
    slot: "testa",
    bonus: { attacco: 12, difesa: 10 },
    nome_set: "corona_alba_eterna",
    effetto_speciale: {
      nome: "Visione Solare",
      chiave: "visione_solare",
      tipo: "passivo",
      descrizione: "Vedi attraverso le illusioni nemiche e le nebbie oscure",
      valore: 1,
    },
  },
  {
    id: "armatura_alba_cremisi",
    nome: "Armatura dell'Alba Cremisi",
    descrizione: "Riflette la luce del sole con abbagliante arroganza.",
    rarità: "leggendario",
    slot: "corpo",
    bonus: { difesa: 22, punti_vita_max: 20 },
    nome_set: "corona_alba_eterna",
    effetto_speciale: {
      nome: "Scudo Solare",
      chiave: "scudo_solare",
      tipo: "passivo",
      descrizione: "Riflette il 5% dei danni subiti al nemico",
      valore: 5,
    },
  },
  {
    id: "stivali_alba_cremisi",
    nome: "Stivali dell'Alba Cremisi",
    descrizione: "Non lasciano impronte. I nemici non sanno da dove arriva il pericolo.",
    rarità: "leggendario",
    slot: "gambe",
    bonus: { difesa: 10, attacco: 8 },
    nome_set: "corona_alba_eterna",
    effetto_speciale: {
      nome: "Passo Solare",
      chiave: "passo_solare",
      tipo: "passivo",
      descrizione: "Aumenta la velocità di movimento: agisci sempre per primo",
      valore: 1,
    },
  },
  {
    id: "amuleto_alba_cremisi",
    nome: "Amuleto dell'Alba Cremisi",
    descrizione: "Pulsa con la luce del primo sole. Ti scalda il petto. E la pancia.",
    rarità: "leggendario",
    slot: "amuleto",
    bonus: { punti_vita_max: 35, attacco: 10 },
    nome_set: "corona_alba_eterna",
    effetto_speciale: {
      nome: "Cuore dell'Alba",
      chiave: "cuore_alba",
      tipo: "passivo",
      descrizione: "Recuperi il 15% degli HP massimi all'inizio di ogni battaglia",
      valore: 15,
    },
  },

  // ── Armatura dell'Ombra Silenziosa (Leggendari Assassino) ──
  {
    id: "cappuccio_ombra_silenziosa",
    nome: "Cappuccio dell'Ombra Silenziosa",
    descrizione: "Quando lo indossi, la tua faccia diventa... opzionale.",
    rarità: "leggendario",
    slot: "testa",
    bonus: { attacco: 15, difesa: 6 },
    nome_set: "velo_ombre_eterne",
    effetto_speciale: {
      nome: "Volto dell'Ombra",
      chiave: "volto_ombra",
      tipo: "passivo",
      descrizione: "I nemici hanno il 20% in meno di probabilità di colpirti",
      valore: 20,
    },
  },
  {
    id: "guanti_ombra_silenziosa",
    nome: "Guanti dell'Ombra Silenziosa",
    descrizione: "Non fanno rumore. Non lasciano tracce. Non firmano ricevute.",
    rarità: "leggendario",
    slot: "arma",
    bonus: { attacco: 20 },
    nome_set: "velo_ombre_eterne",
    effetto_speciale: {
      nome: "Dita Silenziose",
      chiave: "dita_silenziose",
      tipo: "passivo",
      descrizione: "I tuoi attacchi non possono essere bloccati con scudi",
      valore: 1,
    },
  },
  {
    id: "mantello_ombra_silenziosa",
    nome: "Mantello dell'Ombra Silenziosa",
    descrizione: "Si fonde con le ombre. Anche con quelle sbagliate.",
    rarità: "leggendario",
    slot: "corpo",
    bonus: { difesa: 14, attacco: 8 },
    nome_set: "velo_ombre_eterne",
    effetto_speciale: {
      nome: "Mimetismo Oscuro",
      chiave: "mimetismo_oscuro",
      tipo: "passivo",
      descrizione: "Primo attacco di ogni battaglia conta sempre come critico",
      valore: 1,
    },
  },
  {
    id: "anello_ombra_silenziosa",
    nome: "Anello dell'Ombra Silenziosa",
    descrizione: "Invisibile a occhio nudo. Anche quando lo stai indossando.",
    rarità: "leggendario",
    slot: "anello",
    bonus: { attacco: 12, punti_vita_max: 15 },
    nome_set: "velo_ombre_eterne",
    effetto_speciale: {
      nome: "Sigillo del Vuoto",
      chiave: "sigillo_vuoto",
      tipo: "passivo",
      descrizione: "Ogni terzo attacco drena 8 HP dal nemico indipendentemente dalla difesa",
      valore: 8,
    },
  },

  // ── Reliquie del Vecchio Saggio (Leggendari Mago) ──
  {
    id: "bastone_vecchio_saggio",
    nome: "Bastone del Vecchio Saggio",
    descrizione: "Il vecchio era molto saggio. E molto vecchio. E molto stanco.",
    rarità: "leggendario",
    slot: "arma",
    bonus: { attacco: 22 },
    nome_set: "patto_drago_primordiale",
    effetto_speciale: {
      nome: "Canalizzazione Arcana",
      chiave: "canalizzazione_arcana",
      tipo: "passivo",
      descrizione: "Il 20% dei danni inflitti ignora completamente la difesa nemica",
      valore: 20,
    },
  },
  {
    id: "veste_vecchio_saggio",
    nome: "Veste del Vecchio Saggio",
    descrizione: "Porta ancora le macchie dell'ultimo esperimento. Meglio non chiedere.",
    rarità: "leggendario",
    slot: "corpo",
    bonus: { difesa: 12, punti_vita_max: 30 },
    nome_set: "patto_drago_primordiale",
    effetto_speciale: {
      nome: "Barriera Arcana",
      chiave: "barriera_arcana",
      tipo: "passivo",
      descrizione: "Assorbe i primi 10 danni di ogni attacco nemico",
      valore: 10,
    },
  },
  {
    id: "anello_vecchio_saggio",
    nome: "Anello del Vecchio Saggio",
    descrizione: "Contiene la saggezza di secoli. E anche qualcosa di appiccicoso.",
    rarità: "leggendario",
    slot: "anello",
    bonus: { attacco: 10, difesa: 8, punti_vita_max: 20 },
    nome_set: "patto_drago_primordiale",
    effetto_speciale: {
      nome: "Memoria Arcana",
      chiave: "memoria_arcana",
      tipo: "passivo",
      descrizione: "Ripete automaticamente l'ultima abilità usata ogni 4 turni",
      valore: 4,
    },
  },
  {
    id: "grimorio_vecchio_saggio",
    nome: "Grimorio del Vecchio Saggio",
    descrizione: "Le pagine si voltano da sole. Spesso alla pagina sbagliata.",
    rarità: "leggendario",
    slot: "amuleto",
    bonus: { attacco: 15, punti_vita_max: 25 },
    nome_set: "patto_drago_primordiale",
    effetto_speciale: {
      nome: "Maledizione del Tomo",
      chiave: "maledizione_tomo",
      tipo: "attivo",
      descrizione: "Maledice il nemico: subisce il 25% di danni in più per 3 turni",
      valore: 25,
    },
  },
];

// ─── Nodi Storia ──────────────────────────────────────────────────────────────

export const NODI_STORIA: NodoStoria[] = [
  // ════════════════════════════════════════════════════════════════════════════
  // ATTO I – L'INIZIO GLORIOSO (E CAOTICO)
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "inizio",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Ti chiami Aldric il Mediocre — nome scelto dal villaggio, non da te. Stai seduto alla taverna 'Il Cinghiale Sbronzo' con tre monete d'oro, una spada più arrugginita della tua carriera e un sogno: diventare leggendario. Un vecchio burbero si avvicina e sbatte sul tavolo una pergamena. 'Trovami l'Amuleto dell'Abisso e ti pago cento monete d'oro.' Si chiama Voren il Saggio. Ha l'aria di chi ha già mandato altri cinque avventurieri a morire.",
    testo_en:
      "Your name is Aldric the Mediocre — chosen by the village, not by you. You sit at the 'Drunken Boar' tavern with three gold coins, a rustier sword than your career, and a dream: to become legendary. A grumpy old man approaches and slams a scroll on the table. 'Find me the Amulet of the Abyss and I'll pay you a hundred gold.' His name is Voren the Wise. He has the look of someone who has already sent five other adventurers to their deaths.",
    scelte: [
      {
        id: "inizio_a",
        nodo_id: "inizio",
        testo_it: "Accetti immediatamente e firmi con un sorriso eroico",
        testo_en: "You accept immediately and sign with a heroic smile",
        nodo_successivo_id: "strada_per_bosco",
        ordine: 1,
      },
      {
        id: "inizio_b",
        nodo_id: "inizio",
        testo_it: "Contratti il prezzo chiedendo duecento monete",
        testo_en: "You negotiate asking for two hundred coins",
        nodo_successivo_id: "mercato_equipaggiamento",
        ordine: 2,
      },
      {
        id: "inizio_c",
        nodo_id: "inizio",
        testo_it: "Chiedi dettagli su questo 'Abisso' prima di decidere",
        testo_en: "You ask for details about this 'Abyss' before deciding",
        nodo_successivo_id: "biblioteca_voren",
        ordine: 3,
      },
      {
        id: "inizio_d",
        nodo_id: "inizio",
        testo_it: "Fingi di non capire l'italiano sperando che se ne vada",
        testo_en: "You pretend not to understand Italian hoping he leaves",
        nodo_successivo_id: "taverna_disastro",
        ordine: 4,
      },
    ],
  },

  {
    id: "mercato_equipaggiamento",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Voren sbuffa ma accetta duecento monete. Ti dà un anticipo di dieci monete — abbastanza per comprare qualcosa di decente al mercato del villaggio. La venditrice, Marta, ti guarda con la pietà riservata ai condannati a morte. 'Ho questo elmo di cuoio, questi stivali rafforzati e questa spada che è quasi dritta.' Cosa compri?",
    testo_en:
      "Voren grumbles but agrees to two hundred coins. He gives you a ten-coin advance — enough to buy something decent at the village market. The vendor, Marta, looks at you with the pity reserved for the condemned. 'I have this leather helm, these reinforced boots and this sword that is almost straight.' What do you buy?",
    scelte: [
      {
        id: "mercato_a",
        nodo_id: "mercato_equipaggiamento",
        testo_it: "Compri tutto quello che puoi e ti impoverisci gloriosamente",
        testo_en: "You buy everything you can and gloriously impoverish yourself",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 1,
      },
      {
        id: "mercato_b",
        nodo_id: "mercato_equipaggiamento",
        testo_it: "Compri solo la spada — il metallo batte il cuoio",
        testo_en: "You buy only the sword — steel beats leather",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 2,
      },
      {
        id: "mercato_c",
        nodo_id: "mercato_equipaggiamento",
        testo_it: "Compri le provviste di cibo invece dell'equipaggiamento",
        testo_en: "You buy food supplies instead of equipment",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "mercato_d",
        nodo_id: "mercato_equipaggiamento",
        testo_it: "Provi a rubare qualcosa e ti beccano immediatamente",
        testo_en: "You try to steal something and get caught immediately",
        nodo_successivo_id: "prigione_villaggio",
        ordine: 4,
      },
    ],
  },

  {
    id: "biblioteca_voren",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Voren ti porta nella sua biblioteca — tre scaffali di libri, un gatto che ti fissa con disprezzo, e una mappa spiegazzata. 'L'Amuleto è nelle Rovine dell'Abisso a nord. Ma attenzione: la Foresta del Lamento è piena di goblin, il Ponte degli Spiriti è infestato, e il Guardiano delle Rovine è... difficile.' Pausa. 'Molto difficile.' Il gatto annuisce solennemente.",
    testo_en:
      "Voren brings you to his library — three shelves of books, a cat that stares at you with contempt, and a crumpled map. 'The Amulet is in the Ruins of the Abyss to the north. But beware: the Forest of Lament is full of goblins, the Bridge of Spirits is haunted, and the Guardian of the Ruins is... difficult.' Pause. 'Very difficult.' The cat nods solemnly.",
    scelte: [
      {
        id: "biblioteca_a",
        nodo_id: "biblioteca_voren",
        testo_it: "Studi la mappa con attenzione cercando scorciatoie",
        testo_en: "You study the map carefully looking for shortcuts",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 1,
      },
      {
        id: "biblioteca_b",
        nodo_id: "biblioteca_voren",
        testo_it: "Chiedi al gatto se lui conosce la strada",
        testo_en: "You ask the cat if it knows the way",
        nodo_successivo_id: "gatto_oracolo",
        ordine: 2,
      },
      {
        id: "biblioteca_c",
        nodo_id: "biblioteca_voren",
        testo_it: "Rubi uno dei libri senza che Voren lo noti",
        testo_en: "You steal one of the books without Voren noticing",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "biblioteca_d",
        nodo_id: "biblioteca_voren",
        testo_it: "Fingi di svenire dalla paura per impressionare il saggio",
        testo_en: "You pretend to faint from fear to impress the sage",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 4,
      },
    ],
  },

  {
    id: "taverna_disastro",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Voren capisce benissimo l'italiano. E anche il tuo piano. Sbuffa con la stanchezza di un uomo che ha visto troppe buffonate. 'Non importa. Sei l'unico avventuriero rimasto in questo dannato villaggio.' Un nano ubriaco al bancone ti lancia una brocca di birra dalla parte del manico. Occasione d'oro.",
    testo_en:
      "Voren understands Italian perfectly. And your plan too. He sighs with the weariness of a man who has seen too many buffooneries. 'No matter. You are the only adventurer left in this damned village.' A drunk dwarf at the bar throws a beer mug at you handle-first. Golden opportunity.",
    scelte: [
      {
        id: "taverna_a",
        nodo_id: "taverna_disastro",
        testo_it: "La prendi al volo e la bevi d'un fiato davanti a tutti",
        testo_en: "You catch it mid-air and drink it in one gulp before everyone",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 1,
      },
      {
        id: "taverna_b",
        nodo_id: "taverna_disastro",
        testo_it: "La schivi con eleganza inaspettata",
        testo_en: "You dodge it with unexpected elegance",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 2,
      },
      {
        id: "taverna_c",
        nodo_id: "taverna_disastro",
        testo_it: "La lasci passare e si rompe sul muro",
        testo_en: "You let it fly past and it breaks on the wall",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "taverna_d",
        nodo_id: "taverna_disastro",
        testo_it: "La usi come scudo e la lanci indietro al nano",
        testo_en: "You use it as a shield and throw it back at the dwarf",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 4,
      },
    ],
  },

  {
    id: "gatto_oracolo",
    tipo: "storia",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "Il gatto ti fissa per un lungo momento imbarazzante. Poi parla. 'Miagolo.' Voren sobbalza. 'Non l'avevo mai sentito fare questo. Normalmente graffia e basta.' Il gatto salta sul tavolo, cammina sulla mappa, e lascia una serie di impronte che — incredibilmente — sembrano indicare un percorso sicuro attraverso la foresta. Poi si lecca una zampa con aria di superiorità.",
    testo_en:
      "The cat stares at you for a long awkward moment. Then it speaks. 'Meow.' Voren jumps. 'I had never heard it do that. Normally it just scratches.' The cat jumps on the table, walks across the map, and leaves a series of paw prints that — incredibly — seem to indicate a safe path through the forest. Then it licks a paw with an air of superiority.",
    scelte: [
      {
        id: "gatto_a",
        nodo_id: "gatto_oracolo",
        testo_it: "Segui fedelmente le impronte del gatto sulla mappa",
        testo_en: "You faithfully follow the cat's paw prints on the map",
        nodo_successivo_id: "foresta_sentiero_sicuro",
        ordine: 1,
      },
      {
        id: "gatto_b",
        nodo_id: "gatto_oracolo",
        testo_it: "Porti il gatto con te come guida spirituale",
        testo_en: "You bring the cat with you as a spiritual guide",
        nodo_successivo_id: "foresta_con_gatto",
        ordine: 2,
      },
      {
        id: "gatto_c",
        nodo_id: "gatto_oracolo",
        testo_it: "Ignori il gatto e usi la mappa originale",
        testo_en: "You ignore the cat and use the original map",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "gatto_d",
        nodo_id: "gatto_oracolo",
        testo_it: "Provi a capire il linguaggio del gatto con grandi gesti",
        testo_en: "You try to understand cat language with grand gestures",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 4,
      },
    ],
  },

  {
    id: "prigione_villaggio",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Passi la notte in prigione con un ladro professionista di nome Sek che ti insegna la differenza tra 'rubare' e 'prendere in prestito senza permesso'. La mattina dopo, Voren paga la tua cauzione borbottando. Nella cella hai trovato qualcosa che qualcuno ha dimenticato.",
    testo_en:
      "You spend the night in jail with a professional thief named Sek who teaches you the difference between 'stealing' and 'borrowing without permission'. The next morning, Voren pays your bail while grumbling. In the cell you found something someone forgot.",
    scelte: [
      {
        id: "prigione_a",
        nodo_id: "prigione_villaggio",
        testo_it: "Ringrazi Sek e lo convinci a unirti come guida",
        testo_en: "You thank Sek and convince him to join you as a guide",
        nodo_successivo_id: "foresta_con_sek",
        ordine: 1,
      },
      {
        id: "prigione_b",
        nodo_id: "prigione_villaggio",
        testo_it: "Parti subito con la coda tra le gambe",
        testo_en: "You leave immediately with your tail between your legs",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 2,
      },
      {
        id: "prigione_c",
        nodo_id: "prigione_villaggio",
        testo_it: "Chiedi a Sek la tecnica migliore per non farsi beccare",
        testo_en: "You ask Sek the best technique for not getting caught",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "prigione_d",
        nodo_id: "prigione_villaggio",
        testo_it: "Scrivi le tue memorie sulla parete della cella per i posteri",
        testo_en: "You write your memoirs on the cell wall for posterity",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 4,
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ATTO II – LA FORESTA DEL LAMENTO
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "foresta_ingresso",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La Foresta del Lamento si apre davanti a te come una bocca spalancata. Gli alberi sono storti, il vento ululа come un bardo di terza categoria, e un cartello ammaccato recita: 'PERICOLO. Goblin. Spiriti. Orsi. Tasse.' Qualcuno ha aggiunto a mano 'e l'orso paga le tasse.' Al centro del sentiero un goblin ti sbarra la strada con una lancia troppo grande per lui.",
    testo_en:
      "The Forest of Lament opens before you like a gaping mouth. The trees are crooked, the wind howls like a third-rate bard, and a dented sign reads: 'DANGER. Goblins. Spirits. Bears. Taxes.' Someone has handwritten 'and the bear pays taxes.' In the middle of the path a goblin blocks your way with a spear too big for him.",
    scelte: [
      {
        id: "foresta_a",
        nodo_id: "foresta_ingresso",
        testo_it: "Carichi il goblin con un urlo di guerra improvvisato",
        testo_en: "You charge the goblin with an improvised battle cry",
        nodo_successivo_id: "scontro_goblin_pattuglia",
        ordine: 1,
      },
      {
        id: "foresta_b",
        nodo_id: "foresta_ingresso",
        testo_it: "Provi a convincerlo di essere un ispettore delle tasse",
        testo_en: "You try to convince him you are a tax inspector",
        nodo_successivo_id: "trattativa_goblin",
        ordine: 2,
      },
      {
        id: "foresta_c",
        nodo_id: "foresta_ingresso",
        testo_it: "Ti nascondi nei cespugli aspettando che si annoi",
        testo_en: "You hide in the bushes waiting for him to get bored",
        nodo_successivo_id: "bivio_foresta",
        ordine: 3,
      },
      {
        id: "foresta_d",
        nodo_id: "foresta_ingresso",
        testo_it: "Offri al goblin le tue ultime monete come pedaggio",
        testo_en: "You offer the goblin your last coins as a toll",
        nodo_successivo_id: "accordo_goblin",
        ordine: 4,
      },
    ],
  },

  {
    id: "foresta_sentiero_sicuro",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il percorso del gatto ti porta lungo un sentiero nascosto tra le radici degli alberi antichi. I goblin pattugliano a pochi metri ma non ti vedono — il sentiero è coperto da una magia antica. Trovi i resti di un accampamento di un avventuriero precedente: c'è ancora del loot intatto.",
    testo_en:
      "The cat's route leads you along a hidden path between the roots of ancient trees. The goblins patrol just meters away but don't see you — the path is covered by ancient magic. You find the remains of a previous adventurer's camp: there is still untouched loot.",
    scelte: [
      {
        id: "sentiero_a",
        nodo_id: "foresta_sentiero_sicuro",
        testo_it: "Prendi il loot e continui in silenzio",
        testo_en: "You take the loot and continue in silence",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "sentiero_b",
        nodo_id: "foresta_sentiero_sicuro",
        testo_it: "Lasci un segno per onorare l'avventuriero caduto",
        testo_en: "You leave a mark to honor the fallen adventurer",
        nodo_successivo_id: "spirito_alleato",
        ordine: 2,
      },
      {
        id: "sentiero_c",
        nodo_id: "foresta_sentiero_sicuro",
        testo_it: "Esplori l'accampamento cercando indizi sull'Amuleto",
        testo_en: "You explore the camp looking for clues about the Amulet",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 3,
      },
      {
        id: "sentiero_d",
        nodo_id: "foresta_sentiero_sicuro",
        testo_it: "Ti accampi qui per riposare — sembra abbastanza sicuro",
        testo_en: "You camp here to rest — it seems safe enough",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "foresta_con_gatto",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il gatto — che hai chiamato Oracolo — cammina davanti a te con un'aria di chi conosce segreti che non condividerà mai. Ogni volta che ti avvicini a un pericolo, si siede e ti fissa finché non cambi direzione. È irritante. Ma efficace. Superi l'intera foresta senza uno scontro. Alla fine del bosco, Oracolo trova qualcosa tra le radici.",
    testo_en:
      "The cat — whom you've named Oracle — walks ahead of you with the air of someone who knows secrets they'll never share. Whenever you approach danger, it sits and stares at you until you change direction. It's annoying. But effective. You cross the entire forest without a single fight. At the edge of the woods, Oracle finds something among the roots.",
    scelte: [
      {
        id: "gatto2_a",
        nodo_id: "foresta_con_gatto",
        testo_it: "Lasci che Oracolo ti guidi verso il Ponte degli Spiriti",
        testo_en: "You let Oracle guide you to the Bridge of Spirits",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "gatto2_b",
        nodo_id: "foresta_con_gatto",
        testo_it: "Esamini attentamente ciò che il gatto ha trovato",
        testo_en: "You carefully examine what the cat found",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 2,
      },
      {
        id: "gatto2_c",
        nodo_id: "foresta_con_gatto",
        testo_it: "Ringrazi il gatto con del cibo secco trovato nello zaino",
        testo_en: "You thank the cat with some dry food found in your pack",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 3,
      },
      {
        id: "gatto2_d",
        nodo_id: "foresta_con_gatto",
        testo_it: "Decidi che il gatto è il vero eroe di questa avventura",
        testo_en: "You decide the cat is the true hero of this adventure",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "foresta_con_sek",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Sek il ladro si rivela un compagno d'arme sorprendente. Sa dove sono le trappole, conosce ogni goblin per nome, e ha un'impressionante collezione di grimaldelli. 'Questo bosco l'ho girato cento volte,' dice allegramente, 'soprattutto di notte con la guardia alle calcagna.' Vi trovate davanti a un bivio segnato da due crani.",
    testo_en:
      "Sek the thief turns out to be a surprisingly capable companion. He knows where the traps are, knows every goblin by name, and has an impressive collection of lockpicks. 'I've wandered this forest a hundred times,' he says cheerfully, 'especially at night with the guard on my heels.' You find yourselves at a fork marked by two skulls.",
    scelte: [
      {
        id: "sek_a",
        nodo_id: "foresta_con_sek",
        testo_it: "Seguite il sentiero di destra — Sek dice che è più sicuro",
        testo_en: "You follow the right path — Sek says it is safer",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "sek_b",
        nodo_id: "foresta_con_sek",
        testo_it: "Prendete il sentiero di sinistra dove si nasconde qualcosa",
        testo_en: "You take the left path where something is hiding",
        nodo_successivo_id: "grotta_tesoro_foresta",
        ordine: 2,
      },
      {
        id: "sek_c",
        nodo_id: "foresta_con_sek",
        testo_it: "Sek viene fermato dalla propria coscienza e se ne va",
        testo_en: "Sek is stopped by his own conscience and leaves",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "sek_d",
        nodo_id: "foresta_con_sek",
        testo_it: "Convinci Sek a rubare il loot dalla guardia goblin",
        testo_en: "You convince Sek to steal the loot from the goblin guard",
        nodo_successivo_id: "colpo_goblin",
        ordine: 4,
      },
    ],
  },

  {
    id: "scontro_goblin_pattuglia",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il tuo urlo di guerra — qualcosa tra un 'AAARRGH' e un 'mamma mia' — spaventa abbastanza il goblin da farlo inciampare nella sua stessa lancia. Ne arrivano altri tre dai cespugli. La battaglia è caotica, breve, e alla fine sei tu in piedi (di misura). I goblin fuggono lasciando indietro le loro cose.",
    testo_en:
      "Your battle cry — somewhere between 'AAARRGH' and 'oh my goodness' — scares the goblin enough to make him trip on his own spear. Three more come out of the bushes. The battle is chaotic, brief, and in the end you are the one standing (barely). The goblins flee leaving their belongings behind.",
    scelte: [
      {
        id: "goblin1_a",
        nodo_id: "scontro_goblin_pattuglia",
        testo_it: "Raccogli il loot e continui verso il Ponte degli Spiriti",
        testo_en: "You collect the loot and continue toward the Bridge of Spirits",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "goblin1_b",
        nodo_id: "scontro_goblin_pattuglia",
        testo_it: "Segui i goblin in fuga per scoprire il loro accampamento",
        testo_en: "You follow the fleeing goblins to find their camp",
        nodo_successivo_id: "accampamento_goblin",
        ordine: 2,
      },
      {
        id: "goblin1_c",
        nodo_id: "scontro_goblin_pattuglia",
        testo_it: "Ti fermi a fasciare le ferite prima di procedere",
        testo_en: "You stop to bandage your wounds before proceeding",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 3,
      },
      {
        id: "goblin1_d",
        nodo_id: "scontro_goblin_pattuglia",
        testo_it: "Pianti una bandiera sul campo di battaglia — questa è casa tua ora",
        testo_en: "You plant a flag on the battlefield — this is your home now",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "trattativa_goblin",
    tipo: "storia",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "Il goblin ci pensa su. Inspira. Espira. 'Ispettore tasse... hai timbro?' Non hai nessun timbro. Improvvisi tirandori fuori un bottone dorato dalla tasca. Il goblin lo esamina con attenzione. 'Governo reale?' 'Sì,' menti spudoratamente. Il goblin si mette sull'attenti, poi ti porta al suo superiore — il Capitano Gruk — che ha l'aria di voler parlare con il tuo supervisore.",
    testo_en:
      "The goblin thinks it over. Inhales. Exhales. 'Tax inspector... you have stamp?' You have no stamp. You improvise by pulling a golden button from your pocket. The goblin examines it carefully. 'Royal government?' 'Yes,' you lie shamelessly. The goblin stands at attention, then leads you to his superior — Captain Gruk — who looks like he wants to speak to your supervisor.",
    scelte: [
      {
        id: "trattativa_a",
        nodo_id: "trattativa_goblin",
        testo_it: "Mantieni la finzione e 'ispeziona' l'accampamento goblin",
        testo_en: "You maintain the pretense and 'inspect' the goblin camp",
        nodo_successivo_id: "accampamento_goblin",
        ordine: 1,
      },
      {
        id: "trattativa_b",
        nodo_id: "trattativa_goblin",
        testo_it: "Confessi tutto a Gruk e ti scusi profusamente",
        testo_en: "You confess everything to Gruk and apologize profusely",
        nodo_successivo_id: "scontro_goblin_pattuglia",
        ordine: 2,
      },
      {
        id: "trattativa_c",
        nodo_id: "trattativa_goblin",
        testo_it: "Scappi approfittando della confusione",
        testo_en: "You run away taking advantage of the confusion",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 3,
      },
      {
        id: "trattativa_d",
        nodo_id: "trattativa_goblin",
        testo_it: "Imponi una multa a Gruk per il caos della foresta",
        testo_en: "You issue Gruk a fine for the chaos in the forest",
        nodo_successivo_id: "accordo_goblin",
        ordine: 4,
      },
    ],
  },

  {
    id: "imboscata_goblin",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Nascodersi nei cespugli era un piano eccellente. Peccato che i cespugli fossero già abitati da tre goblin che stavano facendo lo stesso — aspettare che tu passassi. È un'imboscata all'imboscata. La situazione è grottesca. La battaglia è breve ma educativa.",
    testo_en:
      "Hiding in the bushes was an excellent plan. Too bad the bushes were already home to three goblins doing the same — waiting for you to pass. It is an ambush of an ambush. The situation is grotesque. The battle is brief but educational.",
    scelte: [
      {
        id: "imboscata_a",
        nodo_id: "imboscata_goblin",
        testo_it: "Combatti con la furia del tradito",
        testo_en: "You fight with the fury of the betrayed",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "imboscata_b",
        nodo_id: "imboscata_goblin",
        testo_it: "Ti arrendi e poi scappi appena puoi",
        testo_en: "You surrender and then escape as soon as you can",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "imboscata_c",
        nodo_id: "imboscata_goblin",
        testo_it: "Ridi della situazione — anche i goblin ridono — poi scappi",
        testo_en: "You laugh at the situation — the goblins laugh too — then you run",
        nodo_successivo_id: "accordo_goblin",
        ordine: 3,
      },
      {
        id: "imboscata_d",
        nodo_id: "imboscata_goblin",
        testo_it: "Urli 'CONTRIMBOSCATA' e li confusi abbastanza da vincere",
        testo_en: "You yell 'COUNTER-AMBUSH' and confuse them enough to win",
        nodo_successivo_id: "accampamento_goblin",
        ordine: 4,
      },
    ],
  },

  {
    id: "accordo_goblin",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "I goblin accettano le tue monete (o la tua resa, o la tua strana logica) con sorprendente sportività. Il capo, un goblin con un cappello di carta alluminio, ti stringe la mano. 'Tu passi, noi non ti ammazzamo. Affare fatto.' Ti aprono la strada verso nord. Uno dei goblin ti rincorre — vuole darti qualcosa in cambio. Piccola creatura onesta.",
    testo_en:
      "The goblins accept your coins (or your surrender, or your strange logic) with surprising sportsmanship. The leader, a goblin with a tinfoil hat, shakes your hand. 'You pass, we not kill you. Deal made.' They clear your path north. One of the goblins runs after you — he wants to give you something in return. Honest little creature.",
    scelte: [
      {
        id: "accordo_a",
        nodo_id: "accordo_goblin",
        testo_it: "Accetti il dono del goblin con gratitudine",
        testo_en: "You accept the goblin's gift with gratitude",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "accordo_b",
        nodo_id: "accordo_goblin",
        testo_it: "Rifiuti il dono — non ti fidi dei goblin",
        testo_en: "You refuse the gift — you don't trust goblins",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "accordo_c",
        nodo_id: "accordo_goblin",
        testo_it: "Proponi al goblin di unirti come guida nella foresta",
        testo_en: "You propose the goblin join you as a forest guide",
        nodo_successivo_id: "foresta_con_sek",
        ordine: 3,
      },
      {
        id: "accordo_d",
        nodo_id: "accordo_goblin",
        testo_it: "Scambi il dono del goblin con qualcosa del tuo zaino",
        testo_en: "You trade the goblin's gift for something from your pack",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "accampamento_goblin",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "L'accampamento goblin è sorprendentemente organizzato — hanno persino una lista della spesa scritta in goblinese sulla tenda principale. In una cassa mal nascosta trovi un mucchio di oggetti rubati ad avventurieri precedenti. Il bottino è notevole.",
    testo_en:
      "The goblin camp is surprisingly organized — they even have a shopping list written in goblin on the main tent. In a poorly hidden chest you find a pile of objects stolen from previous adventurers. The haul is notable.",
    scelte: [
      {
        id: "campo_a",
        nodo_id: "accampamento_goblin",
        testo_it: "Prendi tutto quello che puoi portare",
        testo_en: "You take everything you can carry",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "campo_b",
        nodo_id: "accampamento_goblin",
        testo_it: "Prendi solo quello di cui hai bisogno",
        testo_en: "You take only what you need",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "campo_c",
        nodo_id: "accampamento_goblin",
        testo_it: "Esamini i goblin dormienti — forse qualcuno ha informazioni",
        testo_en: "You examine the sleeping goblins — maybe someone has information",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 3,
      },
      {
        id: "campo_d",
        nodo_id: "accampamento_goblin",
        testo_it: "Lasci una nota di ringraziamento e te ne vai",
        testo_en: "You leave a thank-you note and leave",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "indizio_amuleto",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Trovi una lettera scritta da un avventuriero di nome Theryn: 'L'Amuleto è custodito da tre guardiani. Il primo è uno spirito al ponte. Il secondo è un enigma nelle rovine. Il terzo è il Guardiano finale — non usare la forza, usa la testa.' Theryn evidentemente non ce l'ha fatta. La lettera finisce con 'P.S. Attento al gradino rotto nella sala del trono.'",
    testo_en:
      "You find a letter written by an adventurer named Theryn: 'The Amulet is guarded by three guardians. The first is a spirit at the bridge. The second is a riddle in the ruins. The third is the final Guardian — don't use force, use your head.' Theryn evidently did not make it. The letter ends with 'P.S. Watch out for the broken step in the throne room.'",
    scelte: [
      {
        id: "indizio_a",
        nodo_id: "indizio_amuleto",
        testo_it: "Memorizzi le informazioni e procedi verso il Ponte",
        testo_en: "You memorize the information and proceed to the Bridge",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "indizio_b",
        nodo_id: "indizio_amuleto",
        testo_it: "Provi a scoprire cosa è successo a Theryn",
        testo_en: "You try to find out what happened to Theryn",
        nodo_successivo_id: "spirito_alleato",
        ordine: 2,
      },
      {
        id: "indizio_c",
        nodo_id: "indizio_amuleto",
        testo_it: "Vai direttamente alle rovine saltando il Ponte degli Spiriti",
        testo_en: "You go directly to the ruins skipping the Bridge of Spirits",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 3,
      },
      {
        id: "indizio_d",
        nodo_id: "indizio_amuleto",
        testo_it: "Rispondi alla lettera — sai che è inutile, ma lo fai lo stesso",
        testo_en: "You reply to the letter — you know it's pointless, but you do it anyway",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "grotta_tesoro_foresta",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il sentiero di sinistra porta a una grotta nascosta dalla vegetazione. All'interno, una fontana di pietra circondata da vecchie ossa di avventuriero. L'acqua della fontana brilla di un leggero azzurro. Sul bordo della fontana è inciso: 'Chi beve guadagna forza. Chi si lava perde la memoria. Chi ci fa il bagno è un idiota.' Accanto alla fontana c'è una cassa.",
    testo_en:
      "The left path leads to a cave hidden by vegetation. Inside, a stone fountain surrounded by old adventurer bones. The fountain water glows with a faint blue. On the rim of the fountain is carved: 'Who drinks gains strength. Who washes loses memory. Who bathes is an idiot.' Next to the fountain is a chest.",
    scelte: [
      {
        id: "grotta_a",
        nodo_id: "grotta_tesoro_foresta",
        testo_it: "Bevi l'acqua della fontana per guadagnare forza",
        testo_en: "You drink from the fountain to gain strength",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "grotta_b",
        nodo_id: "grotta_tesoro_foresta",
        testo_it: "Apri la cassa ignorando la fontana",
        testo_en: "You open the chest ignoring the fountain",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "grotta_c",
        nodo_id: "grotta_tesoro_foresta",
        testo_it: "Prendi un campione d'acqua in una borraccia per dopo",
        testo_en: "You take a water sample in a flask for later",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 3,
      },
      {
        id: "grotta_d",
        nodo_id: "grotta_tesoro_foresta",
        testo_it: "Fai il bagno nella fontana — sei un avventuriero, non un idiota",
        testo_en: "You bathe in the fountain — you're an adventurer, not an idiot",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "colpo_goblin",
    tipo: "storia",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "Sek esegue il colpo con maestria professionale. Tre minuti dopo torna con una borsa rigonfia e un'espressione soddisfatta. 'Avevano un deposito segreto. Guarda cosa c'era dentro.' Apre la borsa. Dentro ci sono oggetti di qualità sorprendente — e una lettera che descrive dove si trova il Guardiano della Foresta.",
    testo_en:
      "Sek executes the heist with professional mastery. Three minutes later he returns with a bulging bag and a satisfied expression. 'They had a secret stash. Look what was inside.' He opens the bag. Inside are objects of surprising quality — and a letter describing where the Forest Guardian is.",
    scelte: [
      {
        id: "colpo_a",
        nodo_id: "colpo_goblin",
        testo_it: "Prendete il loot e vi dirigete al Ponte degli Spiriti",
        testo_en: "You take the loot and head to the Bridge of Spirits",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "colpo_b",
        nodo_id: "colpo_goblin",
        testo_it: "Leggete la lettera e cambiate piano di conseguenza",
        testo_en: "You read the letter and change your plan accordingly",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 2,
      },
      {
        id: "colpo_c",
        nodo_id: "colpo_goblin",
        testo_it: "Rimandati i goblin il loro loot — era sbagliato rubarlo",
        testo_en: "You send the goblins their loot back — it was wrong to steal it",
        nodo_successivo_id: "accordo_goblin",
        ordine: 3,
      },
      {
        id: "colpo_d",
        nodo_id: "colpo_goblin",
        testo_it: "Dai a Sek la metà del loot come compenso",
        testo_en: "You give Sek half the loot as payment",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  {
    id: "spirito_alleato",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Lo spirito di Theryn appare — o almeno la sua forma vaga e traslucida. È sorpreso che tu abbia pensato a lui. 'Nessuno ha mai cercato di scoprire cosa mi era successo,' dice con tristezza spettrale. 'Sono caduto nel gradino rotto della sala del trono.' Vi stringete la mano eterea. Lo spirito ti dona qualcosa di prezioso prima di dissolversi.",
    testo_en:
      "The spirit of Theryn appears — or at least his vague translucent form. He is surprised you thought of him. 'Nobody has ever tried to find out what happened to me,' he says with spectral sadness. 'I fell on the broken step in the throne room.' You shake his ethereal hand. The spirit gives you something precious before dissolving.",
    scelte: [
      {
        id: "spirito_a",
        nodo_id: "spirito_alleato",
        testo_it: "Accetti il dono con umiltà e procedi",
        testo_en: "You accept the gift with humility and proceed",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "spirito_b",
        nodo_id: "spirito_alleato",
        testo_it: "Chiedi allo spirito di accompagnarti come guida fantasmatica",
        testo_en: "You ask the spirit to accompany you as a ghostly guide",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "spirito_c",
        nodo_id: "spirito_alleato",
        testo_it: "Prometti di vendicarlo sconfiggendo il Guardiano",
        testo_en: "You promise to avenge him by defeating the Guardian",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 3,
      },
      {
        id: "spirito_d",
        nodo_id: "spirito_alleato",
        testo_it: "Cerchi di convincerlo a fare il biglietto della lotteria per lui",
        testo_en: "You try to convince him to buy a lottery ticket for him",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 4,
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ATTO III – IL PONTE DEGLI SPIRITI
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "ponte_spiriti",
    tipo: "storia",
    probabilità_loot: "niente",
    testo_it:
      "Il Ponte degli Spiriti è un arco di pietra antica che attraversa un baratro senza fondo. A metà ponte siede uno spirito — un anziano guerriero in armatura arrugginita. 'Sono il Guardiano del Ponte,' dice con voce che sembra arrivare da sottoterra. 'Chi vuole passare deve rispondere a tre domande o combattere.' Pausa drammatica. 'Oppure... giocare a scacchi. Ma gli scacchi mi annoiano.'",
    testo_en:
      "The Bridge of Spirits is an arch of ancient stone crossing a bottomless chasm. Halfway across sits a spirit — an elderly warrior in rusted armor. 'I am the Guardian of the Bridge,' he says in a voice that seems to come from underground. 'Whoever wishes to pass must answer three questions or fight.' Dramatic pause. 'Or... play chess. But chess bores me.'",
    scelte: [
      {
        id: "ponte_a",
        nodo_id: "ponte_spiriti",
        testo_it: "Accetti la sfida delle tre domande",
        testo_en: "You accept the challenge of three questions",
        nodo_successivo_id: "enigma_ponte",
        ordine: 1,
      },
      {
        id: "ponte_b",
        nodo_id: "ponte_spiriti",
        testo_it: "Scegli lo scontro — hai combattuto goblin, uno spirito non è diverso",
        testo_en: "You choose combat — you've fought goblins, a spirit is no different",
        nodo_successivo_id: "combattimento_spirito",
        ordine: 2,
      },
      {
        id: "ponte_c",
        nodo_id: "ponte_spiriti",
        testo_it: "Proponi gli scacchi — potresti vincere",
        testo_en: "You propose chess — you might win",
        nodo_successivo_id: "scacchi_spirito",
        ordine: 3,
      },
      {
        id: "ponte_d",
        nodo_id: "ponte_spiriti",
        testo_it: "Provi a passare di lato mentre lo spirito non guarda",
        testo_en: "You try to sneak past while the spirit is not looking",
        nodo_successivo_id: "fuga_ponte",
        ordine: 4,
      },
    ],
  },

  {
    id: "enigma_ponte",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Lo spirito sorride (un sorriso inquietante di chi non ha labbra vere). 'Prima domanda: cosa ha più valore — l'oro che non si può spendere o la povertà vissuta con onore?' Rifletti. È chiaramente una domanda filosofica senza risposta giusta. Lo spirito aspetta con la pazienza di chi ha l'eternità dalla sua parte.",
    testo_en:
      "The spirit smiles (an unsettling smile from one with no real lips). 'First question: what has more value — gold that cannot be spent or poverty lived with honor?' You reflect. This is clearly a philosophical question with no right answer. The spirit waits with the patience of one who has eternity on their side.",
    scelte: [
      {
        id: "enigma_a",
        nodo_id: "enigma_ponte",
        testo_it: "Rispondi che l'onore vale più di qualsiasi oro",
        testo_en: "You answer that honor is worth more than any gold",
        nodo_successivo_id: "enigma_secondo",
        ordine: 1,
      },
      {
        id: "enigma_b",
        nodo_id: "enigma_ponte",
        testo_it: "Rispondi che l'oro è sempre utile, anche quello non spendibile",
        testo_en: "You answer that gold is always useful, even the unspendable kind",
        nodo_successivo_id: "enigma_secondo",
        ordine: 2,
      },
      {
        id: "enigma_c",
        nodo_id: "enigma_ponte",
        testo_it: "Rispondi che la domanda non ha senso e lo dici allo spirito",
        testo_en: "You answer that the question makes no sense and tell the spirit",
        nodo_successivo_id: "enigma_secondo",
        ordine: 3,
      },
      {
        id: "enigma_d",
        nodo_id: "enigma_ponte",
        testo_it: "Fai una contro-domanda allo spirito per guadagnare tempo",
        testo_en: "You ask the spirit a counter-question to buy time",
        nodo_successivo_id: "enigma_secondo",
        ordine: 4,
      },
    ],
  },

  {
    id: "enigma_secondo",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Lo spirito annuisce pensieroso indipendentemente da cosa hai risposto. 'Interessante. Seconda domanda: se un avventuriero cade in una foresta e non c'è nessuno a sentirlo, fa ancora un suono ridicolo?' Questa è ufficialmente la domanda più strana che ti abbiano mai fatto.",
    testo_en:
      "The spirit nods thoughtfully regardless of what you answered. 'Interesting. Second question: if an adventurer falls in a forest and there is no one to hear him, does he still make a ridiculous sound?' This is officially the strangest question you have ever been asked.",
    scelte: [
      {
        id: "enigma2_a",
        nodo_id: "enigma_secondo",
        testo_it: "Sì — la dignità ha un suono universale",
        testo_en: "Yes — dignity has a universal sound",
        nodo_successivo_id: "enigma_terzo",
        ordine: 1,
      },
      {
        id: "enigma2_b",
        nodo_id: "enigma_secondo",
        testo_it: "No — senza pubblico non vale la pena fare scenate",
        testo_en: "No — without an audience there is no point in making a scene",
        nodo_successivo_id: "enigma_terzo",
        ordine: 2,
      },
      {
        id: "enigma2_c",
        nodo_id: "enigma_secondo",
        testo_it: "Fai la dimostrazione cadendo da solo sul posto",
        testo_en: "You demonstrate by falling down on the spot",
        nodo_successivo_id: "enigma_terzo",
        ordine: 3,
      },
      {
        id: "enigma2_d",
        nodo_id: "enigma_secondo",
        testo_it: "Chiedi allo spirito se è caduto molto quando era vivo",
        testo_en: "You ask the spirit if he fell a lot when he was alive",
        nodo_successivo_id: "enigma_terzo",
        ordine: 4,
      },
    ],
  },

  {
    id: "enigma_terzo",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Lo spirito ride — un suono come foglie secche nel vento. 'Terza e ultima domanda. Sei pronto?' Si fa serio. 'Quanti avventurieri mediocri ci vogliono per cambiare una candela?' Gli occhi fantasmatici brillano. Questa deve essere la domanda con il trucco.",
    testo_en:
      "The spirit laughs — a sound like dry leaves in the wind. 'Third and final question. Are you ready?' He becomes serious. 'How many mediocre adventurers does it take to change a candle?' The ghostly eyes gleam. This must be the trick question.",
    scelte: [
      {
        id: "enigma3_a",
        nodo_id: "enigma_terzo",
        testo_it: "Uno solo — se smette di cadere sui propri piedi",
        testo_en: "Just one — if he stops tripping over his own feet",
        nodo_successivo_id: "ponte_superato",
        ordine: 1,
      },
      {
        id: "enigma3_b",
        nodo_id: "enigma_terzo",
        testo_it: "Nessuno — la candela è più utile di loro",
        testo_en: "None — the candle is more useful than they are",
        nodo_successivo_id: "ponte_superato",
        ordine: 2,
      },
      {
        id: "enigma3_c",
        nodo_id: "enigma_terzo",
        testo_it: "La domanda non ha senso — le candele non hanno bisogno di cambiare",
        testo_en: "The question makes no sense — candles don't need to change",
        nodo_successivo_id: "ponte_superato",
        ordine: 3,
      },
      {
        id: "enigma3_d",
        nodo_id: "enigma_terzo",
        testo_it: "Non lo so, ma io sono pronto a provarci",
        testo_en: "I don't know, but I'm ready to try",
        nodo_successivo_id: "ponte_superato",
        ordine: 4,
      },
    ],
  },

  {
    id: "combattimento_spirito",
    tipo: "combattimento",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "Lo spirito si alza — è più grande di quanto sembrasse seduto. Molto più grande. La sua armatura arrugginita si illumina di luce spettrale. 'Avventuriero audace. Mi piace.' La battaglia è brutale ma breve — lo spirito si rivela un avversario leale che smette di combattere quando sei chiaramente sconfitto o vittorioso.",
    testo_en:
      "The spirit rises — it is much bigger than it appeared sitting down. Much bigger. Its rusted armor glows with spectral light. 'Audacious adventurer. I like you.' The battle is brutal but brief — the spirit turns out to be a fair opponent who stops fighting when you are clearly defeated or victorious.",
    scelte: [
      {
        id: "spirito2_a",
        nodo_id: "combattimento_spirito",
        testo_it: "Lo hai sconfitto — attraversi il ponte con rispetto",
        testo_en: "You defeated him — you cross the bridge with respect",
        nodo_successivo_id: "ponte_superato",
        ordine: 1,
      },
      {
        id: "spirito2_b",
        nodo_id: "combattimento_spirito",
        testo_it: "È pari — proponi un armistizio onorevole",
        testo_en: "It is a draw — you propose an honorable armistice",
        nodo_successivo_id: "ponte_superato",
        ordine: 2,
      },
      {
        id: "spirito2_c",
        nodo_id: "combattimento_spirito",
        testo_it: "Sei sconfitto ma lo spirito ti rispetta abbastanza da lasciarti passare",
        testo_en: "You are defeated but the spirit respects you enough to let you pass",
        nodo_successivo_id: "ponte_superato",
        ordine: 3,
      },
      {
        id: "spirito2_d",
        nodo_id: "combattimento_spirito",
        testo_it: "Usi un trucco basso che lo spirito non si aspettava",
        testo_en: "You use a cheap trick the spirit did not expect",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 4,
      },
    ],
  },

  {
    id: "scacchi_spirito",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Lo spirito appare entusiasta — evidentemente il suo è un bluff. Giocate per due ore. Lo spirito è un giocatore terribile. Muove i pezzi a caso. Sacrifica la regina per proteggere un pedone. Alla fine perdi comunque perché ti addormenti sul tavolo. Lo spirito ti sveglia delicatamente. 'Hai dormito il tempo giusto per riposare. Puoi passare. Sei più divertente degli altri.'",
    testo_en:
      "The spirit appears enthusiastic — evidently his was a bluff. You play for two hours. The spirit is a terrible player. He moves pieces randomly. He sacrifices the queen to protect a pawn. In the end you lose anyway because you fall asleep at the table. The spirit wakes you gently. 'You slept just the right amount to rest. You may pass. You are more entertaining than the others.'",
    scelte: [
      {
        id: "scacchi_a",
        nodo_id: "scacchi_spirito",
        testo_it: "Ringrazi lo spirito e attraversi il ponte riposato",
        testo_en: "You thank the spirit and cross the bridge well rested",
        nodo_successivo_id: "ponte_superato",
        ordine: 1,
      },
      {
        id: "scacchi_b",
        nodo_id: "scacchi_spirito",
        testo_it: "Chiedi una rivincita agli scacchi prima di partire",
        testo_en: "You ask for a rematch at chess before leaving",
        nodo_successivo_id: "ponte_superato",
        ordine: 2,
      },
      {
        id: "scacchi_c",
        nodo_id: "scacchi_spirito",
        testo_it: "Gli insegni una mossa di scacchi che non conosce",
        testo_en: "You teach him a chess move he does not know",
        nodo_successivo_id: "ponte_superato",
        ordine: 3,
      },
      {
        id: "scacchi_d",
        nodo_id: "scacchi_spirito",
        testo_it: "Proponi di tornare a giocare dopo la missione",
        testo_en: "You propose to return to play after the mission",
        nodo_successivo_id: "ponte_superato",
        ordine: 4,
      },
    ],
  },

  {
    id: "fuga_ponte",
    tipo: "storia",
    probabilità_loot: "niente",
    testo_it:
      "Lo spirito ha trecento anni di esperienza con avventurieri che provano a passare di lato. Ti vede immediatamente. 'Questo è il quarto tentativo della settimana.' Ti blocca con un muro di forza invisibile. 'Devi comunque rispondere a una domanda.' Almeno è ridotta a una sola.",
    testo_en:
      "The spirit has three hundred years of experience with adventurers trying to sneak past. He sees you immediately. 'This is the fourth attempt this week.' He stops you with an invisible force wall. 'You still have to answer one question.' At least it is reduced to just one.",
    scelte: [
      {
        id: "fuga_a",
        nodo_id: "fuga_ponte",
        testo_it: "Accetti la singola domanda con sollievo",
        testo_en: "You accept the single question with relief",
        nodo_successivo_id: "enigma_terzo",
        ordine: 1,
      },
      {
        id: "fuga_b",
        nodo_id: "fuga_ponte",
        testo_it: "Proponi di combattere invece della domanda",
        testo_en: "You propose to fight instead of the question",
        nodo_successivo_id: "combattimento_spirito",
        ordine: 2,
      },
      {
        id: "fuga_c",
        nodo_id: "fuga_ponte",
        testo_it: "Ti scusi profusamente per il tentativo di fuga",
        testo_en: "You apologize profusely for the escape attempt",
        nodo_successivo_id: "enigma_terzo",
        ordine: 3,
      },
      {
        id: "fuga_d",
        nodo_id: "fuga_ponte",
        testo_it: "Provi a corrompere lo spirito con monete d'oro",
        testo_en: "You try to bribe the spirit with gold coins",
        nodo_successivo_id: "scacchi_spirito",
        ordine: 4,
      },
    ],
  },

  {
    id: "ponte_superato",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Hai superato il Ponte degli Spiriti. Dall'altra parte la vegetazione cambia — gli alberi diventano più scuri, le foglie hanno bordi argentati, e l'aria sa di pietra antica e qualcosa di bruciato. Le Rovine dell'Abisso sono visibili in lontananza: una struttura massiccia di pietra nera su una collina. Stai per avvicinarti quando senti un rumore nei cespugli.",
    testo_en:
      "You have crossed the Bridge of Spirits. On the other side the vegetation changes — trees grow darker, leaves have silver edges, and the air smells of ancient stone and something burnt. The Ruins of the Abyss are visible in the distance: a massive structure of black stone on a hill. You are about to approach when you hear a noise in the bushes.",
    scelte: [
      {
        id: "superato_a",
        nodo_id: "ponte_superato",
        testo_it: "Indaghi cautamente il rumore nei cespugli",
        testo_en: "You cautiously investigate the noise in the bushes",
        nodo_successivo_id: "rifugio_vicino_ponte",
        ordine: 1,
      },
      {
        id: "superato_b",
        nodo_id: "ponte_superato",
        testo_it: "Ignori il rumore e avanzi verso le rovine",
        testo_en: "You ignore the noise and advance toward the ruins",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 2,
      },
      {
        id: "superato_c",
        nodo_id: "ponte_superato",
        testo_it: "Urli 'CHI È LÀ' con tutta la voce che hai",
        testo_en: "You shout 'WHO IS THERE' with all your voice",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 3,
      },
      {
        id: "superato_d",
        nodo_id: "ponte_superato",
        testo_it: "Ti nascondi tu stesso e aspetti di vedere cosa esce",
        testo_en: "You hide yourself and wait to see what comes out",
        nodo_successivo_id: "alleato_inaspettato",
        ordine: 4,
      },
    ],
  },

  {
    id: "alleato_inaspettato",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Dai cespugli emerge un halfling con un cappello a punta e un'espressione di chi si è perso da tre giorni. Si chiama Pip. 'Stavo seguendo un avventuriero di nome Aldric. Dovrebbe essere da queste parti.' 'Sono io.' Pip ti fissa. 'Davvero? Pensavo fossi più... impressionante.' Pip è un bardo fallito ma conosce una canzone che apre le porte delle rovine.",
    testo_en:
      "From the bushes emerges a halfling with a pointed hat and the expression of someone who has been lost for three days. His name is Pip. 'I was following an adventurer named Aldric. He should be around here.' 'That's me.' Pip stares at you. 'Really? I thought you would be more... impressive.' Pip is a failed bard but knows a song that opens the doors of the ruins.",
    scelte: [
      {
        id: "pip_a",
        nodo_id: "alleato_inaspettato",
        testo_it: "Porti Pip con te — in fondo ogni aiuto è benvenuto",
        testo_en: "You bring Pip along — after all, any help is welcome",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 1,
      },
      {
        id: "pip_b",
        nodo_id: "alleato_inaspettato",
        testo_it: "Chiedi a Pip di insegnarti la canzone e poi lo mandi via",
        testo_en: "You ask Pip to teach you the song and then send him away",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 2,
      },
      {
        id: "pip_c",
        nodo_id: "alleato_inaspettato",
        testo_it: "Rifiuti il suo aiuto — le leggende si scrivono da soli",
        testo_en: "You refuse his help — legends are made alone",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 3,
      },
      {
        id: "pip_d",
        nodo_id: "alleato_inaspettato",
        testo_it: "Chiedi a Pip di mandare un messaggio a Voren con i tuoi progressi",
        testo_en: "You ask Pip to send a message to Voren with your progress",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 4,
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ATTO IV – LE ROVINE DELL'ABISSO
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "rovine_ingresso",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Le Rovine dell'Abisso sono di pietra nera e imponenti. L'ingresso è un portone massiccio sormontato da un'iscrizione in una lingua antica. Pip (se è con te) la traduce: 'Entra chi non teme il buio dentro di sé.' Se sei solo, la riconosci come goblinese antico — e significa semplicemente 'Bussare prima di entrare.' Qualcuno ha ignorato il consiglio: la porta è socchiusa.",
    testo_en:
      "The Ruins of the Abyss are black stone and imposing. The entrance is a massive gate topped by an inscription in an ancient language. Pip (if he is with you) translates it: 'Enter who does not fear the darkness within.' If you are alone, you recognize it as ancient goblin — and it simply means 'Knock before entering.' Someone ignored the advice: the door is ajar.",
    scelte: [
      {
        id: "rovine_a",
        nodo_id: "rovine_ingresso",
        testo_it: "Entri con passo deciso come un eroe delle leggende",
        testo_en: "You enter with a decisive step like a hero of legend",
        nodo_successivo_id: "corridoio_rovine",
        ordine: 1,
      },
      {
        id: "rovine_b",
        nodo_id: "rovine_ingresso",
        testo_it: "Bussi prima di entrare — hai rispetto per le usanze",
        testo_en: "You knock before entering — you respect customs",
        nodo_successivo_id: "guardiano_porta",
        ordine: 2,
      },
      {
        id: "rovine_c",
        nodo_id: "rovine_ingresso",
        testo_it: "Sbirci dentro dalla porta socchiusa prima di entrare",
        testo_en: "You peek inside through the ajar door before entering",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "rovine_d",
        nodo_id: "rovine_ingresso",
        testo_it: "Giri intorno alle rovine cercando un ingresso secondario",
        testo_en: "You circle the ruins looking for a secondary entrance",
        nodo_successivo_id: "passaggio_segreto",
        ordine: 4,
      },
    ],
  },

  {
    id: "guardiano_porta",
    tipo: "storia",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "La porta si apre dall'interno. Un golem di pietra di tre metri ti fissa dall'alto verso il basso. Ha un cartello appeso al collo: 'OSPITI: per favore, togliete le scarpe.' Obbedisce fedelmente al suo protocollo millenario. Sei il primo avventuriero in trecento anni ad aver bussato. Il golem sembra... commosso. Ti fa passare ed estrae qualcosa da una nicchia nel muro.",
    testo_en:
      "The door opens from within. A three-meter stone golem stares down at you. It has a sign hanging around its neck: 'GUESTS: please remove your shoes.' It faithfully obeys its millennial protocol. You are the first adventurer in three hundred years to have knocked. The golem seems... moved. It lets you through and retrieves something from a niche in the wall.",
    scelte: [
      {
        id: "golem_a",
        nodo_id: "guardiano_porta",
        testo_it: "Togli le scarpe e segui le regole della casa",
        testo_en: "You remove your shoes and follow the house rules",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "golem_b",
        nodo_id: "guardiano_porta",
        testo_it: "Chiedi al golem informazioni sull'Amuleto",
        testo_en: "You ask the golem for information about the Amulet",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "golem_c",
        nodo_id: "guardiano_porta",
        testo_it: "Cerchi di bypassare il golem con la forza",
        testo_en: "You try to bypass the golem by force",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "golem_d",
        nodo_id: "guardiano_porta",
        testo_it: "Chiedi al golem se vuole un po' di compagnia — sembra solo",
        testo_en: "You ask the golem if it wants some company — it seems lonely",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "passaggio_segreto",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il passaggio segreto è reale — una botola di pietra dietro a un cespuglio di ortiche. Ci cadi dentro per sbaglio. Rotoli lungo una rampa buia e atterri in una sala sotterranea illuminata da cristalli verdi. Sei già dentro le rovine, hai saltato l'ingresso principale e non hai incontrato nessuna guardia. L'avventura a volte va così.",
    testo_en:
      "The secret passage is real — a stone trapdoor behind a nettle bush. You fall into it by accident. You roll down a dark ramp and land in an underground chamber lit by green crystals. You are already inside the ruins, you've skipped the main entrance and haven't met any guard. Adventure sometimes works like this.",
    scelte: [
      {
        id: "segreto_a",
        nodo_id: "passaggio_segreto",
        testo_it: "Esplori la sala sotterranea prima di procedere",
        testo_en: "You explore the underground hall before proceeding",
        nodo_successivo_id: "sala_cristalli",
        ordine: 1,
      },
      {
        id: "segreto_b",
        nodo_id: "passaggio_segreto",
        testo_it: "Cerchi subito l'uscita verso la sala principale",
        testo_en: "You immediately look for the exit to the main hall",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "segreto_c",
        nodo_id: "passaggio_segreto",
        testo_it: "Prendi un cristallo verde — brilla in modo affascinante",
        testo_en: "You take a green crystal — it glows in a fascinating way",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "segreto_d",
        nodo_id: "passaggio_segreto",
        testo_it: "Aspetti che i tuoi occhi si abituino al buio prima di muoverti",
        testo_en: "You wait for your eyes to adjust to the dark before moving",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "sala_cristalli",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La sala dei cristalli è magnifica — centinaia di cristalli verdi, blu e bianchi ricoprono le pareti emettendo una luce morbida. Al centro c'è un piedistallo con diversi oggetti disposti ordinatamente, come se qualcuno li avesse sistemati per una mostra. Un cartiglio recita: 'Attenzione. Questi oggetti sono il loot del terzo piano. Non toccare senza autorizzazione.' Nessuno sembra più autorizzato.",
    testo_en:
      "The crystal hall is magnificent — hundreds of green, blue, and white crystals cover the walls emitting soft light. In the center is a pedestal with various objects arranged neatly, as if someone had set them up for an exhibition. A scroll reads: 'Warning. These objects are third-floor loot. Do not touch without authorization.' Nobody seems authorized anymore.",
    scelte: [
      {
        id: "cristalli_a",
        nodo_id: "sala_cristalli",
        testo_it: "Prendi tutto quello che vuoi — sei abbastanza autorizzato tu",
        testo_en: "You take whatever you want — you are authorized enough",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "cristalli_b",
        nodo_id: "sala_cristalli",
        testo_it: "Prendi solo quello di cui hai bisogno seguendo le regole",
        testo_en: "You take only what you need following the rules",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "cristalli_c",
        nodo_id: "sala_cristalli",
        testo_it: "Leggi il cartiglio cercando chi era il responsabile",
        testo_en: "You read the scroll looking for who was in charge",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "cristalli_d",
        nodo_id: "sala_cristalli",
        testo_it: "Lasci tutto intatto — rispetti anche i sistemi burocratici oscuri",
        testo_en: "You leave everything intact — you respect even dark bureaucratic systems",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "sala_principale",
    tipo: "storia",
    probabilità_loot: "niente",
    testo_it:
      "La sala principale delle rovine è enorme. Colonne di pietra nera alte venti metri. Torce magiche che bruciano di fiamma viola. E al centro, seduto su un trono di ossidiana, il Guardiano delle Rovine: un essere antico dall'aspetto vagamente umano, avvolto in un mantello di stelle vive. Vi fissa con occhi che sembrano contenere galassie. 'Un altro avventuriero,' dice con la stanchezza di chi ha visto troppe ere. 'Fammi indovinare. L'Amuleto.'",
    testo_en:
      "The main hall of the ruins is enormous. Black stone columns twenty meters high. Magic torches burning with violet flame. And at the center, seated on an obsidian throne, the Guardian of the Ruins: an ancient being of vaguely human appearance, wrapped in a cloak of living stars. He stares at you with eyes that seem to contain galaxies. 'Another adventurer,' he says with the weariness of one who has seen too many ages. 'Let me guess. The Amulet.'",
    scelte: [
      {
        id: "sala_a",
        nodo_id: "sala_principale",
        testo_it: "Confermi con dignità — sì, l'Amuleto dell'Abisso",
        testo_en: "You confirm with dignity — yes, the Amulet of the Abyss",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 1,
      },
      {
        id: "sala_b",
        nodo_id: "sala_principale",
        testo_it: "Dici che sei venuto solo a fare turismo",
        testo_en: "You say you only came for sightseeing",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 2,
      },
      {
        id: "sala_c",
        nodo_id: "sala_principale",
        testo_it: "Attacchi subito — sorpresa totale è la tua arma migliore",
        testo_en: "You attack immediately — total surprise is your best weapon",
        nodo_successivo_id: "scontro_guardiano",
        ordine: 3,
      },
      {
        id: "sala_d",
        nodo_id: "sala_principale",
        testo_it: "Chiedi cortesemente se può indicarti il gradino rotto",
        testo_en: "You politely ask if he can point out the broken step",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 4,
      },
    ],
  },

  {
    id: "confronto_guardiano",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il Guardiano ti fissa con interesse crescente — specialmente se hai chiesto del gradino. 'L'Amuleto dell'Abisso non è un oggetto di potere ordinario,' dice. 'È il sigillo che tiene chiusa la Crepa tra i mondi. Chiunque lo prenda libera ciò che è imprigionato.' Pausa. 'Voren ti ha detto questo?' Dal tono, la risposta è no. Ovviamente.",
    testo_en:
      "The Guardian stares at you with growing interest — especially if you asked about the step. 'The Amulet of the Abyss is not an ordinary power object,' he says. 'It is the seal that keeps the Rift between worlds closed. Whoever takes it releases what is imprisoned.' Pause. 'Did Voren tell you this?' From the tone, the answer is no. Obviously.",
    scelte: [
      {
        id: "confronto_a",
        nodo_id: "confronto_guardiano",
        testo_it: "Decidi di non prendere l'Amuleto — la situazione è chiara",
        testo_en: "You decide not to take the Amulet — the situation is clear",
        nodo_successivo_id: "finale_vittoria_comica",
        ordine: 1,
      },
      {
        id: "confronto_b",
        nodo_id: "confronto_guardiano",
        testo_it: "Chiedi al Guardiano cosa c'è dentro la Crepa",
        testo_en: "You ask the Guardian what is inside the Rift",
        nodo_successivo_id: "segreto_abisso",
        ordine: 2,
      },
      {
        id: "confronto_c",
        nodo_id: "confronto_guardiano",
        testo_it: "Sei determinato a prendere l'Amuleto — Voren pagherà",
        testo_en: "You are determined to take the Amulet — Voren will pay",
        nodo_successivo_id: "scontro_guardiano",
        ordine: 3,
      },
      {
        id: "confronto_d",
        nodo_id: "confronto_guardiano",
        testo_it: "Proponi un piano alternativo — diventare tu il nuovo guardiano",
        testo_en: "You propose an alternative plan — become the new guardian yourself",
        nodo_successivo_id: "finale_vittoria_epica",
        ordine: 4,
      },
    ],
  },

  {
    id: "segreto_abisso",
    tipo: "storia",
    probabilità_loot: "niente",
    testo_it:
      "Il Guardiano apre la Crepa per un istante — quanto basta per vedere cosa c'è dentro. Non è il male cosmico o un demone antico. È Voren il Giovane, il nipote di Voren il Saggio, imprigionato per aver rubato la Ricetta Segreta del Torta di Mela Cosmica, piatto preferito dell'Entità Primordiale. Voren il Saggio vuole liberarlo. Capisci tutto in un secondo.",
    testo_en:
      "The Guardian opens the Rift for an instant — just enough to see what is inside. It is not cosmic evil or an ancient demon. It is Voren the Young, the grandson of Voren the Wise, imprisoned for stealing the Secret Recipe of the Cosmic Apple Pie, the favorite dish of the Primordial Entity. Voren the Wise wants to free him. You understand everything in a second.",
    scelte: [
      {
        id: "segreto_a",
        nodo_id: "segreto_abisso",
        testo_it: "Rifiuti categoricamente di liberare il nipote — per una torta di mele",
        testo_en: "You categorically refuse to free the nephew — over an apple pie",
        nodo_successivo_id: "finale_vittoria_comica",
        ordine: 1,
      },
      {
        id: "segreto_b",
        nodo_id: "segreto_abisso",
        testo_it: "Cerchi un modo per liberare il nipote senza aprire la Crepa",
        testo_en: "You look for a way to free the nephew without opening the Rift",
        nodo_successivo_id: "finale_vittoria_epica",
        ordine: 2,
      },
      {
        id: "segreto_c",
        nodo_id: "segreto_abisso",
        testo_it: "Entri nella Crepa tu stesso per recuperare la ricetta",
        testo_en: "You enter the Rift yourself to retrieve the recipe",
        nodo_successivo_id: "finale_sconfitta_onorevole",
        ordine: 3,
      },
      {
        id: "segreto_d",
        nodo_id: "segreto_abisso",
        testo_it: "Proponi di negoziare la ricetta con l'Entità Primordiale",
        testo_en: "You propose to negotiate the recipe with the Primordial Entity",
        nodo_successivo_id: "finale_vittoria_epica",
        ordine: 4,
      },
    ],
  },

  {
    id: "scontro_guardiano",
    tipo: "combattimento",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "Il Guardiano si alza lentamente dal trono con l'aria di qualcuno che fa questo da millenni e non ne ha ancora abbastanza. La battaglia è epica — il tipo di scontro che i bardi cantano per secoli, senza capire la metà di quello che è successo. Alla fine, contro ogni aspettativa statistica, sei tu in piedi.",
    testo_en:
      "The Guardian rises slowly from the throne with the air of someone who has been doing this for millennia and is not yet tired of it. The battle is epic — the kind of clash that bards sing about for centuries without understanding half of what happened. In the end, against all statistical expectations, you are the one standing.",
    scelte: [
      {
        id: "scontro_a",
        nodo_id: "scontro_guardiano",
        testo_it: "Prendi l'Amuleto — hai vinto, te lo sei guadagnato",
        testo_en: "You take the Amulet — you won, you earned it",
        nodo_successivo_id: "finale_sconfitta_onorevole",
        ordine: 1,
      },
      {
        id: "scontro_b",
        nodo_id: "scontro_guardiano",
        testo_it: "Chiedi al Guardiano sconfitto la verità sull'Amuleto",
        testo_en: "You ask the defeated Guardian the truth about the Amulet",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 2,
      },
      {
        id: "scontro_c",
        nodo_id: "scontro_guardiano",
        testo_it: "Aiuti il Guardiano a rialzarsi — il rispetto si deve ai guerrieri",
        testo_en: "You help the Guardian up — respect is owed to warriors",
        nodo_successivo_id: "finale_vittoria_epica",
        ordine: 3,
      },
      {
        id: "scontro_d",
        nodo_id: "scontro_guardiano",
        testo_it: "Offri al Guardiano una tregua e proponi un accordo",
        testo_en: "You offer the Guardian a truce and propose an agreement",
        nodo_successivo_id: "finale_vittoria_epica",
        ordine: 4,
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // FINALI
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "finale_vittoria_epica",
    tipo: "vittoria",
    probabilità_loot: "raro_leggendario",
    testo_it:
      "Il Guardiano ti fissa a lungo. Poi fa qualcosa di inaspettato: sorride. Un sorriso vero, non quello di chi sta per combattere. 'In mille anni,' dice, 'sei il primo che ha capito. L'Amuleto non va preso. Va protetto.' Ti offre il ruolo di Custode — non un incarico di lavoro fisso, più una responsabilità cosmica con benefit nebulosi. Torni da Voren. Il vecchio ti fissa. Poi crolla in lacrime. 'Avresti potuto liberare mio nipote!' 'Sì,' rispondi, 'ma non per una torta di mele.' Diventi leggendario. Non come te lo aspettavi — ma nel modo giusto. Le canzoni che i bardi cantano di te sono strane, confuse, spesso sbagliate. Ma vengono cantate. Aldric il Mediocre è morto. Lunga vita ad Aldric il Custode dell'Abisso.",
    testo_en:
      "The Guardian stares at you for a long time. Then he does something unexpected: he smiles. A real smile, not the kind of someone about to fight. 'In a thousand years,' he says, 'you are the first who understood. The Amulet is not meant to be taken. It is meant to be protected.' He offers you the role of Keeper — not a fixed-schedule job, more a cosmic responsibility with nebulous benefits. You return to Voren. The old man stares at you. Then collapses in tears. 'You could have freed my nephew!' 'Yes,' you reply, 'but not over an apple pie.' You become legendary. Not as you expected — but in the right way. The songs bards sing about you are strange, confused, often wrong. But they are sung. Aldric the Mediocre is dead. Long live Aldric, Keeper of the Abyss.",
    scelte: [],
  },

  {
    id: "finale_vittoria_comica",
    tipo: "vittoria",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Torni a piedi vuote da Voren senza l'Amuleto. Il vecchio saggio ti guarda. Tu gli racconti tutto — il nipote, la torta di mele, la Crepa tra i mondi, il gradino rotto. Voren resta in silenzio per un minuto intero. Poi scoppia a ridere. Ride finché non piange. Ride finché non si siede sul pavimento. 'Cinquant'anni,' dice tra i singhiozzi, 'cinquant'anni che aspetto un avventuriero abbastanza stupido da rifiutare l'Amuleto per una questione di principio.' Ti paga i duecento monete d'oro intere. Aggiunge un bonus di cinquanta per il gradino rotto. Nessuna canzone viene scritta su di te. Ma la storia viene raccontata nelle taverne per generazioni — quella dell'avventuriero che rifiutò un amuleto cosmico per via di una torta. Aldric il Mediocre. Leggenda comica. Non è male.",
    testo_en:
      "You return empty-handed to Voren without the Amulet. The old sage looks at you. You tell him everything — the nephew, the apple pie, the Rift between worlds, the broken step. Voren stays silent for a full minute. Then he bursts out laughing. He laughs until he cries. He laughs until he sits on the floor. 'Fifty years,' he says between sobs, 'fifty years I've been waiting for an adventurer stupid enough to refuse the Amulet on principle.' He pays you the full two hundred gold coins. He adds a fifty-coin bonus for the broken step. No song is ever written about you. But the story is told in taverns for generations — that of the adventurer who refused a cosmic amulet over a pie. Aldric the Mediocre. Comic legend. Not bad.",
    scelte: [],
  },

  {
    id: "finale_sconfitta_onorevole",
    tipo: "morte",
    probabilità_loot: "niente",
    testo_it:
      "Prendi l'Amuleto. La Crepa si apre. Da dentro esce il nipote di Voren — un ragazzo di diciassette anni con la faccia da torta di mele e un'aria di profonda vergogna. L'Entità Primordiale emerge anche lei, furiosa. È grande come una montagna, ha mille occhi e vuole la sua ricetta indietro. Il nipote consegna la ricetta. L'Entità la prende, guarda te, e sbuffa come un nonno deluso. 'Avventuriero inutile,' dice. 'Almeno non ha aperto la Crepa per cattiveria.' Ti restituisce intero — ammaccato, confuso, senza l'Amuleto che è tornato al suo posto. Sei vivo. Non sei leggendario. Ma il nipote di Voren ti stringe la mano. 'Grazie,' dice. 'Anche se probabilmente non capisce perché.' Non capisci. Ma hai l'integrità di chi non ha ceduto per l'oro. E qualcosa di strano nel taschino — una ricetta scritta a mano. Probabilmente non è la ricetta cosmica originale. Probabilmente.",
    testo_en:
      "You take the Amulet. The Rift opens. From inside comes Voren's nephew — a seventeen-year-old boy with the face of an apple pie and an air of deep shame. The Primordial Entity also emerges, furious. It is mountain-sized, has a thousand eyes, and wants its recipe back. The nephew hands over the recipe. The Entity takes it, looks at you, and sighs like a disappointed grandparent. 'Useless adventurer,' it says. 'At least he did not open the Rift out of malice.' It returns you whole — battered, confused, without the Amulet which has returned to its place. You are alive. You are not legendary. But Voren's nephew shakes your hand. 'Thank you,' he says. 'Even if you probably don't understand why.' You don't understand. But you have the integrity of one who did not yield for gold. And something strange in your pocket — a handwritten recipe. Probably not the original cosmic recipe. Probably.",
    scelte: [],
  },

  // ════════════════════════════════════════════════════════════════════════════
  // NODI AGGIUNTIVI – STRADE, BIVIO FORESTA, ROVINE ESPANSE
  // ════════════════════════════════════════════════════════════════════════════

  {
    id: "strada_per_bosco",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La strada sterrata che porta alla Foresta del Lamento è lunga, polverosa e cosparsa di cartelli sbiaditi: 'ATTENTO AI LUPI', 'ATTENTO AI BRIGANTI', 'ATTENTO AI CARTELLI'. Un altro avventuriero ti cammina a fianco — si chiama Dran, è bardato di ferro e puzza di vittoria. 'Anche tu vai all'Abisso?' Ti fissa con aria di sufficienza. 'Scommetto che non torni.'",
    testo_en:
      "The dirt road leading to the Forest of Lament is long, dusty and littered with faded signs: 'BEWARE OF WOLVES', 'BEWARE OF BANDITS', 'BEWARE OF SIGNS'. Another adventurer walks beside you — his name is Dran, clad in iron and smelling of victory. 'You also going to the Abyss?' He stares at you condescendingly. 'I bet you don't come back.'",
    scelte: [
      {
        id: "strada_a",
        nodo_id: "strada_per_bosco",
        testo_it: "Accetti la scommessa — cento monete che torni",
        testo_en: "You take the bet — a hundred coins you return",
        nodo_successivo_id: "mercante_ambulante",
        ordine: 1,
      },
      {
        id: "strada_b",
        nodo_id: "strada_per_bosco",
        testo_it: "Ignori Dran e continui verso la foresta",
        testo_en: "You ignore Dran and continue toward the forest",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 2,
      },
      {
        id: "strada_c",
        nodo_id: "strada_per_bosco",
        testo_it: "Proponi a Dran di fare squadra",
        testo_en: "You propose to Dran to team up",
        nodo_successivo_id: "accampamento_notturno",
        ordine: 3,
      },
      {
        id: "strada_d",
        nodo_id: "strada_per_bosco",
        testo_it: "Convinci Dran che la foresta è dalla parte opposta",
        testo_en: "You convince Dran the forest is in the opposite direction",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 4,
      },
    ],
  },

  {
    id: "mercante_ambulante",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Un carro cigolante si avvicina dalla direzione opposta. Il mercante, un umano basso e rotondo di nome Berto, ha un catalogo di merci impressionante dipinto sul fianco del carro. Vende tutto: armi, pozioni, formaggio stagionato, profezie di seconda mano. 'Solo per te, avventuriero, prezzo speciale. Ho anche una mappa dell'Abisso, usata ma leggibile.'",
    testo_en:
      "A creaking cart approaches from the opposite direction. The merchant, a short round human named Berto, has an impressive merchandise catalogue painted on the cart's side. He sells everything: weapons, potions, aged cheese, second-hand prophecies. 'Special price just for you, adventurer. I also have a map of the Abyss, used but readable.'",
    scelte: [
      {
        id: "berto_a",
        nodo_id: "mercante_ambulante",
        testo_it: "Compri la mappa dell'Abisso",
        testo_en: "You buy the Abyss map",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 1,
      },
      {
        id: "berto_b",
        nodo_id: "mercante_ambulante",
        testo_it: "Compri una pozione e qualche provvista",
        testo_en: "You buy a potion and some supplies",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 2,
      },
      {
        id: "berto_c",
        nodo_id: "mercante_ambulante",
        testo_it: "Compri una profezia di seconda mano — non si sa mai",
        testo_en: "You buy a second-hand prophecy — you never know",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "berto_d",
        nodo_id: "mercante_ambulante",
        testo_it: "Provi a scambiare la tua spada arrugginita con qualcosa",
        testo_en: "You try to trade your rusty sword for something",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 4,
      },
    ],
  },

  {
    id: "accampamento_notturno",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Decidete di accamparvi per la notte — la foresta è pericolosa al buio, o almeno più del solito. Dran accende un fuoco con un'efficienza irritante. Mentre siedi guardando le stelle, senti qualcosa muoversi nell'oscurità. Potrebbe essere un animale. Potrebbe essere un goblin esploratore. Potrebbe essere il tuo stomaco.",
    testo_en:
      "You decide to camp for the night — the forest is dangerous in the dark, or at least more than usual. Dran lights a fire with irritating efficiency. As you sit watching the stars, you hear something move in the darkness. Could be an animal. Could be a scout goblin. Could be your stomach.",
    scelte: [
      {
        id: "notte_a",
        nodo_id: "accampamento_notturno",
        testo_it: "Vai a controllare cosa fa quel rumore",
        testo_en: "You go to check what is making that noise",
        nodo_successivo_id: "imboscata_goblin",
        ordine: 1,
      },
      {
        id: "notte_b",
        nodo_id: "accampamento_notturno",
        testo_it: "Svegli Dran e lo mandi a controllare lui",
        testo_en: "You wake Dran and send him to check",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 2,
      },
      {
        id: "notte_c",
        nodo_id: "accampamento_notturno",
        testo_it: "Ti addormenti ignorando il rumore",
        testo_en: "You fall asleep ignoring the noise",
        nodo_successivo_id: "foresta_ingresso",
        ordine: 3,
      },
      {
        id: "notte_d",
        nodo_id: "accampamento_notturno",
        testo_it: "Urli 'CHI È LÀ' e aspetti le conseguenze",
        testo_en: "You yell 'WHO IS THERE' and wait for consequences",
        nodo_successivo_id: "accordo_goblin",
        ordine: 4,
      },
    ],
  },

  {
    id: "bivio_foresta",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Aspetti nascosto finché il goblin si annoia e se ne va — richiede quaranta minuti e un dolore alla schiena. Più avanti la foresta si apre su un bivio con quattro direzioni. A nord: un sentiero stretto verso le rovine. A est: rumore d'acqua — un fiume. A ovest: fumo di camino, forse una capanna. A sud: da dove sei venuto. Una freccia di legno punta in su con scritto 'IL TESORO È DA QUESTA PARTE'. Qualcuno la muove ogni giorno per ridere.",
    testo_en:
      "You wait hidden until the goblin gets bored and leaves — it takes forty minutes and a backache. Farther ahead the forest opens onto a crossroads with four directions. North: a narrow path toward the ruins. East: sound of water — a river. West: chimney smoke, perhaps a hut. South: where you came from. A wooden arrow points upward with the words 'THE TREASURE IS THIS WAY'. Someone moves it every day for laughs.",
    scelte: [
      {
        id: "bivio_a",
        nodo_id: "bivio_foresta",
        testo_it: "Prendi il sentiero nord verso le rovine",
        testo_en: "You take the north path toward the ruins",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "bivio_b",
        nodo_id: "bivio_foresta",
        testo_it: "Vai a est verso il rumore dell'acqua",
        testo_en: "You go east toward the sound of water",
        nodo_successivo_id: "fiume_guado",
        ordine: 2,
      },
      {
        id: "bivio_c",
        nodo_id: "bivio_foresta",
        testo_it: "Esplori a ovest verso la capanna con il fumo",
        testo_en: "You explore west toward the hut with the smoke",
        nodo_successivo_id: "capanna_eremita",
        ordine: 3,
      },
      {
        id: "bivio_d",
        nodo_id: "bivio_foresta",
        testo_it: "Segui la freccia che punta in su — potresti scalare un albero",
        testo_en: "You follow the arrow pointing up — you could climb a tree",
        nodo_successivo_id: "torre_diroccata",
        ordine: 4,
      },
    ],
  },

  {
    id: "fiume_guado",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il fiume è un torrente argentato largo una decina di metri. Non abbastanza profondo da affogare ma abbastanza freddo da rimpiangere la vita. Su una roccia a metà guado siede una rana di dimensioni sorprendenti che ti fissa con occhi dorati. Nell'acqua intorno alla rana si intravedono riflessi brillanti.",
    testo_en:
      "The river is a silver stream about ten meters wide. Not deep enough to drown but cold enough to regret life. On a rock midstream sits a surprisingly large frog staring at you with golden eyes. In the water around the frog glints of brightness are visible.",
    scelte: [
      {
        id: "fiume_a",
        nodo_id: "fiume_guado",
        testo_it: "Guadi il fiume con cura verso la rana",
        testo_en: "You carefully wade the river toward the frog",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 1,
      },
      {
        id: "fiume_b",
        nodo_id: "fiume_guado",
        testo_it: "Cerchi un tronco o sassi per attraversare a secco",
        testo_en: "You look for a log or stones to cross dry-footed",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "fiume_c",
        nodo_id: "fiume_guado",
        testo_it: "Parli alla rana — sembra saggia",
        testo_en: "You speak to the frog — it seems wise",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 3,
      },
      {
        id: "fiume_d",
        nodo_id: "fiume_guado",
        testo_it: "Ti immergi completamente — tanto sei già sudicio",
        testo_en: "You fully submerge yourself — you are already dirty anyway",
        nodo_successivo_id: "accampamento_goblin",
        ordine: 4,
      },
    ],
  },

  {
    id: "capanna_eremita",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La capanna appartiene a Gunda l'Eremita — una donna di età indefinibile con capelli bianchi arruffati e un'espressione di chi ha smesso di stupirsi dell'umanità almeno trent'anni fa. 'Un altro avventuriero. Entrate, bevete il tè, cercate di non toccare niente.' La capanna è piena di libri, erbe essiccate, e almeno otto gatti. 'So dell'Amuleto,' dice Gunda servendo il tè. 'Tutti sanno dell'Amuleto. La domanda è: perché lo vuoi?'",
    testo_en:
      "The hut belongs to Gunda the Hermit — a woman of indeterminate age with messy white hair and the expression of someone who stopped being surprised by humanity at least thirty years ago. 'Another adventurer. Come in, drink the tea, try not to touch anything.' The hut is full of books, dried herbs, and at least eight cats. 'I know about the Amulet,' says Gunda serving the tea. 'Everyone knows about the Amulet. The question is: why do you want it?'",
    scelte: [
      {
        id: "gunda_a",
        nodo_id: "capanna_eremita",
        testo_it: "Dici la verità: hai bisogno dei soldi di Voren",
        testo_en: "You tell the truth: you need Voren's money",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 1,
      },
      {
        id: "gunda_b",
        nodo_id: "capanna_eremita",
        testo_it: "Dici che vuoi diventare leggendario",
        testo_en: "You say you want to become legendary",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "gunda_c",
        nodo_id: "capanna_eremita",
        testo_it: "Chiedi a Gunda se lei sa dove sia l'Amuleto esattamente",
        testo_en: "You ask Gunda if she knows exactly where the Amulet is",
        nodo_successivo_id: "spirito_alleato",
        ordine: 3,
      },
      {
        id: "gunda_d",
        nodo_id: "capanna_eremita",
        testo_it: "Adotti uno dei gatti e lo porti con te",
        testo_en: "You adopt one of the cats and bring it along",
        nodo_successivo_id: "foresta_con_gatto",
        ordine: 4,
      },
    ],
  },

  {
    id: "torre_diroccata",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Sale su un albero è più difficile di quanto ricordassi. Dall'alto vedi però qualcosa di utile: una torre diroccata a nord-est, visibile oltre le cime degli alberi. Non era sulla mappa di Voren. Potresti esplorala o ignorarla e dirigerti al ponte. Uno dei tuoi rami si spezza. Situazione in rapida evoluzione.",
    testo_en:
      "Climbing a tree is harder than you remembered. From the top you can see something useful though: a crumbling tower to the northeast, visible beyond the treetops. It was not on Voren's map. You could explore it or ignore it and head to the bridge. One of your branches snaps. Situation rapidly evolving.",
    scelte: [
      {
        id: "torre_a",
        nodo_id: "torre_diroccata",
        testo_it: "Scendi con dignità e vai verso la torre",
        testo_en: "You descend with dignity and head toward the tower",
        nodo_successivo_id: "grotta_tesoro_foresta",
        ordine: 1,
      },
      {
        id: "torre_b",
        nodo_id: "torre_diroccata",
        testo_it: "Ignori la torre e ti dirigi al ponte",
        testo_en: "You ignore the tower and head to the bridge",
        nodo_successivo_id: "ponte_spiriti",
        ordine: 2,
      },
      {
        id: "torre_c",
        nodo_id: "torre_diroccata",
        testo_it: "Cadi dall'albero e atterri su un goblin di passaggio",
        testo_en: "You fall from the tree and land on a passing goblin",
        nodo_successivo_id: "scontro_goblin_pattuglia",
        ordine: 3,
      },
      {
        id: "torre_d",
        nodo_id: "torre_diroccata",
        testo_it: "Resti sull'albero — è un ottimo punto di osservazione",
        testo_en: "You stay in the tree — it is an excellent vantage point",
        nodo_successivo_id: "indizio_amuleto",
        ordine: 4,
      },
    ],
  },

  {
    id: "rifugio_vicino_ponte",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Nei cespugli trovi non un mostro ma un nano accampato — si chiama Thorbin, porta un'armatura troppo grande e cucina qualcosa che odora di paradiso. 'Ho provato a passare il ponte tre volte,' racconta tranquillo mescolando la zuppa. 'Lo spirito mi batte sempre agli enigmi. Ma la zuppa è buona.' Ti offre una ciotola. Rifiutare sarebbe un delitto.",
    testo_en:
      "In the bushes you find not a monster but a camping dwarf — his name is Thorbin, he wears oversized armor and is cooking something that smells like paradise. 'I have tried to cross the bridge three times,' he says calmly stirring the soup. 'The spirit always beats me at riddles. But the soup is good.' He offers you a bowl. Refusing would be a crime.",
    scelte: [
      {
        id: "thorbin_a",
        nodo_id: "rifugio_vicino_ponte",
        testo_it: "Mangi la zuppa e condividi informazioni sul ponte",
        testo_en: "You eat the soup and share information about the bridge",
        nodo_successivo_id: "alleato_inaspettato",
        ordine: 1,
      },
      {
        id: "thorbin_b",
        nodo_id: "rifugio_vicino_ponte",
        testo_it: "Porti Thorbin con te come supporto morale",
        testo_en: "You bring Thorbin along as moral support",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 2,
      },
      {
        id: "thorbin_c",
        nodo_id: "rifugio_vicino_ponte",
        testo_it: "Chiedi a Thorbin le domande dello spirito per prepararti",
        testo_en: "You ask Thorbin the spirit's questions to prepare",
        nodo_successivo_id: "enigma_ponte",
        ordine: 3,
      },
      {
        id: "thorbin_d",
        nodo_id: "rifugio_vicino_ponte",
        testo_it: "Ringrazi e vai al ponte riposato e ben nutrito",
        testo_en: "You thank him and go to the bridge rested and well fed",
        nodo_successivo_id: "rovine_ingresso",
        ordine: 4,
      },
    ],
  },

  // ── Nodi Rovine Aggiuntivi ────────────────────────────────────────────────

  {
    id: "corridoio_rovine",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il corridoio principale delle rovine è lungo e buio, illuminato a intervalli irregolari da cristalli incastonati nella pietra. Le pareti sono coperte di bassorilievi che raccontano la storia della Crepa — non quella versione edulcorata che forse ti ha dato Voren, ma quella vera. Sulla sinistra una porta socchiusa lascia filtrare della luce rossa. Sulla destra un'altra porta è chiusa da catene. Dritto avanti si sente il richiamo della sala principale.",
    testo_en:
      "The main corridor of the ruins is long and dark, lit at irregular intervals by crystals embedded in the stone. The walls are covered in bas-reliefs telling the story of the Rift — not the watered-down version Voren may have given you, but the real one. On the left a slightly open door filters red light. On the right another door is closed with chains. Straight ahead the call of the main hall can be heard.",
    scelte: [
      {
        id: "corridoio_a",
        nodo_id: "corridoio_rovine",
        testo_it: "Apri la porta con la luce rossa a sinistra",
        testo_en: "You open the door with the red light on the left",
        nodo_successivo_id: "laboratorio_alchimista",
        ordine: 1,
      },
      {
        id: "corridoio_b",
        nodo_id: "corridoio_rovine",
        testo_it: "Forzi le catene della porta a destra",
        testo_en: "You force the chains on the right door",
        nodo_successivo_id: "prigione_rovine",
        ordine: 2,
      },
      {
        id: "corridoio_c",
        nodo_id: "corridoio_rovine",
        testo_it: "Leggi attentamente i bassorilievi sulle pareti",
        testo_en: "You carefully read the bas-reliefs on the walls",
        nodo_successivo_id: "biblioteca_polvere",
        ordine: 3,
      },
      {
        id: "corridoio_d",
        nodo_id: "corridoio_rovine",
        testo_it: "Continui dritto verso la sala principale",
        testo_en: "You continue straight toward the main hall",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "laboratorio_alchimista",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Il laboratorio è un caos controllato di alambicchi, pozioni, e note scritte in una grafia così piccola da richiedere occhi da insetto. Tutto è ancora intatto — l'alchimista deve essersi allontanato di fretta. Molte delle pozioni sono ancora attive, riconoscibili dai colori e dai bollicine.",
    testo_en:
      "The laboratory is controlled chaos of alembics, potions, and notes written in handwriting so small it would require insect eyes. Everything is still intact — the alchemist must have left in a hurry. Many of the potions are still active, recognizable by their colors and bubbles.",
    scelte: [
      {
        id: "lab_a",
        nodo_id: "laboratorio_alchimista",
        testo_it: "Prendi le pozioni che sembrano più stabili",
        testo_en: "You take the potions that seem most stable",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "lab_b",
        nodo_id: "laboratorio_alchimista",
        testo_it: "Leggi le note cercando informazioni sul Guardiano",
        testo_en: "You read the notes looking for information on the Guardian",
        nodo_successivo_id: "anticamera_guardiano",
        ordine: 2,
      },
      {
        id: "lab_c",
        nodo_id: "laboratorio_alchimista",
        testo_it: "Mescoli due pozioni a caso — la scienza richiede coraggio",
        testo_en: "You mix two potions at random — science requires courage",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "lab_d",
        nodo_id: "laboratorio_alchimista",
        testo_it: "Lasci tutto com'è e vai verso la sala principale",
        testo_en: "You leave everything as is and head to the main hall",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "prigione_rovine",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La prigione sotterranea è vuota — quasi. In un angolo c'è uno scheletro vestito di armatura lucente (il costume non ha aiutato) e, sorprendentemente, un secondo prigioniero vivo: uno gnomo di nome Zik, imprigionato trecento anni fa per aver 'toccato le cose del Guardiano'. Zik è sopravvissuto mangiando i ratti che hanno mangiato altri ratti che hanno mangiato cose che preferisci non sapere. È in ottima forma.",
    testo_en:
      "The underground prison is empty — almost. In a corner is a skeleton in shining armor (the outfit didn't help) and, surprisingly, a second living prisoner: a gnome named Zik, imprisoned three hundred years ago for 'touching the Guardian's things'. Zik survived by eating rats who ate other rats who ate things you prefer not to know. He is in excellent shape.",
    scelte: [
      {
        id: "zik_a",
        nodo_id: "prigione_rovine",
        testo_it: "Liberi Zik e lo porti con te",
        testo_en: "You free Zik and bring him along",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "zik_b",
        nodo_id: "prigione_rovine",
        testo_it: "Chiedi a Zik tutto quello che sa sul Guardiano",
        testo_en: "You ask Zik everything he knows about the Guardian",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 2,
      },
      {
        id: "zik_c",
        nodo_id: "prigione_rovine",
        testo_it: "Prendi l'armatura dello scheletro — sembra ancora funzionale",
        testo_en: "You take the skeleton's armor — it still looks functional",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "zik_d",
        nodo_id: "prigione_rovine",
        testo_it: "Lasci Zik lì — è sopravvissuto trecento anni, ce la fa ancora",
        testo_en: "You leave Zik there — he survived three hundred years, he can manage",
        nodo_successivo_id: "cripta_eroi",
        ordine: 4,
      },
    ],
  },

  {
    id: "biblioteca_polvere",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "I bassorilievi ti guidano verso una porta nascosta — una biblioteca polverosa con migliaia di volumi. La polvere è tanta da essere quasi solida. Un libro in particolare brilla debolmente sullo scaffale più alto: 'Tutto quello che avresti voluto sapere sulla Crepa ma avevi paura di chiedere.' Autore: Anonimo. Data: molto prima di te.",
    testo_en:
      "The bas-reliefs guide you to a hidden door — a dusty library with thousands of volumes. The dust is so thick it is almost solid. One book in particular glows faintly on the highest shelf: 'Everything You Wanted To Know About the Rift but Were Afraid to Ask.' Author: Anonymous. Date: long before you.",
    scelte: [
      {
        id: "biblio_a",
        nodo_id: "biblioteca_polvere",
        testo_it: "Leggi il libro — hai bisogno di tutte le informazioni",
        testo_en: "You read the book — you need all the information you can get",
        nodo_successivo_id: "segreto_abisso",
        ordine: 1,
      },
      {
        id: "biblio_b",
        nodo_id: "biblioteca_polvere",
        testo_it: "Prendi il libro con te per leggerlo dopo",
        testo_en: "You take the book with you to read later",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "biblio_c",
        nodo_id: "biblioteca_polvere",
        testo_it: "Cerchi libri su come sconfiggere il Guardiano",
        testo_en: "You look for books on how to defeat the Guardian",
        nodo_successivo_id: "anticamera_guardiano",
        ordine: 3,
      },
      {
        id: "biblio_d",
        nodo_id: "biblioteca_polvere",
        testo_it: "Sternuti così forte da far cadere metà degli scaffali",
        testo_en: "You sneeze so hard half the shelves fall over",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "sala_trofei_rovine",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Una sala piena di trofei di avventurieri precedenti: scudi appesi, armi esposte, e in qualche caso direttamente l'avventuriero impagliato (il Guardiano aveva un senso dell'umorismo discutibile qualche secolo fa). Su una delle teche c'è una targa: 'Questi avventurieri hanno tentato. Hanno fallito. Ma almeno ci hanno provato.' È stranamente commovente.",
    testo_en:
      "A room full of trophies from previous adventurers: hanging shields, displayed weapons, and in some cases the adventurer themselves taxidermied (the Guardian had questionable humor some centuries ago). On one of the cases is a plaque: 'These adventurers tried. They failed. But at least they tried.' It is strangely moving.",
    scelte: [
      {
        id: "trofei_a",
        nodo_id: "sala_trofei_rovine",
        testo_it: "Prendi le armi migliori esposte — nessuno le usa più",
        testo_en: "You take the best displayed weapons — nobody uses them anymore",
        nodo_successivo_id: "anticamera_guardiano",
        ordine: 1,
      },
      {
        id: "trofei_b",
        nodo_id: "sala_trofei_rovine",
        testo_it: "Onori i caduti con un momento di silenzio",
        testo_en: "You honor the fallen with a moment of silence",
        nodo_successivo_id: "cripta_eroi",
        ordine: 2,
      },
      {
        id: "trofei_c",
        nodo_id: "sala_trofei_rovine",
        testo_it: "Leggi le targhe cercando indizi su come vincere",
        testo_en: "You read the plaques looking for clues on how to win",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "trofei_d",
        nodo_id: "sala_trofei_rovine",
        testo_it: "Chiedi ad uno degli avventurieri impagliati un consiglio",
        testo_en: "You ask one of the taxidermied adventurers for advice",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "anticamera_guardiano",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "L'anticamera prima della sala del trono è arredata con cura insolita per una fortezza dell'oscurità — ci sono piante (magiche, ma piante), un tappeto pulito, e una fontanella d'acqua con una tazza di sasso accanto. Sul muro un cartello: 'Il Guardiano vi riceve nella sala principale. Attendere qui se occupato.' Sotto, scritto a mano: 'Il Guardiano non è mai occupato. Bussate pure.' La porta è chiusa.",
    testo_en:
      "The antechamber before the throne room is furnished with unusual care for a fortress of darkness — there are plants (magic, but plants), a clean rug, and a small water fountain with a stone cup. On the wall a sign: 'The Guardian receives you in the main hall. Wait here if busy.' Below, handwritten: 'The Guardian is never busy. Please knock.' The door is closed.",
    scelte: [
      {
        id: "ante_a",
        nodo_id: "anticamera_guardiano",
        testo_it: "Bussi educatamente e aspetti",
        testo_en: "You knock politely and wait",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "ante_b",
        nodo_id: "anticamera_guardiano",
        testo_it: "Sfoni la porta con la spalla",
        testo_en: "You burst through the door with your shoulder",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "ante_c",
        nodo_id: "anticamera_guardiano",
        testo_it: "Aspetti annaffiando le piante magiche — potrebbero ringraziarti",
        testo_en: "You wait by watering the magic plants — they might thank you",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "ante_d",
        nodo_id: "anticamera_guardiano",
        testo_it: "Bevi l'acqua della fontanella — è fresca e ottima",
        testo_en: "You drink from the small fountain — it is fresh and excellent",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 4,
      },
    ],
  },

  {
    id: "sala_banchetto",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Una sala laterale rivela ciò che nessun avventuriero si aspetta: un banchetto preparato e in caldo. Piatti lucidi, candele accese, pane fresco. Un cartiglio sul tavolo recita: 'Per gli avventurieri che arrivano all'ora giusta. Buon appetito.' Data del cartiglio: impossibile da leggere. Il cibo sembra fresco. I tuoi sospetti sono giustificati. Il tuo stomaco dice il contrario.",
    testo_en:
      "A side room reveals what no adventurer expects: a prepared and warm banquet. Shiny plates, lit candles, fresh bread. A scroll on the table reads: 'For adventurers who arrive at the right time. Enjoy your meal.' Date on the scroll: impossible to read. The food seems fresh. Your suspicions are justified. Your stomach disagrees.",
    scelte: [
      {
        id: "banchetto_a",
        nodo_id: "sala_banchetto",
        testo_it: "Mangi con entusiasmo — sei affamato",
        testo_en: "You eat enthusiastically — you are hungry",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "banchetto_b",
        nodo_id: "sala_banchetto",
        testo_it: "Assaggi con cautela un solo pezzo di pane",
        testo_en: "You carefully taste just one piece of bread",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "banchetto_c",
        nodo_id: "sala_banchetto",
        testo_it: "Rifiuti il cibo — potrebbe essere una trappola",
        testo_en: "You refuse the food — it could be a trap",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "banchetto_d",
        nodo_id: "sala_banchetto",
        testo_it: "Porti via tutto il cibo nello zaino per dopo",
        testo_en: "You take all the food in your pack for later",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 4,
      },
    ],
  },

  {
    id: "stanza_meccanismi",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Una stanza piena di ingranaggi, leve, e meccanismi antichi ancora in moto. Al centro una piattaforma rotante. Sulle pareti: frecce che indicano diverse direzioni con etichette sbiadite. Riesci a leggere solo 'SALA PRINCIPALE' (freccia su) e 'ABISSO DIRETTO' (freccia giù). La freccia verso il basso ha un punto esclamativo rosso sbiadito accanto. Forse è decorativo.",
    testo_en:
      "A room full of gears, levers, and ancient mechanisms still in motion. At the center a rotating platform. On the walls: arrows pointing in different directions with faded labels. You can only read 'MAIN HALL' (arrow up) and 'DIRECT ABYSS' (arrow down). The downward arrow has a faded red exclamation mark next to it. Perhaps it is decorative.",
    scelte: [
      {
        id: "meccanismi_a",
        nodo_id: "stanza_meccanismi",
        testo_it: "Segui la freccia verso la sala principale",
        testo_en: "You follow the arrow toward the main hall",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "meccanismi_b",
        nodo_id: "stanza_meccanismi",
        testo_it: "Esamini i meccanismi cercando di capire cosa fanno",
        testo_en: "You examine the mechanisms trying to understand what they do",
        nodo_successivo_id: "corridoio_rovine",
        ordine: 2,
      },
      {
        id: "meccanismi_c",
        nodo_id: "stanza_meccanismi",
        testo_it: "Tiri una leva a caso — sei curioso",
        testo_en: "You pull a random lever — you are curious",
        nodo_successivo_id: "sala_banchetto",
        ordine: 3,
      },
      {
        id: "meccanismi_d",
        nodo_id: "stanza_meccanismi",
        testo_it: "Ignori tutto e cerchi un'uscita rapida",
        testo_en: "You ignore everything and look for a quick exit",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "cripta_eroi",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La cripta è un luogo di pace inaspettata. Dieci sarcofaghi di pietra, ciascuno con l'incisione del nome e della causa della morte dell'avventuriero contenuto. Spicca uno: 'Theryn il Coraggioso — morto per un gradino rotto.' Il prossimo: 'Gara il Forte — morto per eccesso di fiducia.' E l'ultimo: 'Anonimo — non sappiamo il nome ma era chiaramente di una certa qualità.' Uno dei sarcofaghi emette un tenue bagliore.",
    testo_en:
      "The crypt is a place of unexpected peace. Ten stone sarcophagi, each inscribed with the adventurer's name and cause of death. One stands out: 'Theryn the Brave — died from a broken step.' The next: 'Gara the Strong — died from overconfidence.' And the last: 'Anonymous — we don't know the name but it was clearly of a certain quality.' One of the sarcophagi emits a faint glow.",
    scelte: [
      {
        id: "cripta_a",
        nodo_id: "cripta_eroi",
        testo_it: "Apri il sarcofago luminoso con rispetto",
        testo_en: "You open the glowing sarcophagus with respect",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "cripta_b",
        nodo_id: "cripta_eroi",
        testo_it: "Onori i caduti — meritano più di un visitatore frettoloso",
        testo_en: "You honor the fallen — they deserve more than a hurried visitor",
        nodo_successivo_id: "spirito_alleato",
        ordine: 2,
      },
      {
        id: "cripta_c",
        nodo_id: "cripta_eroi",
        testo_it: "Cerchi informazioni sul gradino rotto di Theryn",
        testo_en: "You look for information about Theryn's broken step",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "cripta_d",
        nodo_id: "cripta_eroi",
        testo_it: "Lasci un fiore immaginario — non hai fiori reali",
        testo_en: "You leave an imaginary flower — you have no real flowers",
        nodo_successivo_id: "altare_antico",
        ordine: 4,
      },
    ],
  },

  {
    id: "altare_antico",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "L'altare di pietra nera sembra più vecchio delle rovine stesse. Sono incisi su di esso simboli che nessun libro moderno riconosce. Al centro dell'altare una depressione a forma di mano. Tutto il tuo essere suggerisce che mettere la mano lì sarebbe stupido. L'altare sembra aspettare. La depressione ha esattamente la forma della tua mano destra.",
    testo_en:
      "The black stone altar seems older than the ruins themselves. Carved on it are symbols no modern book recognizes. At the center of the altar a hand-shaped depression. Every fiber of your being suggests placing your hand there would be stupid. The altar seems to wait. The depression is exactly the shape of your right hand.",
    scelte: [
      {
        id: "altare_a",
        nodo_id: "altare_antico",
        testo_it: "Metti la mano nella depressione — la tentazione è troppa",
        testo_en: "You place your hand in the depression — the temptation is too great",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 1,
      },
      {
        id: "altare_b",
        nodo_id: "altare_antico",
        testo_it: "Resisti e cerchi altro modo per proseguire",
        testo_en: "You resist and look for another way to proceed",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "altare_c",
        nodo_id: "altare_antico",
        testo_it: "Metti la mano sinistra invece di quella destra — per i dettagli",
        testo_en: "You place the left hand instead of the right — attention to detail",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "altare_d",
        nodo_id: "altare_antico",
        testo_it: "Studi i simboli cercando di decifrarli",
        testo_en: "You study the symbols trying to decipher them",
        nodo_successivo_id: "segreto_abisso",
        ordine: 4,
      },
    ],
  },

  {
    id: "sala_riflessi",
    tipo: "storia",
    probabilità_loot: "niente",
    testo_it:
      "Una sala con specchi su ogni superficie — soffitto, pavimento, pareti. Ti rifletti all'infinito in ogni direzione. Una delle tue riflessioni si muove leggermente diverso dalle altre. Poi una seconda. Poi tutte le riflessioni si voltano verso di te contemporaneamente. Una di loro sorride. Tu non stai sorridendo.",
    testo_en:
      "A hall with mirrors on every surface — ceiling, floor, walls. You are reflected infinitely in every direction. One of your reflections moves slightly differently from the others. Then a second. Then all the reflections turn toward you simultaneously. One of them smiles. You are not smiling.",
    scelte: [
      {
        id: "riflessi_a",
        nodo_id: "sala_riflessi",
        testo_it: "Sorridi anche tu — è la risposta giusta",
        testo_en: "You smile too — it is the right answer",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "riflessi_b",
        nodo_id: "sala_riflessi",
        testo_it: "Rompi lo specchio del riflesso che sorrideva",
        testo_en: "You break the mirror of the smiling reflection",
        nodo_successivo_id: "sala_principale",
        ordine: 2,
      },
      {
        id: "riflessi_c",
        nodo_id: "sala_riflessi",
        testo_it: "Corri verso l'uscita senza guardare indietro",
        testo_en: "You run toward the exit without looking back",
        nodo_successivo_id: "anticamera_guardiano",
        ordine: 3,
      },
      {
        id: "riflessi_d",
        nodo_id: "sala_riflessi",
        testo_it: "Chiedi al riflesso sorridente cosa vuole",
        testo_en: "You ask the smiling reflection what it wants",
        nodo_successivo_id: "confronto_guardiano",
        ordine: 4,
      },
    ],
  },

  {
    id: "deposito_rovine",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "Una stanza usata come deposito — scaffali su tre pareti, casse impilate fino al soffitto. La polvere millenaria suggerisce che nessuno sia venuto qui da molto tempo. Ma gli oggetti sono ben conservati: il Guardiano era metodico. Una cassa in particolare ha un lucchetto di stile diverso dagli altri — più recente.",
    testo_en:
      "A room used as storage — shelves on three walls, crates stacked to the ceiling. The millennial dust suggests nobody has come here for a very long time. But the objects are well preserved: the Guardian was methodical. One crate in particular has a padlock of a different style from the others — more recent.",
    scelte: [
      {
        id: "deposito_a",
        nodo_id: "deposito_rovine",
        testo_it: "Apri la cassa con lucchetto recente",
        testo_en: "You open the crate with the recent padlock",
        nodo_successivo_id: "sala_principale",
        ordine: 1,
      },
      {
        id: "deposito_b",
        nodo_id: "deposito_rovine",
        testo_it: "Prendi oggetti dagli scaffali più antichi",
        testo_en: "You take objects from the oldest shelves",
        nodo_successivo_id: "corridoio_rovine",
        ordine: 2,
      },
      {
        id: "deposito_c",
        nodo_id: "deposito_rovine",
        testo_it: "Cerchi indizi su chi ha messo il lucchetto recente",
        testo_en: "You look for clues on who put the recent padlock",
        nodo_successivo_id: "prigione_rovine",
        ordine: 3,
      },
      {
        id: "deposito_d",
        nodo_id: "deposito_rovine",
        testo_it: "Porti via tutto quello che entra nello zaino",
        testo_en: "You take everything that fits in your pack",
        nodo_successivo_id: "sala_principale",
        ordine: 4,
      },
    ],
  },

  {
    id: "torre_nord_rovine",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    testo_it:
      "La torre nord è il punto più alto delle rovine accessibile. Dalle sue finestre vedi l'intera struttura dall'alto: la sala principale è al centro, i corridoi si diramano come raggi di una ruota, e la Crepa — che non si vede in condizioni normali — emette un bagliore violaceo sottilissimo proprio sotto la sala del trono. Zik (se l'hai liberato) ti raggiunge ansimando dopo le scale. 'Perché sali sempre le scale di corsa?'",
    testo_en:
      "The north tower is the highest accessible point of the ruins. From its windows you see the entire structure from above: the main hall is at the center, corridors branch out like wheel spokes, and the Rift — normally invisible — emits a very faint purple glow directly beneath the throne room. Zik (if you freed him) reaches you breathlessly after the stairs. 'Why do you always climb stairs at a run?'",
    scelte: [
      {
        id: "torren_a",
        nodo_id: "torre_nord_rovine",
        testo_it: "Usi la visione dall'alto per trovare il percorso più sicuro",
        testo_en: "You use the aerial view to find the safest path",
        nodo_successivo_id: "anticamera_guardiano",
        ordine: 1,
      },
      {
        id: "torren_b",
        nodo_id: "torre_nord_rovine",
        testo_it: "Sei turbato dal bagliore della Crepa — era inaspettato",
        testo_en: "You are troubled by the Rift's glow — it was unexpected",
        nodo_successivo_id: "segreto_abisso",
        ordine: 2,
      },
      {
        id: "torren_c",
        nodo_id: "torre_nord_rovine",
        testo_it: "Scendi e vai direttamente verso la sala principale",
        testo_en: "You descend and go directly to the main hall",
        nodo_successivo_id: "sala_principale",
        ordine: 3,
      },
      {
        id: "torren_d",
        nodo_id: "torre_nord_rovine",
        testo_it: "Cerchi un modo per avvicinarti alla Crepa senza passare dal trono",
        testo_en: "You look for a way to approach the Rift without going through the throne",
        nodo_successivo_id: "stanza_meccanismi",
        ordine: 4,
      },
    ],
  },

];

// ─── Set Leggendari Aggiuntivi (specifici per questa storia) ─────────────────
// I tre set qui sotto usano i NomeSet già definiti in game-engine.ts.
// Gli oggetti corrispondenti sono nel pool sopra.

export const SET_STORIA: Record<string, string[]> = {
  corona_alba_eterna: [
    "elmo_alba_cremisi",
    "armatura_alba_cremisi",
    "stivali_alba_cremisi",
    "amuleto_alba_cremisi",
  ],
  velo_ombre_eterne: [
    "cappuccio_ombra_silenziosa",
    "guanti_ombra_silenziosa",
    "mantello_ombra_silenziosa",
    "anello_ombra_silenziosa",
  ],
  patto_drago_primordiale: [
    "bastone_vecchio_saggio",
    "veste_vecchio_saggio",
    "anello_vecchio_saggio",
    "grimorio_vecchio_saggio",
  ],
};

export const NODO_INIZIALE_ID = "inizio";
