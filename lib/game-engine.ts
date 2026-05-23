import type {
  Personaggio,
  StatBase,
  StatCalcolate,
  BonusStats,
  BonusSetLivello,
  SetLeggendario,
  NomeSet,
  Nemico,
  Oggetto,
  RisultatoCombattimento,
  TurnoCombattimento,
  RisultatoLoot,
  ProbabilitàLoot,
  Rarità,
} from "@/types/game";

// ─── Set Leggendari ───────────────────────────────────────────────────────────

export const LEGENDARY_SETS: Record<NomeSet, SetLeggendario> = {
  corona_alba_eterna: {
    nome_set: "corona_alba_eterna",
    nome: "Corona dell'Alba Eterna",
    bonus_2_pezzi: {
      stats: { attacco: 15, difesa: 10 },
      descrizione: "+15 attacco, +10 difesa: la luce avvolge il guerriero",
    },
    bonus_3_pezzi: {
      stats: { punti_vita_max: 30 },
      descrizione: "+30 vita massima, rigenerazione 5 HP per turno",
      effetto_speciale: {
        nome: "Rigenerazione Solare",
        chiave: "rigenerazione_solare",
        tipo: "passivo",
        descrizione: "Rigenera 5 HP alla fine di ogni turno",
        valore: 5,
      },
    },
    bonus_4_pezzi: {
      stats: {},
      descrizione: "Torna a 1 HP invece di morire, una volta per battaglia",
      effetto_speciale: {
        nome: "Resurrezione dell'Alba",
        chiave: "resurrezione_alba",
        tipo: "trigger",
        descrizione: "Annulla la morte una volta per scontro",
        valore: 1,
      },
    },
  },

  velo_ombre_eterne: {
    nome_set: "velo_ombre_eterne",
    nome: "Velo delle Ombre Eterne",
    bonus_2_pezzi: {
      stats: { attacco: 20 },
      descrizione: "+20 attacco, probabilità critico +15%",
      effetto_speciale: {
        nome: "Critico Amplificato",
        chiave: "critico_amplificato",
        tipo: "passivo",
        descrizione: "Aumenta la probabilità di colpo critico del 15%",
        valore: 15,
      },
    },
    bonus_3_pezzi: {
      stats: {},
      descrizione: "Schivata automatica ogni 3 turni",
      effetto_speciale: {
        nome: "Passo d'Ombra",
        chiave: "passo_ombra",
        tipo: "trigger",
        descrizione: "Schiva automaticamente un attacco ogni 3 turni",
        valore: 3,
      },
    },
    bonus_4_pezzi: {
      stats: {},
      descrizione: "Ruba il 10% dei danni inflitti come HP",
      effetto_speciale: {
        nome: "Furto d'Anima",
        chiave: "furto_anima",
        tipo: "passivo",
        descrizione: "Recupera il 10% di ogni danno inflitto come punti vita",
        valore: 10,
      },
    },
  },

  patto_drago_primordiale: {
    nome_set: "patto_drago_primordiale",
    nome: "Patto del Drago Primordiale",
    bonus_2_pezzi: {
      stats: { difesa: 25 },
      descrizione: "+25 difesa, resistenza al fuoco 50%",
      effetto_speciale: {
        nome: "Resistenza al Fuoco",
        chiave: "resistenza_fuoco",
        tipo: "passivo",
        descrizione: "Riduce i danni da fuoco del 50%",
        valore: 50,
      },
    },
    bonus_3_pezzi: {
      stats: {},
      descrizione: "30% di probabilità di soffio di drago ogni turno",
      effetto_speciale: {
        nome: "Soffio di Drago",
        chiave: "soffio_drago",
        tipo: "trigger",
        descrizione: "30% di probabilità di danno bonus pari al 50% dell'attacco",
        valore: 30,
      },
    },
    bonus_4_pezzi: {
      stats: {},
      descrizione: "Ogni 5 turni attacco triplicato",
      effetto_speciale: {
        nome: "Furia Draconica",
        chiave: "furia_draconica",
        tipo: "trigger",
        descrizione: "Ogni 5 turni l'attacco viene triplicato per quel turno",
        valore: 5,
      },
    },
  },
};

// ─── Costanti ─────────────────────────────────────────────────────────────────

const PROBABILITÀ_CRITICO_GIOCATORE = 0.10;
const PROBABILITÀ_CRITICO_NEMICO = 0.05;
const MOLTIPLICATORE_CRITICO = 1.5;
const VARIANZA_DANNO = 0.20;
const MAX_TURNI_COMBATTIMENTO = 100;

// ─── Utility ──────────────────────────────────────────────────────────────────

function randomFloat(): number {
  return Math.random();
}

function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcolaDanno(attacco: number, difesa: number, critico: boolean): number {
  const base = Math.max(1, attacco - difesa);
  const varianza = 1 + (randomFloat() * 2 - 1) * VARIANZA_DANNO;
  const danno = Math.round(base * varianza);
  return Math.max(1, critico ? Math.round(danno * MOLTIPLICATORE_CRITICO) : danno);
}

function applicaBonusStats(stats: StatBase, bonus: BonusStats): void {
  stats.attacco += bonus.attacco ?? 0;
  stats.difesa += bonus.difesa ?? 0;
  stats.punti_vita_max += bonus.punti_vita_max ?? 0;
}

// ─── calcolaStatPersonaggio ───────────────────────────────────────────────────
// Restituisce le statistiche finali del personaggio inclusi bonus
// equipaggiamento e bonus set leggendari.

export function calcolaStatPersonaggio(personaggio: Personaggio): StatCalcolate {
  const stats: StatBase = { ...personaggio.stats };
  const effetti_attivi: StatCalcolate["effetti_attivi"] = [];

  // Somma i bonus di ogni pezzo equipaggiato
  for (const item of Object.values(personaggio.equipaggiamento)) {
    if (!item) continue;
    applicaBonusStats(stats, item.bonus);
    if (item.effetto_speciale) effetti_attivi.push(item.effetto_speciale);
  }

  // Conta i pezzi per set equipaggiati
  const conteggio = new Map<NomeSet, number>();
  for (const item of Object.values(personaggio.equipaggiamento)) {
    if (!item?.nome_set) continue;
    conteggio.set(item.nome_set, (conteggio.get(item.nome_set) ?? 0) + 1);
  }

  // Applica i bonus set in base al numero di pezzi
  const set_attivi: StatCalcolate["set_attivi"] = [];
  for (const [nome_set, pezzi] of conteggio.entries()) {
    const set = LEGENDARY_SETS[nome_set];
    const bonus_applicati: BonusSetLivello[] = [];

    const soglie: Array<[number, BonusSetLivello]> = [
      [2, set.bonus_2_pezzi],
      [3, set.bonus_3_pezzi],
      [4, set.bonus_4_pezzi],
    ];

    for (const [soglia, bonus] of soglie) {
      if (pezzi >= soglia) {
        applicaBonusStats(stats, bonus.stats);
        if (bonus.effetto_speciale) effetti_attivi.push(bonus.effetto_speciale);
        bonus_applicati.push(bonus);
      }
    }

    set_attivi.push({ nome_set, pezzi, bonus_applicati });
  }

  // Gli HP correnti non possono superare i nuovi HP massimi
  stats.punti_vita_correnti = Math.min(stats.punti_vita_correnti, stats.punti_vita_max);

  return { ...stats, effetti_attivi, set_attivi };
}

// ─── applicaLoot ─────────────────────────────────────────────────────────────
// Seleziona un oggetto dal pool in base al tipo di loot del nodo.
// Distribuzione di gioco: 80% nodi common/uncommon, 10% raro/leggendario, 10% niente.
// Distribuzione interna per rarità: comune 60% / non_comune 40%, raro 80% / leggendario 20%.

export function applicaLoot(probabilità: ProbabilitàLoot, pool: Oggetto[]): RisultatoLoot {
  if (probabilità === "niente" || pool.length === 0) {
    return { tipo_estratto: "niente" };
  }

  const [tier1, tier2]: [Rarità, Rarità] =
    probabilità === "comune_non_comune"
      ? ["comune", "non_comune"]
      : ["raro", "leggendario"];

  const [peso1, peso2] = probabilità === "comune_non_comune" ? [60, 40] : [80, 20];

  const pool1 = pool.filter((o) => o.rarità === tier1);
  const pool2 = pool.filter((o) => o.rarità === tier2);

  let selectedPool: Oggetto[];
  if (pool1.length === 0 && pool2.length === 0) return { tipo_estratto: "niente" };
  else if (pool1.length === 0) selectedPool = pool2;
  else if (pool2.length === 0) selectedPool = pool1;
  else selectedPool = randomFloat() * (peso1 + peso2) < peso1 ? pool1 : pool2;

  const oggetto = selectedPool[Math.floor(randomFloat() * selectedPool.length)];
  return { oggetto, tipo_estratto: probabilità };
}

// Determina il tipo di loot di un nodo applicando la distribuzione 80/10/10.
export function determinaProbabilitàLoot(): ProbabilitàLoot {
  const r = randomFloat();
  if (r < 0.10) return "niente";
  if (r < 0.20) return "raro_leggendario";
  return "comune_non_comune";
}

// ─── combatti ─────────────────────────────────────────────────────────────────
// Simula uno scontro turno per turno tra il personaggio e un nemico.
// Gestisce tutti gli effetti dei set leggendari.

export function combatti(stats: StatCalcolate, nemico: Nemico): RisultatoCombattimento {
  let hpGiocatore = stats.punti_vita_correnti;
  let hpNemico = nemico.punti_vita;
  const turni: TurnoCombattimento[] = [];

  // Legge gli effetti attivi una volta
  const haEff = (chiave: string) => stats.effetti_attivi.some((e) => e.chiave === chiave);
  const valEff = (chiave: string) => stats.effetti_attivi.find((e) => e.chiave === chiave)?.valore ?? 0;

  const haRisorsa = haEff("resurrezione_alba");
  const haCriticoAmplificato = haEff("critico_amplificato");
  const haPassoOmbra = haEff("passo_ombra");
  const haFurtoAnima = haEff("furto_anima");
  const haRigenerazione = haEff("rigenerazione_solare");
  const valRigenerazione = haRigenerazione ? valEff("rigenerazione_solare") : 0;
  const haSoffioDrago = haEff("soffio_drago");
  const haFuriaDraconica = haEff("furia_draconica");

  let resurrezioneUsata = false;
  let turniSenzaSchivata = 0;

  for (let n = 1; n <= MAX_TURNI_COMBATTIMENTO; n++) {
    turniSenzaSchivata++;

    // ── Attacco del giocatore ──────────────────────────────────────────────────
    const chanceClitico = PROBABILITÀ_CRITICO_GIOCATORE + (haCriticoAmplificato ? 0.15 : 0);
    const criticoGiocatore = randomFloat() < chanceClitico;

    const furiaDraconica = haFuriaDraconica && n % 5 === 0;
    const moltiplicatoreFuria = furiaDraconica ? 3 : 1;

    const soffioDrago = haSoffioDrago && randomFloat() < 0.30;
    const bonusSoffio = soffioDrago ? Math.round(stats.attacco * 0.5) : 0;
    const attaccoEffettivo = stats.attacco * moltiplicatoreFuria + bonusSoffio;

    let dannoGiocatore = calcolaDanno(attaccoEffettivo, nemico.difesa, criticoGiocatore);
    hpNemico = Math.max(0, hpNemico - dannoGiocatore);

    // Furto d'Anima: recupera 10% dei danni inflitti
    if (haFurtoAnima) {
      hpGiocatore = Math.min(stats.punti_vita_max, hpGiocatore + Math.round(dannoGiocatore * 0.10));
    }

    if (hpNemico <= 0) {
      turni.push({
        numero: n, danno_giocatore: dannoGiocatore, danno_nemico: 0,
        hp_giocatore_dopo: hpGiocatore, hp_nemico_dopo: 0,
        critico_giocatore: criticoGiocatore, critico_nemico: false,
        soffio_drago: soffioDrago || undefined,
        furia_draconica: furiaDraconica || undefined,
      });
      break;
    }

    // ── Attacco del nemico ─────────────────────────────────────────────────────
    const criticoNemico = randomFloat() < PROBABILITÀ_CRITICO_NEMICO;
    let dannoNemico = calcolaDanno(nemico.attacco, stats.difesa, criticoNemico);

    // Passo d'Ombra: schivata automatica ogni 3 turni
    const schivataGiocatore = haPassoOmbra && turniSenzaSchivata >= 3;
    if (schivataGiocatore) {
      dannoNemico = 0;
      turniSenzaSchivata = 0;
    }

    hpGiocatore = Math.max(0, hpGiocatore - dannoNemico);

    // Rigenerazione Solare: rigenera HP alla fine del turno
    let rigenerazioneApplicata: number | undefined;
    if (valRigenerazione > 0 && hpGiocatore > 0) {
      rigenerazioneApplicata = valRigenerazione;
      hpGiocatore = Math.min(stats.punti_vita_max, hpGiocatore + valRigenerazione);
    }

    // Resurrezione dell'Alba: impedisce la morte una volta
    if (hpGiocatore <= 0 && haRisorsa && !resurrezioneUsata) {
      hpGiocatore = 1;
      resurrezioneUsata = true;
    }

    turni.push({
      numero: n,
      danno_giocatore: dannoGiocatore,
      danno_nemico: dannoNemico,
      hp_giocatore_dopo: hpGiocatore,
      hp_nemico_dopo: hpNemico,
      critico_giocatore: criticoGiocatore,
      critico_nemico: criticoNemico,
      rigenerazione_applicata: rigenerazioneApplicata,
      schivata_giocatore: schivataGiocatore || undefined,
      soffio_drago: soffioDrago || undefined,
      furia_draconica: furiaDraconica || undefined,
    });

    if (hpGiocatore <= 0) break;
  }

  const vittoria = hpNemico <= 0;

  let loot: Oggetto | undefined;
  let oroGuadagnato: number | undefined;
  if (vittoria) {
    oroGuadagnato = randomInRange(nemico.oro_min, nemico.oro_max);
    if (nemico.loot_possibile.length > 0) {
      loot = applicaLoot("comune_non_comune", nemico.loot_possibile).oggetto;
    }
  }

  return {
    vittoria,
    turni,
    loot,
    oro_guadagnato: oroGuadagnato,
    hp_finale_giocatore: hpGiocatore,
  };
}
