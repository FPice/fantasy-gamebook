import type { NodoStoria } from "@/types/game";

export const STORY_NODES: NodoStoria[] = [
  {
    id: "start",
    testo_it:
      "Ti risvegli in un corridoio buio. L'aria è fredda e umida. Davanti a te si aprono due strade: a sinistra senti il crepitio di un fuoco lontano, a destra il gocciolio dell'acqua.",
    testo_en:
      "You wake up in a dark corridor. The air is cold and damp. Two paths open before you: to the left you hear the crackling of a distant fire, to the right the dripping of water.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "s1-left",
        nodo_id: "start",
        testo_it: "Vai a sinistra verso il fuoco",
        testo_en: "Go left toward the fire",
        nodo_successivo_id: "cave-fire",
        ordine: 1,
      },
      {
        id: "s1-right",
        nodo_id: "start",
        testo_it: "Vai a destra verso l'acqua",
        testo_en: "Go right toward the water",
        nodo_successivo_id: "cave-water",
        ordine: 2,
      },
    ],
  },
  {
    id: "cave-fire",
    testo_it:
      "Arrivi in una piccola grotta illuminata da torce. Al centro siede un vecchio goblin che ti guarda con occhi furbi. «Vuoi passare? Hai dell'oro?» gracchia.",
    testo_en:
      "You arrive in a small cave lit by torches. In the center sits an old goblin eyeing you with cunning. 'Want to pass? Have any gold?' it croaks.",
    tipo: "storia",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "s2-fight",
        nodo_id: "cave-fire",
        testo_it: "Attacca il goblin",
        testo_en: "Attack the goblin",
        nodo_successivo_id: "goblin-fight",
        ordine: 1,
      },
      {
        id: "s2-pay",
        nodo_id: "cave-fire",
        testo_it: "Paga 5 monete d'oro",
        testo_en: "Pay 5 gold coins",
        nodo_successivo_id: "beyond-goblin",
        ordine: 2,
      },
      {
        id: "s2-back",
        nodo_id: "cave-fire",
        testo_it: "Torna indietro",
        testo_en: "Turn back",
        nodo_successivo_id: "start",
        ordine: 3,
      },
    ],
  },
  {
    id: "cave-water",
    testo_it:
      "Il sentiero scende verso un ruscello sotterraneo. Sulla riva opposta brilla qualcosa. Puoi tentare di attraversare le acque agitate o cercare un altro percorso.",
    testo_en:
      "The path descends toward an underground stream. Something glitters on the far bank. You can try to cross the turbulent waters or find another route.",
    tipo: "tesoro",
    probabilità_loot: "raro_leggendario",
    scelte: [
      {
        id: "s3-cross",
        nodo_id: "cave-water",
        testo_it: "Attraversa il ruscello",
        testo_en: "Cross the stream",
        nodo_successivo_id: "treasure-room",
        ordine: 1,
      },
      {
        id: "s3-back",
        nodo_id: "cave-water",
        testo_it: "Torna al corridoio",
        testo_en: "Return to the corridor",
        nodo_successivo_id: "start",
        ordine: 2,
      },
    ],
  },
  {
    id: "goblin-fight",
    testo_it:
      "Il goblin strilla e impugna un coltello arrugginito! Dopo una breve lotta lo sconfiggi. Fruga tra le sue cose e trovi qualche moneta.",
    testo_en:
      "The goblin shrieks and grabs a rusty knife! After a brief struggle you defeat it. You rummage through its belongings and find some coins.",
    tipo: "combattimento",
    probabilità_loot: "comune_non_comune",
    scelte: [
      {
        id: "s4-continue",
        nodo_id: "goblin-fight",
        testo_it: "Continua oltre",
        testo_en: "Continue forward",
        nodo_successivo_id: "beyond-goblin",
        ordine: 1,
      },
    ],
  },
  {
    id: "beyond-goblin",
    testo_it:
      "Oltre il posto del goblin il corridoio si allarga in una grande sala. Al centro svetta un altare di pietra nera su cui riposa una spada splendente.",
    testo_en:
      "Beyond the goblin's post the corridor widens into a great hall. At its center stands a black stone altar bearing a gleaming sword.",
    tipo: "storia",
    probabilità_loot: "niente",
    scelte: [
      {
        id: "s5-take",
        nodo_id: "beyond-goblin",
        testo_it: "Prendi la spada",
        testo_en: "Take the sword",
        nodo_successivo_id: "victory",
        ordine: 1,
      },
      {
        id: "s5-leave",
        nodo_id: "beyond-goblin",
        testo_it: "Lascia la spada sull'altare",
        testo_en: "Leave the sword on the altar",
        nodo_successivo_id: "start",
        ordine: 2,
      },
    ],
  },
  {
    id: "treasure-room",
    testo_it:
      "Raggiungi la riva opposta bagnato fradicio. Davanti a te un forziere aperto trabocca di gemme e monete d'oro. Hai trovato il tesoro dell'Abisso!",
    testo_en:
      "You reach the far bank soaking wet. Before you an open chest overflows with gems and gold coins. You have found the treasure of the Abyss!",
    tipo: "vittoria",
    probabilità_loot: "raro_leggendario",
    scelte: [],
  },
  {
    id: "victory",
    testo_it:
      "Non appena le tue dita sfiorano l'elsa, la spada si illumina di luce dorata. Una voce risuona nella sala: «Hai dimostrato il tuo valore. L'Abisso è tuo!». Ce l'hai fatta.",
    testo_en:
      "The moment your fingers touch the hilt, the sword blazes with golden light. A voice echoes through the hall: 'You have proven your worth. The Abyss is yours!' You have succeeded.",
    tipo: "vittoria",
    probabilità_loot: "niente",
    scelte: [],
  },
];

export const STORY_START_ID = "start";

export function getNode(id: string): NodoStoria | undefined {
  return STORY_NODES.find((n) => n.id === id);
}
