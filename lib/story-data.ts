export const NODO_INIZIALE = 'inizio'

export interface Scelta {
  id: string
  testo: string
  nodoDestinazione: string
}

export interface Nodo {
  id: string
  titolo: string
  testo: string
  scelte: Scelta[]
}

const nodi: Record<string, Nodo> = {
  inizio: {
    id: 'inizio',
    titolo: 'L\'Inizio del Viaggio',
    testo: 'Ti risvegli in una foresta oscura. La nebbia avvolge gli alberi antichi e il silenzio pesa come piombo. Ricordi vagamente di aver accettato una missione pericolosa, ma i dettagli sfuggono. Davanti a te si aprono tre sentieri.',
    scelte: [
      { id: 'a', testo: 'Segui il sentiero di sinistra, verso le luci lontane', nodoDestinazione: 'villaggio' },
      { id: 'b', testo: 'Imbocca il sentiero di destra, verso le rovine', nodoDestinazione: 'rovine' },
      { id: 'c', testo: 'Procedi dritto nel cuore della foresta', nodoDestinazione: 'foresta_profonda' },
      { id: 'd', testo: 'Fermati e aspetta che la nebbia si diradi', nodoDestinazione: 'nebbia' },
    ],
  },
  villaggio: {
    id: 'villaggio',
    titolo: 'Il Villaggio Abbandonato',
    testo: 'Le luci che vedevi erano torce bruciate abbandonate. Il villaggio è deserto: case con porte aperte, tavole imbandite lasciate a metà pasto. Sul muro di pietra dell\'osteria trovi un messaggio inciso: "Fuggite prima che arrivi il buio". Senti un rumore provenire dalla cantina.',
    scelte: [
      { id: 'a', testo: 'Apri la botola della cantina', nodoDestinazione: 'cantina' },
      { id: 'b', testo: 'Cerca indizi nelle case abbandonate', nodoDestinazione: 'indizi' },
      { id: 'c', testo: 'Prendi le torce e torna al bivio', nodoDestinazione: 'inizio' },
      { id: 'd', testo: 'Sali sul campanile per osservare la zona', nodoDestinazione: 'campanile' },
    ],
  },
  rovine: {
    id: 'rovine',
    titolo: 'Le Rovine Antiche',
    testo: 'Le rovine di un tempio dimenticato si ergono tra gli alberi. Colonne spezzate e bassorilievi consumati dal tempo raccontano storie di un\'epoca perduta. Al centro, una statua ancora intatta raffigura una figura con una spada fiammeggiante. Ai suoi piedi c\'è un\'iscrizione.',
    scelte: [
      { id: 'a', testo: 'Leggi l\'iscrizione alla base della statua', nodoDestinazione: 'iscrizione' },
      { id: 'b', testo: 'Esplora le stanze sotterranee del tempio', nodoDestinazione: 'sotterranei' },
      { id: 'c', testo: 'Tocca la statua con la spada fiammeggiante', nodoDestinazione: 'statua_tocca' },
      { id: 'd', testo: 'Raccogli i frammenti di pietra incisa', nodoDestinazione: 'frammenti' },
    ],
  },
  foresta_profonda: {
    id: 'foresta_profonda',
    titolo: 'Il Cuore della Foresta',
    testo: 'La foresta diventa più densa a ogni passo. Gli alberi sembrano avere volti nelle loro cortecce nodose, e le loro radici si muovono leggermente, come se respirassero. Una voce sussurra il tuo nome tra le foglie. Poi vedi una luce verde pulsare in lontananza.',
    scelte: [
      { id: 'a', testo: 'Avvicinati alla luce verde', nodoDestinazione: 'luce_verde' },
      { id: 'b', testo: 'Rispondi alla voce che ti chiama', nodoDestinazione: 'voce' },
      { id: 'c', testo: 'Scalii un albero per orientarti', nodoDestinazione: 'albero_alto' },
      { id: 'd', testo: 'Torni indietro correndo', nodoDestinazione: 'inizio' },
    ],
  },
  nebbia: {
    id: 'nebbia',
    titolo: 'La Nebbia si Infittisce',
    testo: 'Invece di diradarsi, la nebbia diventa più densa. Non riesci a vedere oltre un metro davanti a te. Poi senti dei passi: uno, due, tre... si avvicinano. Una figura emerge dalla nebbia: un vecchio con un mantello grigio e occhi che brillano di una luce strana.',
    scelte: [
      { id: 'a', testo: 'Chiedi al vecchio chi sei e dove sei', nodoDestinazione: 'vecchio_saggio' },
      { id: 'b', testo: 'Metti mano alla spada per difenderti', nodoDestinazione: 'attacca_vecchio' },
      { id: 'c', testo: 'Fai un passo indietro lentamente', nodoDestinazione: 'inizio' },
      { id: 'd', testo: 'Segui il vecchio in silenzio', nodoDestinazione: 'vecchio_saggio' },
    ],
  },
  cantina: {
    id: 'cantina',
    titolo: 'La Cantina del Segreto',
    testo: 'Nella cantina trovi una famiglia nascosta: un uomo, una donna e due bambini. Tremano di paura. "Sono arrivati stanotte" sussurra l\'uomo "creature senza volto. Hanno preso tutti gli altri." La donna ti mostra una mappa con un cerchio segnato: "Lì c\'è il loro covo. Chi ha il coraggio può fermarli."',
    scelte: [
      { id: 'a', testo: 'Prendi la mappa e prometti di fermare le creature', nodoDestinazione: 'missione' },
      { id: 'b', testo: 'Aiuta la famiglia a scappare dal villaggio', nodoDestinazione: 'fuga' },
      { id: 'c', testo: 'Chiedi maggiori informazioni sulle creature', nodoDestinazione: 'informazioni' },
      { id: 'd', testo: 'Rifiuti la missione e te ne vai', nodoDestinazione: 'inizio' },
    ],
  },
  campanile: {
    id: 'campanile',
    titolo: 'La Vista dal Campanile',
    testo: 'Dal campanile vedi tutto il territorio circostante. La foresta si estende per chilometri, ma a est intravedi le torri di un castello che non dovrebbe esistere: non è su nessuna mappa che conosci. A nord, colonne di fumo nero si alzano da qualcosa che brucia. A ovest, il mare.',
    scelte: [
      { id: 'a', testo: 'Dirigiti verso il castello misterioso a est', nodoDestinazione: 'castello' },
      { id: 'b', testo: 'Vai verso il fumo a nord per investigare', nodoDestinazione: 'incendio' },
      { id: 'c', testo: 'Scendi e cerca una barca verso il mare a ovest', nodoDestinazione: 'mare' },
      { id: 'd', testo: 'Rimani sul campanile a fare la guardia', nodoDestinazione: 'guardia' },
    ],
  },
  iscrizione: {
    id: 'iscrizione',
    titolo: 'Le Parole Antiche',
    testo: 'L\'iscrizione recita: "Chi porta il sangue degli Antichi può risvegliare la Lama del Destino. Ma sappi: ogni potere ha un prezzo, e questo non si paga in oro." Senti qualcosa scaldarsi al tuo polso: un marchio che non sapevi di avere inizia a brillare con la stessa luce della statua.',
    scelte: [
      { id: 'a', testo: 'Tendi il polso verso la statua', nodoDestinazione: 'risveglio' },
      { id: 'b', testo: 'Copriti il marchio e allontanati', nodoDestinazione: 'rovine' },
      { id: 'c', testo: 'Cerchi di capire cosa significa il marchio', nodoDestinazione: 'marchio' },
      { id: 'd', testo: 'Gridi una domanda alla statua', nodoDestinazione: 'statua_risponde' },
    ],
  },
  sotterranei: {
    id: 'sotterranei',
    titolo: 'I Sotterranei del Tempio',
    testo: 'Le stanze sotterranee conservano ancora i tesori del tempio: biblioteche di papiri consumati, altari con offerte pietrificate, e al centro una vasca piena di un liquido argenteo che non si muove nonostante l\'aria circoli. Su una lapide leggete: "L\'acqua della profezia mostra solo ciò che è già accaduto."',
    scelte: [
      { id: 'a', testo: 'Guarda nel liquido argenteo', nodoDestinazione: 'profezia' },
      { id: 'b', testo: 'Leggi i papiri antichi', nodoDestinazione: 'papiri' },
      { id: 'c', testo: 'Esamina gli altari con le offerte', nodoDestinazione: 'altari' },
      { id: 'd', testo: 'Torni di sopra alle rovine', nodoDestinazione: 'rovine' },
    ],
  },
  luce_verde: {
    id: 'luce_verde',
    titolo: 'La Fonte della Luce',
    testo: 'La luce verde proviene da un cerchio di funghi luminosi che circondano una creatura: un cervo con la criniera fatta di stelle e gli occhi come specchi. La creatura ti guarda senza paura. "Aspettavo il tuo arrivo" dice con una voce che sembra venire da dentro di te. "Scegli: la forza, la saggezza, o la velocità."',
    scelte: [
      { id: 'a', testo: 'Scegli la forza', nodoDestinazione: 'dono_forza' },
      { id: 'b', testo: 'Scegli la saggezza', nodoDestinazione: 'dono_saggezza' },
      { id: 'c', testo: 'Scegli la velocità', nodoDestinazione: 'dono_velocita' },
      { id: 'd', testo: 'Rifiuti tutti i doni', nodoDestinazione: 'rifiuto_dono' },
    ],
  },
  vecchio_saggio: {
    id: 'vecchio_saggio',
    titolo: 'Il Custode della Nebbia',
    testo: 'Il vecchio si chiama Erevan e dice di essere il custode di questi boschi da trecento anni. "La nebbia non è nemica" spiega "è protezione. Qualcosa di antico si è risvegliato e la nebbia tiene lontano i curiosi." Ti offre una pozione e una scelta: "Posso mostrarti la via sicura o la via necessaria."',
    scelte: [
      { id: 'a', testo: 'Chiedi la via sicura', nodoDestinazione: 'via_sicura' },
      { id: 'b', testo: 'Chiedi la via necessaria', nodoDestinazione: 'via_necessaria' },
      { id: 'c', testo: 'Bevi la pozione prima di decidere', nodoDestinazione: 'pozione' },
      { id: 'd', testo: 'Chiedi al vecchio chi ti ha mandato qui', nodoDestinazione: 'origine' },
    ],
  },
  missione: {
    id: 'missione',
    titolo: 'Il Patto con la Famiglia',
    testo: 'Prendi la mappa. L\'uomo ti consegna anche una chiave arrugginita: "Apre il cancello del covo. Non chiederci come ce l\'abbiamo." La donna ti mette in mano un amuleto: "Mia nonna diceva che protegge dal malocchio." I bambini ti guardano con occhi grandi. Hai una missione. Ora serve un piano.',
    scelte: [
      { id: 'a', testo: 'Parti subito per il covo', nodoDestinazione: 'covo' },
      { id: 'b', testo: 'Prima esplori il villaggio per trovare armi', nodoDestinazione: 'armi' },
      { id: 'c', testo: 'Chiedi alla famiglia di venire con te', nodoDestinazione: 'famiglia_insieme' },
      { id: 'd', testo: 'Aspetti il mattino per partire alla luce del sole', nodoDestinazione: 'alba' },
    ],
  },
  castello: {
    id: 'castello',
    titolo: 'Il Castello Senza Nome',
    testo: 'Il castello è reale, ma sembra esistere a metà tra questo mondo e un altro. Le sue mura cambiano colore con la luce e alcune torri appaiono e scompaiono. Il portone è aperto. All\'interno senti musica: una melodia dolce e inquietante insieme. Sul pavimento del cortile, impronte che non appartengono ad alcuna creatura conosciuta.',
    scelte: [
      { id: 'a', testo: 'Segui la musica verso la fonte', nodoDestinazione: 'musica' },
      { id: 'b', testo: 'Esamina le impronte misteriose', nodoDestinazione: 'impronte' },
      { id: 'c', testo: 'Esplora le torri del castello', nodoDestinazione: 'torri' },
      { id: 'd', testo: 'Esci e torni al campanile', nodoDestinazione: 'campanile' },
    ],
  },
  risveglio: {
    id: 'risveglio',
    titolo: 'Il Risveglio della Lama',
    testo: 'La statua vibra, poi esplode in polvere di luce dorata. Al suo posto rimane solo la spada, sospesa nell\'aria. La impugni e senti un calore scorrere dal palmo fino al cuore: millenni di memorie, battaglie dimenticate, volti di eroi caduti. Sei il nuovo guardiano. La lama mormorerà sempre la direzione giusta. Ma questo potere ti renderà un bersaglio.',
    scelte: [
      { id: 'a', testo: 'Accetti il destino di guardiano', nodoDestinazione: 'missione' },
      { id: 'b', testo: 'Posi la spada e cerchi una via normale', nodoDestinazione: 'rovine' },
      { id: 'c', testo: 'Chiedi alla lama dove andare', nodoDestinazione: 'lama_parla' },
      { id: 'd', testo: 'Nascondi la spada nelle rovine', nodoDestinazione: 'nascondi_lama' },
    ],
  },
  profezia: {
    id: 'profezia',
    titolo: 'La Visione nel Liquido',
    testo: 'Nel liquido argenteo vedi: te stesso, in piedi su una torre in fiamme, che regge qualcosa di luminoso mentre attorno a te cadono figure oscure. Poi la visione cambia: un bambino che ride sotto un cielo stellato. Poi ancora: una porta chiusa con sette sigilli. L\'acqua torna immobile. Cosa hai appena visto?',
    scelte: [
      { id: 'a', testo: 'La torre in fiamme: cerchi quel luogo', nodoDestinazione: 'torre_fiamme' },
      { id: 'b', testo: 'Il bambino: c\'è qualcuno che devi proteggere', nodoDestinazione: 'bambino_profezia' },
      { id: 'c', testo: 'La porta: cerchi i sette sigilli', nodoDestinazione: 'sigilli' },
      { id: 'd', testo: 'Ignori la visione e torni alle rovine', nodoDestinazione: 'rovine' },
    ],
  },
  dono_forza: {
    id: 'dono_forza',
    titolo: 'Il Dono della Forza',
    testo: 'Il cervo stellare soffia sul tuo viso. Senti i muscoli trasformarsi, una forza nuova che scorre nelle ossa come radici nell\'humus. Poi la creatura sparisce, e la foresta torna silenziosa. Ma ora sai che il tuo cammino è determinato: chi porta questa forza deve usarla per qualcosa di più grande di sé.',
    scelte: [
      { id: 'a', testo: 'Torna al bivio e scegli una direzione', nodoDestinazione: 'inizio' },
      { id: 'b', testo: 'Segui la direzione da cui veniva il cervo', nodoDestinazione: 'missione' },
      { id: 'c', testo: 'Testa la tua forza sugli alberi intorno', nodoDestinazione: 'test_forza' },
      { id: 'd', testo: 'Cerca altri animali magici nella foresta', nodoDestinazione: 'foresta_profonda' },
    ],
  },
  via_necessaria: {
    id: 'via_necessaria',
    titolo: 'La Via Necessaria',
    testo: 'Erevan ti conduce attraverso la nebbia per sentieri invisibili finché non arrivi davanti a una porta di pietra incastrata tra due querce millenarie. "Dietro questa porta c\'è la causa di tutto" dice il vecchio. "Non posso accompagnarti oltre. Ma ti lascio questo." Ti porge una pietra che emette calore come un piccolo sole.',
    scelte: [
      { id: 'a', testo: 'Apri la porta e entri', nodoDestinazione: 'porta_pietra' },
      { id: 'b', testo: 'Chiedi ancora spiegazioni a Erevan', nodoDestinazione: 'vecchio_saggio' },
      { id: 'c', testo: 'Esamini la porta cercando trappole', nodoDestinazione: 'esame_porta' },
      { id: 'd', testo: 'Rinunci e torni nel bosco', nodoDestinazione: 'inizio' },
    ],
  },
}

export function getNodo(id: string): Nodo {
  return nodi[id] ?? nodi[NODO_INIZIALE]
}
