import type { NodoStoria } from "@/types/game";

export const NODI_STORIA: Record<string, NodoStoria> = {
  inizio: {
    id: "inizio",
    testo_it:
      "Ti risvegli in una foresta oscura. Il silenzio è rotto solo dal crepitio di foglie secche sotto i tuoi piedi. Davanti a te si aprono tre sentieri.",
    testo_en:
      "You wake up in a dark forest. The silence is broken only by the crackle of dry leaves under your feet. Three paths open before you.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "s1",
        nodo_id: "inizio",
        testo_it: "Prendi il sentiero di sinistra verso il fiume",
        testo_en: "Take the left path toward the river",
        nodo_successivo_id: "fiume",
        ordine: 1,
      },
      {
        id: "s2",
        nodo_id: "inizio",
        testo_it: "Imbocca il sentiero centrale verso la torre",
        testo_en: "Take the central path toward the tower",
        nodo_successivo_id: "torre",
        ordine: 2,
      },
      {
        id: "s3",
        nodo_id: "inizio",
        testo_it: "Scegli il sentiero di destra verso le rovine",
        testo_en: "Take the right path toward the ruins",
        nodo_successivo_id: "rovine",
        ordine: 3,
      },
      {
        id: "s4",
        nodo_id: "inizio",
        testo_it: "Resta fermo e aspetta che qualcuno arrivi",
        testo_en: "Stay still and wait for someone to arrive",
        nodo_successivo_id: "attesa",
        ordine: 4,
      },
    ],
  },

  fiume: {
    id: "fiume",
    testo_it:
      "Arrivi sulle rive di un fiume impetuoso. Un vecchio ponte di legno cigola nella corrente. Sulla riva opposta intravedi un bagliore dorato.",
    testo_en:
      "You arrive at the banks of a rushing river. An old wooden bridge creaks in the current. On the opposite bank you glimpse a golden glow.",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "f1",
        nodo_id: "fiume",
        testo_it: "Attraversa il ponte traballante",
        testo_en: "Cross the rickety bridge",
        nodo_successivo_id: "tesoro_fiume",
        ordine: 1,
      },
      {
        id: "f2",
        nodo_id: "fiume",
        testo_it: "Cerca un guado più a monte",
        testo_en: "Look for a ford further upstream",
        nodo_successivo_id: "guado",
        ordine: 2,
      },
      {
        id: "f3",
        nodo_id: "fiume",
        testo_it: "Torna alla foresta",
        testo_en: "Return to the forest",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "f4",
        nodo_id: "fiume",
        testo_it: "Nuota attraverso il fiume",
        testo_en: "Swim across the river",
        nodo_successivo_id: "annegamento",
        ordine: 4,
      },
    ],
  },

  torre: {
    id: "torre",
    testo_it:
      "Una torre di pietra grigia si erge davanti a te. La porta è sbarrata con catene arrugginite. Una finestra al secondo piano è illuminata.",
    testo_en:
      "A grey stone tower looms before you. The door is barred with rusty chains. A window on the second floor is lit.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "t1",
        nodo_id: "torre",
        testo_it: "Sfonda la porta con la forza",
        testo_en: "Break down the door by force",
        nodo_successivo_id: "scontro_guardia",
        ordine: 1,
      },
      {
        id: "t2",
        nodo_id: "torre",
        testo_it: "Cerca un passaggio segreto",
        testo_en: "Look for a secret passage",
        nodo_successivo_id: "passaggio_segreto",
        ordine: 2,
      },
      {
        id: "t3",
        nodo_id: "torre",
        testo_it: "Chiama chi è alla finestra",
        testo_en: "Call out to whoever is at the window",
        nodo_successivo_id: "mago",
        ordine: 3,
      },
      {
        id: "t4",
        nodo_id: "torre",
        testo_it: "Torna al bivio",
        testo_en: "Return to the crossroads",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  rovine: {
    id: "rovine",
    testo_it:
      "Le rovine di un antico castello si estendono davanti a te. Tra le pietre cadute noti tracce fresche di sangue. Qualcosa si muove nell'ombra.",
    testo_en:
      "The ruins of an ancient castle spread before you. Among the fallen stones you notice fresh blood trails. Something moves in the shadow.",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "r1",
        nodo_id: "rovine",
        testo_it: "Avanzare verso l'ombra con cautela",
        testo_en: "Advance toward the shadow carefully",
        nodo_successivo_id: "mostro_rovine",
        ordine: 1,
      },
      {
        id: "r2",
        nodo_id: "rovine",
        testo_it: "Fare rumore per spaventare la creatura",
        testo_en: "Make noise to scare the creature",
        nodo_successivo_id: "fuga_mostro",
        ordine: 2,
      },
      {
        id: "r3",
        nodo_id: "rovine",
        testo_it: "Cercare una via d'uscita tra le rovine",
        testo_en: "Search for a way out through the ruins",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 3,
      },
      {
        id: "r4",
        nodo_id: "rovine",
        testo_it: "Tornare indietro di corsa",
        testo_en: "Run back quickly",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  attesa: {
    id: "attesa",
    testo_it:
      "Mentre aspetti immobile, senti passi avvicinarsi. Un viandante coperto di un mantello grigio appare tra gli alberi. Ti fissa con occhi profondi.",
    testo_en:
      "As you wait motionless, you hear footsteps approaching. A traveler covered in a grey cloak appears among the trees. They fix you with deep eyes.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "a1",
        nodo_id: "attesa",
        testo_it: "Chiedere aiuto al viandante",
        testo_en: "Ask the traveler for help",
        nodo_successivo_id: "viandante_amico",
        ordine: 1,
      },
      {
        id: "a2",
        nodo_id: "attesa",
        testo_it: "Attaccare il viandante per precauzione",
        testo_en: "Attack the traveler as a precaution",
        nodo_successivo_id: "scontro_viandante",
        ordine: 2,
      },
      {
        id: "a3",
        nodo_id: "attesa",
        testo_it: "Nascondersi dietro un albero",
        testo_en: "Hide behind a tree",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "a4",
        nodo_id: "attesa",
        testo_it: "Seguire il viandante in silenzio",
        testo_en: "Follow the traveler silently",
        nodo_successivo_id: "villaggio",
        ordine: 4,
      },
    ],
  },

  tesoro_fiume: {
    id: "tesoro_fiume",
    testo_it:
      "Attraversi il ponte traballante e raggiungi la riva opposta. Il bagliore proviene da uno scrigno semisommerso nel fango. Lo apri e trovi monete d'oro e una pozione.",
    testo_en:
      "You cross the rickety bridge and reach the opposite bank. The glow comes from a chest half-buried in the mud. You open it and find gold coins and a potion.",
    tipo: "tesoro",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "tf1",
        nodo_id: "tesoro_fiume",
        testo_it: "Prendere tutto e proseguire lungo il fiume",
        testo_en: "Take everything and continue along the river",
        nodo_successivo_id: "valle",
        ordine: 1,
      },
      {
        id: "tf2",
        nodo_id: "tesoro_fiume",
        testo_it: "Prendere solo la pozione",
        testo_en: "Take only the potion",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "tf3",
        nodo_id: "tesoro_fiume",
        testo_it: "Lasciare lo scrigno e tornare",
        testo_en: "Leave the chest and go back",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "tf4",
        nodo_id: "tesoro_fiume",
        testo_it: "Esaminare i dintorni per trappole",
        testo_en: "Examine the surroundings for traps",
        nodo_successivo_id: "trappola",
        ordine: 4,
      },
    ],
  },

  guado: {
    id: "guado",
    testo_it:
      "Risalendo il fiume trovi un punto poco profondo. L'acqua ti arriva alle ginocchia. Mentre attraversi, il piede scivola su una pietra e cadi.",
    testo_en:
      "Going up the river you find a shallow spot. The water reaches your knees. As you cross, your foot slips on a stone and you fall.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "g1",
        nodo_id: "guado",
        testo_it: "Rialzarsi e proseguire bagnato",
        testo_en: "Get up and continue soaking wet",
        nodo_successivo_id: "valle",
        ordine: 1,
      },
      {
        id: "g2",
        nodo_id: "guado",
        testo_it: "Asciugarsi e riposare sulla riva",
        testo_en: "Dry off and rest on the bank",
        nodo_successivo_id: "riposo",
        ordine: 2,
      },
      {
        id: "g3",
        nodo_id: "guado",
        testo_it: "Tornare indietro sconfitto",
        testo_en: "Turn back defeated",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "g4",
        nodo_id: "guado",
        testo_it: "Cercare se hai perso qualcosa nell'acqua",
        testo_en: "Check if you lost anything in the water",
        nodo_successivo_id: "oggetto_perso",
        ordine: 4,
      },
    ],
  },

  scontro_guardia: {
    id: "scontro_guardia",
    testo_it:
      "La porta cede con un boato. Dall'interno balza fuori una guardia scheletrica avvolta in armatura arrugginita. Le sue orbite vuote brillano di luce rossa.",
    testo_en:
      "The door gives way with a crash. From inside leaps a skeletal guard clad in rusted armor. Its empty eye sockets glow with red light.",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "sg1",
        nodo_id: "scontro_guardia",
        testo_it: "Combattere la guardia a testa alta",
        testo_en: "Fight the guard head-on",
        nodo_successivo_id: "vittoria_guardia",
        ordine: 1,
      },
      {
        id: "sg2",
        nodo_id: "scontro_guardia",
        testo_it: "Tentare di scappare dentro la torre",
        testo_en: "Try to escape inside the tower",
        nodo_successivo_id: "interno_torre",
        ordine: 2,
      },
      {
        id: "sg3",
        nodo_id: "scontro_guardia",
        testo_it: "Usare l'ambiente a tuo vantaggio",
        testo_en: "Use the environment to your advantage",
        nodo_successivo_id: "vittoria_guardia",
        ordine: 3,
      },
      {
        id: "sg4",
        nodo_id: "scontro_guardia",
        testo_it: "Fuggire dalla torre",
        testo_en: "Flee from the tower",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  passaggio_segreto: {
    id: "passaggio_segreto",
    testo_it:
      "Dopo un'attenta ispezione trovi una pietra smossa alla base della torre. Spostandola riveli un cunicolo buio che porta all'interno.",
    testo_en:
      "After careful inspection you find a loose stone at the base of the tower. Moving it reveals a dark tunnel leading inside.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "ps1",
        nodo_id: "passaggio_segreto",
        testo_it: "Strisciare nel cunicolo",
        testo_en: "Crawl through the tunnel",
        nodo_successivo_id: "interno_torre",
        ordine: 1,
      },
      {
        id: "ps2",
        nodo_id: "passaggio_segreto",
        testo_it: "Guardare dentro con cautela prima di entrare",
        testo_en: "Look inside carefully before entering",
        nodo_successivo_id: "interno_torre",
        ordine: 2,
      },
      {
        id: "ps3",
        nodo_id: "passaggio_segreto",
        testo_it: "Segnare il passaggio e andare alla porta",
        testo_en: "Mark the passage and go to the door",
        nodo_successivo_id: "scontro_guardia",
        ordine: 3,
      },
      {
        id: "ps4",
        nodo_id: "passaggio_segreto",
        testo_it: "Rinunciare e tornare al bivio",
        testo_en: "Give up and return to the crossroads",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  mago: {
    id: "mago",
    testo_it:
      "Una vecchia maga dalla lunga veste viola si affaccia alla finestra. \"Cercavi rifugio o avventura, viaggiatore?\" chiede con voce rauca ma gentile.",
    testo_en:
      "An old sorceress in a long purple robe leans out the window. 'Are you seeking shelter or adventure, traveler?' she asks in a hoarse but kind voice.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "m1",
        nodo_id: "mago",
        testo_it: "Chiedere rifugio per la notte",
        testo_en: "Ask for shelter for the night",
        nodo_successivo_id: "riposo",
        ordine: 1,
      },
      {
        id: "m2",
        nodo_id: "mago",
        testo_it: "Chiedere informazioni sui pericoli della zona",
        testo_en: "Ask for information about local dangers",
        nodo_successivo_id: "consiglio_maga",
        ordine: 2,
      },
      {
        id: "m3",
        nodo_id: "mago",
        testo_it: "Chiedere se ha oggetti magici da vendere",
        testo_en: "Ask if she has magical items to sell",
        nodo_successivo_id: "negozio_maga",
        ordine: 3,
      },
      {
        id: "m4",
        nodo_id: "mago",
        testo_it: "Ignorarla e cercare un altro modo",
        testo_en: "Ignore her and look for another way",
        nodo_successivo_id: "passaggio_segreto",
        ordine: 4,
      },
    ],
  },

  mostro_rovine: {
    id: "mostro_rovine",
    testo_it:
      "Dall'ombra emerge un goblin deforme con occhi gialli. Brandisce una lama arrugginita e ti attacca con un grido stridulo.",
    testo_en:
      "From the shadow emerges a deformed goblin with yellow eyes. It wields a rusted blade and attacks you with a shrill cry.",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "mr1",
        nodo_id: "mostro_rovine",
        testo_it: "Sconfiggere il goblin",
        testo_en: "Defeat the goblin",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 1,
      },
      {
        id: "mr2",
        nodo_id: "mostro_rovine",
        testo_it: "Disarmare il goblin",
        testo_en: "Disarm the goblin",
        nodo_successivo_id: "goblin_prigioniero",
        ordine: 2,
      },
      {
        id: "mr3",
        nodo_id: "mostro_rovine",
        testo_it: "Fuggire tra le rovine",
        testo_en: "Flee through the ruins",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "mr4",
        nodo_id: "mostro_rovine",
        testo_it: "Cercare di comunicare con il goblin",
        testo_en: "Try to communicate with the goblin",
        nodo_successivo_id: "goblin_alleato",
        ordine: 4,
      },
    ],
  },

  fuga_mostro: {
    id: "fuga_mostro",
    testo_it:
      "I tuoi urli echeggiano tra le pietre. Senti una creatura fuggire nell'oscurità. Le rovine ora sembrano sicure. Esplori il luogo.",
    testo_en:
      "Your shouts echo among the stones. You hear a creature flee into the darkness. The ruins now seem safe. You explore the place.",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "fm1",
        nodo_id: "fuga_mostro",
        testo_it: "Cercare oggetti preziosi tra le rovine",
        testo_en: "Search for valuables among the ruins",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 1,
      },
      {
        id: "fm2",
        nodo_id: "fuga_mostro",
        testo_it: "Seguire la creatura fuggita",
        testo_en: "Follow the fleeing creature",
        nodo_successivo_id: "tana_mostro",
        ordine: 2,
      },
      {
        id: "fm3",
        nodo_id: "fuga_mostro",
        testo_it: "Tornare al bivio",
        testo_en: "Return to the crossroads",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "fm4",
        nodo_id: "fuga_mostro",
        testo_it: "Accamparsi nelle rovine per la notte",
        testo_en: "Camp in the ruins for the night",
        nodo_successivo_id: "riposo",
        ordine: 4,
      },
    ],
  },

  tesoro_rovine: {
    id: "tesoro_rovine",
    testo_it:
      "Tra le pietre crollate trovi una piccola cripta nascosta. All'interno giace uno scheletro con accanto uno scrigno di metallo ornato.",
    testo_en:
      "Among the fallen stones you find a small hidden crypt. Inside lies a skeleton with an ornate metal chest beside it.",
    tipo: "tesoro",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "tr1",
        nodo_id: "tesoro_rovine",
        testo_it: "Aprire lo scrigno",
        testo_en: "Open the chest",
        nodo_successivo_id: "vittoria",
        ordine: 1,
      },
      {
        id: "tr2",
        nodo_id: "tesoro_rovine",
        testo_it: "Lasciare lo scrigno per rispetto dei morti",
        testo_en: "Leave the chest out of respect for the dead",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "tr3",
        nodo_id: "tesoro_rovine",
        testo_it: "Esaminare lo scheletro prima",
        testo_en: "Examine the skeleton first",
        nodo_successivo_id: "scheletro_maledetto",
        ordine: 3,
      },
      {
        id: "tr4",
        nodo_id: "tesoro_rovine",
        testo_it: "Segnare il posto e tornare dopo",
        testo_en: "Mark the spot and come back later",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  viandante_amico: {
    id: "viandante_amico",
    testo_it:
      "Il viandante abbassa il cappuccio rivelando un volto gentile. \"Sono Elara, una guaritrice. Posso aiutarti a trovare la strada. Il villaggio di Pietraforte è a est.\"",
    testo_en:
      "The traveler lowers their hood revealing a kind face. 'I am Elara, a healer. I can help you find the way. The village of Stonekeep is to the east.'",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "va1",
        nodo_id: "viandante_amico",
        testo_it: "Seguire Elara al villaggio",
        testo_en: "Follow Elara to the village",
        nodo_successivo_id: "villaggio",
        ordine: 1,
      },
      {
        id: "va2",
        nodo_id: "viandante_amico",
        testo_it: "Chiedere cure mediche",
        testo_en: "Ask for medical treatment",
        nodo_successivo_id: "riposo",
        ordine: 2,
      },
      {
        id: "va3",
        nodo_id: "viandante_amico",
        testo_it: "Chiedere notizie dei pericoli della foresta",
        testo_en: "Ask about the dangers of the forest",
        nodo_successivo_id: "consiglio_maga",
        ordine: 3,
      },
      {
        id: "va4",
        nodo_id: "viandante_amico",
        testo_it: "Ringraziarla e proseguire da solo",
        testo_en: "Thank her and continue alone",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  scontro_viandante: {
    id: "scontro_viandante",
    testo_it:
      "Il viandante para il tuo attacco con sorprendente agilità. \"Stolto! Volevo aiutarti!\" grida, e ora la sua gentilezza si è trasformata in rabbia.",
    testo_en:
      "The traveler parries your attack with surprising agility. 'Fool! I wanted to help you!' they shout, and now their kindness has turned to anger.",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "sv1",
        nodo_id: "scontro_viandante",
        testo_it: "Continuare a combattere",
        testo_en: "Continue fighting",
        nodo_successivo_id: "vittoria_viandante",
        ordine: 1,
      },
      {
        id: "sv2",
        nodo_id: "scontro_viandante",
        testo_it: "Abbassare le armi e scusarsi",
        testo_en: "Lower your weapons and apologize",
        nodo_successivo_id: "viandante_amico",
        ordine: 2,
      },
      {
        id: "sv3",
        nodo_id: "scontro_viandante",
        testo_it: "Fuggire nel bosco",
        testo_en: "Flee into the woods",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "sv4",
        nodo_id: "scontro_viandante",
        testo_it: "Tentare di disarmarla",
        testo_en: "Try to disarm her",
        nodo_successivo_id: "viandante_amico",
        ordine: 4,
      },
    ],
  },

  villaggio: {
    id: "villaggio",
    testo_it:
      "Arrivi al villaggio di Pietraforte. Le luci delle case rischiarano la sera. Un'osteria in fondo alla via principale emette profumi di cibo caldo.",
    testo_en:
      "You arrive at the village of Stonekeep. The lights of the houses brighten the evening. An inn at the end of the main street emits the smell of warm food.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "vi1",
        nodo_id: "villaggio",
        testo_it: "Entrare nell'osteria",
        testo_en: "Enter the inn",
        nodo_successivo_id: "riposo",
        ordine: 1,
      },
      {
        id: "vi2",
        nodo_id: "villaggio",
        testo_it: "Cercare il fabbro per equipaggiarsi",
        testo_en: "Find the blacksmith to gear up",
        nodo_successivo_id: "negozio_maga",
        ordine: 2,
      },
      {
        id: "vi3",
        nodo_id: "villaggio",
        testo_it: "Parlare con gli abitanti per notizie",
        testo_en: "Talk to the inhabitants for news",
        nodo_successivo_id: "consiglio_maga",
        ordine: 3,
      },
      {
        id: "vi4",
        nodo_id: "villaggio",
        testo_it: "Proseguire verso il castello maledetto",
        testo_en: "Continue toward the cursed castle",
        nodo_successivo_id: "castello",
        ordine: 4,
      },
    ],
  },

  riposo: {
    id: "riposo",
    testo_it:
      "Ti fermi a riposare. Le fatiche si allontanano mentre recuperi le forze. Ti senti più pronto ad affrontare le sfide dell'Abisso.",
    testo_en:
      "You stop to rest. The fatigue fades as you recover your strength. You feel more ready to face the challenges of the Abyss.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "ri1",
        nodo_id: "riposo",
        testo_it: "Riprendere il cammino verso il castello",
        testo_en: "Resume the journey toward the castle",
        nodo_successivo_id: "castello",
        ordine: 1,
      },
      {
        id: "ri2",
        nodo_id: "riposo",
        testo_it: "Esplorare la zona nei dintorni",
        testo_en: "Explore the surrounding area",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "ri3",
        nodo_id: "riposo",
        testo_it: "Tornare al villaggio",
        testo_en: "Return to the village",
        nodo_successivo_id: "villaggio",
        ordine: 3,
      },
      {
        id: "ri4",
        nodo_id: "riposo",
        testo_it: "Prepararsi allo scontro finale",
        testo_en: "Prepare for the final confrontation",
        nodo_successivo_id: "castello",
        ordine: 4,
      },
    ],
  },

  consiglio_maga: {
    id: "consiglio_maga",
    testo_it:
      "\"Il castello del Re Oscuro si trova a nord,\" ti viene spiegato. \"Nessuno è tornato, ma si dice che chi sconfigge il re diventi il nuovo signore dell'Abisso.\"",
    testo_en:
      "\"The Dark King's castle lies to the north,\" you are told. \"No one has returned, but they say whoever defeats the king becomes the new lord of the Abyss.\"",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "cm1",
        nodo_id: "consiglio_maga",
        testo_it: "Dirigersi subito al castello",
        testo_en: "Head to the castle immediately",
        nodo_successivo_id: "castello",
        ordine: 1,
      },
      {
        id: "cm2",
        nodo_id: "consiglio_maga",
        testo_it: "Prepararsi prima con equipaggiamento migliore",
        testo_en: "Prepare first with better equipment",
        nodo_successivo_id: "negozio_maga",
        ordine: 2,
      },
      {
        id: "cm3",
        nodo_id: "consiglio_maga",
        testo_it: "Riposarsi e poi partire",
        testo_en: "Rest and then leave",
        nodo_successivo_id: "riposo",
        ordine: 3,
      },
      {
        id: "cm4",
        nodo_id: "consiglio_maga",
        testo_it: "Ignorare il consiglio e tornare alla foresta",
        testo_en: "Ignore the advice and return to the forest",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  negozio_maga: {
    id: "negozio_maga",
    testo_it:
      "Trovi uno spacciatore di oggetti magici. \"Ho pozioni, armi e armature. Tutto ha un prezzo,\" dice con un sorriso furbo.",
    testo_en:
      "You find a dealer of magical items. 'I have potions, weapons and armor. Everything has a price,' he says with a cunning smile.",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "nm1",
        nodo_id: "negozio_maga",
        testo_it: "Acquistare un'arma potenziata",
        testo_en: "Buy an enhanced weapon",
        nodo_successivo_id: "castello",
        ordine: 1,
      },
      {
        id: "nm2",
        nodo_id: "negozio_maga",
        testo_it: "Acquistare pozioni curative",
        testo_en: "Buy healing potions",
        nodo_successivo_id: "riposo",
        ordine: 2,
      },
      {
        id: "nm3",
        nodo_id: "negozio_maga",
        testo_it: "Rubare e scappare",
        testo_en: "Steal and run",
        nodo_successivo_id: "scontro_guardia",
        ordine: 3,
      },
      {
        id: "nm4",
        nodo_id: "negozio_maga",
        testo_it: "Andarsene senza comprare niente",
        testo_en: "Leave without buying anything",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  castello: {
    id: "castello",
    testo_it:
      "Le mura del castello del Re Oscuro si innalzano davanti a te. L'aria è carica di energia oscura. Il portone è aperto come se ti stesse aspettando.",
    testo_en:
      "The walls of the Dark King's castle rise before you. The air is charged with dark energy. The gate is open as if it were waiting for you.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "ca1",
        nodo_id: "castello",
        testo_it: "Entrare dal portone principale",
        testo_en: "Enter through the main gate",
        nodo_successivo_id: "trono",
        ordine: 1,
      },
      {
        id: "ca2",
        nodo_id: "castello",
        testo_it: "Cercare un ingresso laterale",
        testo_en: "Look for a side entrance",
        nodo_successivo_id: "interno_torre",
        ordine: 2,
      },
      {
        id: "ca3",
        nodo_id: "castello",
        testo_it: "Spiare prima attraverso le feritoie",
        testo_en: "Spy first through the arrow slits",
        nodo_successivo_id: "trono",
        ordine: 3,
      },
      {
        id: "ca4",
        nodo_id: "castello",
        testo_it: "Tornare indietro, non sei ancora pronto",
        testo_en: "Turn back, you are not ready yet",
        nodo_successivo_id: "riposo",
        ordine: 4,
      },
    ],
  },

  trono: {
    id: "trono",
    testo_it:
      "Nella sala del trono siede il Re Oscuro, un essere di pura tenebra. \"Ti aspettavo,\" sussurra. \"Ora scopriamo chi è degno dell'Abisso.\"",
    testo_en:
      "In the throne room sits the Dark King, a being of pure darkness. 'I was expecting you,' he whispers. 'Now let us see who is worthy of the Abyss.'",
    tipo: "combattimento",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "tr_s1",
        nodo_id: "trono",
        testo_it: "Attaccare il Re Oscuro con tutta la forza",
        testo_en: "Attack the Dark King with all your might",
        nodo_successivo_id: "vittoria",
        ordine: 1,
      },
      {
        id: "tr_s2",
        nodo_id: "trono",
        testo_it: "Tentare di negoziare",
        testo_en: "Try to negotiate",
        nodo_successivo_id: "negoziazione",
        ordine: 2,
      },
      {
        id: "tr_s3",
        nodo_id: "trono",
        testo_it: "Usare un oggetto magico contro di lui",
        testo_en: "Use a magical item against him",
        nodo_successivo_id: "vittoria",
        ordine: 3,
      },
      {
        id: "tr_s4",
        nodo_id: "trono",
        testo_it: "Fuggire prima che sia troppo tardi",
        testo_en: "Flee before it is too late",
        nodo_successivo_id: "morte",
        ordine: 4,
      },
    ],
  },

  interno_torre: {
    id: "interno_torre",
    testo_it:
      "L'interno della torre è pieno di libri antichi e alambicchi fumanti. Sulle pareti sono appese mappe di terre sconosciute.",
    testo_en:
      "The inside of the tower is full of ancient books and smoking alembics. Maps of unknown lands hang on the walls.",
    tipo: "tesoro",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "it1",
        nodo_id: "interno_torre",
        testo_it: "Studiare i libri magici",
        testo_en: "Study the magical books",
        nodo_successivo_id: "consiglio_maga",
        ordine: 1,
      },
      {
        id: "it2",
        nodo_id: "interno_torre",
        testo_it: "Prendere gli alambicchi e gli ingredienti",
        testo_en: "Take the alembics and ingredients",
        nodo_successivo_id: "negozio_maga",
        ordine: 2,
      },
      {
        id: "it3",
        nodo_id: "interno_torre",
        testo_it: "Esaminare le mappe per trovare tesori",
        testo_en: "Examine the maps to find treasures",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 3,
      },
      {
        id: "it4",
        nodo_id: "interno_torre",
        testo_it: "Salire le scale verso la cima",
        testo_en: "Climb the stairs toward the top",
        nodo_successivo_id: "mago",
        ordine: 4,
      },
    ],
  },

  vittoria_guardia: {
    id: "vittoria_guardia",
    testo_it:
      "La guardia scheletrica si disgrega in polvere. Le sue ossa si spargono sul pavimento. Puoi ora entrare liberamente nella torre.",
    testo_en:
      "The skeletal guard crumbles to dust. Its bones scatter on the floor. You can now freely enter the tower.",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "vg1",
        nodo_id: "vittoria_guardia",
        testo_it: "Entrare nella torre",
        testo_en: "Enter the tower",
        nodo_successivo_id: "interno_torre",
        ordine: 1,
      },
      {
        id: "vg2",
        nodo_id: "vittoria_guardia",
        testo_it: "Frugare tra le ossa per trovare oggetti",
        testo_en: "Rummage through the bones for items",
        nodo_successivo_id: "interno_torre",
        ordine: 2,
      },
      {
        id: "vg3",
        nodo_id: "vittoria_guardia",
        testo_it: "Tornare al bivio",
        testo_en: "Return to the crossroads",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "vg4",
        nodo_id: "vittoria_guardia",
        testo_it: "Chiamare la maga alla finestra",
        testo_en: "Call out to the sorceress at the window",
        nodo_successivo_id: "mago",
        ordine: 4,
      },
    ],
  },

  vittoria_viandante: {
    id: "vittoria_viandante",
    testo_it:
      "Sconfiggi il viandante che cade a terra. Rovistando nella sua borsa trovi alcune monete d'oro e una mappa sbiadita.",
    testo_en:
      "You defeat the traveler who falls to the ground. Rummaging through their bag you find some gold coins and a faded map.",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "vv1",
        nodo_id: "vittoria_viandante",
        testo_it: "Prendere tutto e proseguire",
        testo_en: "Take everything and continue",
        nodo_successivo_id: "inizio",
        ordine: 1,
      },
      {
        id: "vv2",
        nodo_id: "vittoria_viandante",
        testo_it: "Curare il viandante sconfitto",
        testo_en: "Heal the defeated traveler",
        nodo_successivo_id: "viandante_amico",
        ordine: 2,
      },
      {
        id: "vv3",
        nodo_id: "vittoria_viandante",
        testo_it: "Prendere la mappa e andare al castello",
        testo_en: "Take the map and go to the castle",
        nodo_successivo_id: "castello",
        ordine: 3,
      },
      {
        id: "vv4",
        nodo_id: "vittoria_viandante",
        testo_it: "Fuggire pentito",
        testo_en: "Flee in remorse",
        nodo_successivo_id: "riposo",
        ordine: 4,
      },
    ],
  },

  goblin_prigioniero: {
    id: "goblin_prigioniero",
    testo_it:
      "Il goblin disarmato si inginocchia tremante. \"Non uccidermi! So dove sono i tesori nascosti!\" supplica in un italiano stentato.",
    testo_en:
      "The disarmed goblin kneels trembling. 'Don't kill me! I know where the hidden treasures are!' it pleads in broken English.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "gp1",
        nodo_id: "goblin_prigioniero",
        testo_it: "Seguire il goblin al tesoro",
        testo_en: "Follow the goblin to the treasure",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 1,
      },
      {
        id: "gp2",
        nodo_id: "goblin_prigioniero",
        testo_it: "Non fidarsi e lasciarlo andare",
        testo_en: "Not trust it and let it go",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "gp3",
        nodo_id: "goblin_prigioniero",
        testo_it: "Portarlo come guida al castello",
        testo_en: "Bring it as a guide to the castle",
        nodo_successivo_id: "castello",
        ordine: 3,
      },
      {
        id: "gp4",
        nodo_id: "goblin_prigioniero",
        testo_it: "Ucciderlo e proseguire",
        testo_en: "Kill it and continue",
        nodo_successivo_id: "rovine",
        ordine: 4,
      },
    ],
  },

  goblin_alleato: {
    id: "goblin_alleato",
    testo_it:
      "Con grande sorpresa, il goblin abbassa la lama. Si chiama Grix e vuole fuggire dal suo clan. Ti offre di guidarti attraverso la foresta in cambio di protezione.",
    testo_en:
      "To your great surprise, the goblin lowers its blade. His name is Grix and he wants to flee his clan. He offers to guide you through the forest in exchange for protection.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "ga1",
        nodo_id: "goblin_alleato",
        testo_it: "Accettare l'alleanza con Grix",
        testo_en: "Accept the alliance with Grix",
        nodo_successivo_id: "villaggio",
        ordine: 1,
      },
      {
        id: "ga2",
        nodo_id: "goblin_alleato",
        testo_it: "Rifiutare e lasciarlo andare",
        testo_en: "Refuse and let him go",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "ga3",
        nodo_id: "goblin_alleato",
        testo_it: "Farsi guidare al castello",
        testo_en: "Have him guide you to the castle",
        nodo_successivo_id: "castello",
        ordine: 3,
      },
      {
        id: "ga4",
        nodo_id: "goblin_alleato",
        testo_it: "Farsi portare al tesoro segreto",
        testo_en: "Have him take you to the secret treasure",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 4,
      },
    ],
  },

  tana_mostro: {
    id: "tana_mostro",
    testo_it:
      "Segui la creatura fino a una grotta nascosta. All'interno trovi una piccola collezione di oggetti rubati nei decenni. La creatura ti guarda curiosa.",
    testo_en:
      "You follow the creature to a hidden cave. Inside you find a small collection of items stolen over the decades. The creature looks at you curiously.",
    tipo: "tesoro",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "tm1",
        nodo_id: "tana_mostro",
        testo_it: "Prendere tutto mentre la creatura dorme",
        testo_en: "Take everything while the creature sleeps",
        nodo_successivo_id: "vittoria",
        ordine: 1,
      },
      {
        id: "tm2",
        nodo_id: "tana_mostro",
        testo_it: "Provare a comunicare con la creatura",
        testo_en: "Try to communicate with the creature",
        nodo_successivo_id: "goblin_alleato",
        ordine: 2,
      },
      {
        id: "tm3",
        nodo_id: "tana_mostro",
        testo_it: "Prendere un solo oggetto e andarsene",
        testo_en: "Take one item and leave",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "tm4",
        nodo_id: "tana_mostro",
        testo_it: "Uscire dalla grotta senza toccare nulla",
        testo_en: "Exit the cave without touching anything",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  negoziazione: {
    id: "negoziazione",
    testo_it:
      "Il Re Oscuro ride freddamente. \"Negoziatevi? Nessuno ha mai osato. Forse meriti di vivere... per ora.\" Ti concede un'ultima opportunità.",
    testo_en:
      "The Dark King laughs coldly. 'Negotiate? No one has ever dared. Perhaps you deserve to live... for now.' He grants you one last opportunity.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "ne1",
        nodo_id: "negoziazione",
        testo_it: "Sfidarlo comunque a duello",
        testo_en: "Challenge him to a duel anyway",
        nodo_successivo_id: "vittoria",
        ordine: 1,
      },
      {
        id: "ne2",
        nodo_id: "negoziazione",
        testo_it: "Accettare di servire il re",
        testo_en: "Accept to serve the king",
        nodo_successivo_id: "morte",
        ordine: 2,
      },
      {
        id: "ne3",
        nodo_id: "negoziazione",
        testo_it: "Sfruttare la distrazione per attaccare",
        testo_en: "Use the distraction to attack",
        nodo_successivo_id: "vittoria",
        ordine: 3,
      },
      {
        id: "ne4",
        nodo_id: "negoziazione",
        testo_it: "Fuggire appena possibile",
        testo_en: "Flee as soon as possible",
        nodo_successivo_id: "castello",
        ordine: 4,
      },
    ],
  },

  valle: {
    id: "valle",
    testo_it:
      "Percorri una bella valle verde. Il cammino è tranquillo e ristorato. In lontananza si vedono le guglie del castello del Re Oscuro.",
    testo_en:
      "You walk through a beautiful green valley. The path is calm and refreshing. In the distance you can see the spires of the Dark King's castle.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "va_s1",
        nodo_id: "valle",
        testo_it: "Procedere verso il castello",
        testo_en: "Proceed toward the castle",
        nodo_successivo_id: "castello",
        ordine: 1,
      },
      {
        id: "va_s2",
        nodo_id: "valle",
        testo_it: "Esplorare la valle per risorse",
        testo_en: "Explore the valley for resources",
        nodo_successivo_id: "tesoro_rovine",
        ordine: 2,
      },
      {
        id: "va_s3",
        nodo_id: "valle",
        testo_it: "Tornare al fiume",
        testo_en: "Return to the river",
        nodo_successivo_id: "fiume",
        ordine: 3,
      },
      {
        id: "va_s4",
        nodo_id: "valle",
        testo_it: "Cercare il villaggio vicino",
        testo_en: "Look for the nearby village",
        nodo_successivo_id: "villaggio",
        ordine: 4,
      },
    ],
  },

  trappola: {
    id: "trappola",
    testo_it:
      "Saggiamente controlli i dintorni e scopri un filo sottile collegato a una trappola esplosiva. La disattivi con cura e poi apri lo scrigno in sicurezza.",
    testo_en:
      "Wisely you check the surroundings and discover a thin wire connected to an explosive trap. You carefully disarm it and then safely open the chest.",
    tipo: "tesoro",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "trap1",
        nodo_id: "trappola",
        testo_it: "Prendere il tesoro e proseguire",
        testo_en: "Take the treasure and continue",
        nodo_successivo_id: "valle",
        ordine: 1,
      },
      {
        id: "trap2",
        nodo_id: "trappola",
        testo_it: "Lasciare il meccanismo della trappola come souvenir",
        testo_en: "Keep the trap mechanism as a souvenir",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "trap3",
        nodo_id: "trappola",
        testo_it: "Riposizionare la trappola per i nemici",
        testo_en: "Reposition the trap for enemies",
        nodo_successivo_id: "scontro_guardia",
        ordine: 3,
      },
      {
        id: "trap4",
        nodo_id: "trappola",
        testo_it: "Tornare al bivio",
        testo_en: "Return to the crossroads",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  annegamento: {
    id: "annegamento",
    testo_it:
      "La corrente è più forte del previsto. Vieni trascinato sottacqua e lotti per sopravvivere. Con uno sforzo titanico raggiungi la riva opposta, esausto.",
    testo_en:
      "The current is stronger than expected. You are dragged underwater and struggle to survive. With a titanic effort you reach the opposite bank, exhausted.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "an1",
        nodo_id: "annegamento",
        testo_it: "Riposare sulla riva prima di proseguire",
        testo_en: "Rest on the bank before continuing",
        nodo_successivo_id: "riposo",
        ordine: 1,
      },
      {
        id: "an2",
        nodo_id: "annegamento",
        testo_it: "Proseguire subito nonostante la stanchezza",
        testo_en: "Continue immediately despite fatigue",
        nodo_successivo_id: "valle",
        ordine: 2,
      },
      {
        id: "an3",
        nodo_id: "annegamento",
        testo_it: "Tornare indietro sul ponte",
        testo_en: "Go back on the bridge",
        nodo_successivo_id: "fiume",
        ordine: 3,
      },
      {
        id: "an4",
        nodo_id: "annegamento",
        testo_it: "Cercare il bagliore dorato",
        testo_en: "Search for the golden glow",
        nodo_successivo_id: "tesoro_fiume",
        ordine: 4,
      },
    ],
  },

  oggetto_perso: {
    id: "oggetto_perso",
    testo_it:
      "Frugando nel fondo del fiume scopri non solo i tuoi oggetti perduti ma anche una piccola borsa di monete che qualcuno ha perso in precedenza.",
    testo_en:
      "Rummaging at the bottom of the river you discover not only your lost items but also a small bag of coins someone lost previously.",
    tipo: "tesoro",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "op1",
        nodo_id: "oggetto_perso",
        testo_it: "Prendere tutto e proseguire",
        testo_en: "Take everything and continue",
        nodo_successivo_id: "valle",
        ordine: 1,
      },
      {
        id: "op2",
        nodo_id: "oggetto_perso",
        testo_it: "Lasciare le monete e tenere solo i propri oggetti",
        testo_en: "Leave the coins and keep only your own items",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "op3",
        nodo_id: "oggetto_perso",
        testo_it: "Cercare altri tesori nel fiume",
        testo_en: "Search for more treasures in the river",
        nodo_successivo_id: "tesoro_fiume",
        ordine: 3,
      },
      {
        id: "op4",
        nodo_id: "oggetto_perso",
        testo_it: "Tornare al guado",
        testo_en: "Return to the ford",
        nodo_successivo_id: "guado",
        ordine: 4,
      },
    ],
  },

  scheletro_maledetto: {
    id: "scheletro_maledetto",
    testo_it:
      "Lo scheletro reca un'armatura con il simbolo di un ordine cavalleresco antico. Sul petto un'iscrizione avverte: \"Chi disturba il riposo del Cavaliere Nero porta la maledizione dell'Abisso.\"",
    testo_en:
      "The skeleton bears armor with the symbol of an ancient knightly order. On the chest an inscription warns: 'He who disturbs the rest of the Black Knight bears the curse of the Abyss.'",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "sm1",
        nodo_id: "scheletro_maledetto",
        testo_it: "Ignorare l'avvertimento e aprire lo scrigno",
        testo_en: "Ignore the warning and open the chest",
        nodo_successivo_id: "vittoria",
        ordine: 1,
      },
      {
        id: "sm2",
        nodo_id: "scheletro_maledetto",
        testo_it: "Rispettare l'avvertimento e andarsene",
        testo_en: "Respect the warning and leave",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "sm3",
        nodo_id: "scheletro_maledetto",
        testo_it: "Cercare un modo per rompere la maledizione",
        testo_en: "Look for a way to break the curse",
        nodo_successivo_id: "mago",
        ordine: 3,
      },
      {
        id: "sm4",
        nodo_id: "scheletro_maledetto",
        testo_it: "Portare lo scrigno alla maga",
        testo_en: "Bring the chest to the sorceress",
        nodo_successivo_id: "mago",
        ordine: 4,
      },
    ],
  },

  vittoria: {
    id: "vittoria",
    testo_it:
      "Ce l'hai fatta! Hai superato le prove dell'Abisso e conquistato la tua leggenda. Il tuo nome sarà ricordato per secoli nelle cronache di questo reame oscuro.",
    testo_en:
      "You made it! You have passed the trials of the Abyss and forged your legend. Your name will be remembered for centuries in the chronicles of this dark realm.",
    tipo: "vittoria",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "vit1",
        nodo_id: "vittoria",
        testo_it: "Inizia una nuova avventura",
        testo_en: "Start a new adventure",
        nodo_successivo_id: "inizio",
        ordine: 1,
      },
      {
        id: "vit2",
        nodo_id: "vittoria",
        testo_it: "Esplora altri percorsi",
        testo_en: "Explore other paths",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "vit3",
        nodo_id: "vittoria",
        testo_it: "Torna all'inizio",
        testo_en: "Return to the beginning",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "vit4",
        nodo_id: "vittoria",
        testo_it: "Ricomincia da capo",
        testo_en: "Start over",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },

  morte: {
    id: "morte",
    testo_it:
      "L'oscurità ti avvolge. La tua storia finisce qui, nelle profondità dell'Abisso. Ma forse un'altra versione di te ha scelto diversamente...",
    testo_en:
      "Darkness envelops you. Your story ends here, in the depths of the Abyss. But perhaps another version of you chose differently...",
    tipo: "morte",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "mo1",
        nodo_id: "morte",
        testo_it: "Ricominciare dall'inizio",
        testo_en: "Start again from the beginning",
        nodo_successivo_id: "inizio",
        ordine: 1,
      },
      {
        id: "mo2",
        nodo_id: "morte",
        testo_it: "Tornare all'inizio",
        testo_en: "Return to the start",
        nodo_successivo_id: "inizio",
        ordine: 2,
      },
      {
        id: "mo3",
        nodo_id: "morte",
        testo_it: "Riprovare",
        testo_en: "Try again",
        nodo_successivo_id: "inizio",
        ordine: 3,
      },
      {
        id: "mo4",
        nodo_id: "morte",
        testo_it: "Nuova partita",
        testo_en: "New game",
        nodo_successivo_id: "inizio",
        ordine: 4,
      },
    ],
  },
};

export const NODO_INIZIALE = "inizio";

export function getNodo(id: string): NodoStoria | undefined {
  return NODI_STORIA[id];
}
