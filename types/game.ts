// ─── Tipi Primitivi ──────────────────────────────────────────────────────────

export type Rarità = "comune" | "non_comune" | "raro" | "leggendario";

export type SlotEquipaggiamento =
  | "arma"
  | "testa"
  | "corpo"
  | "gambe"
  | "anello"
  | "amuleto";

export type TipoNodo =
  | "storia"
  | "combattimento"
  | "tesoro"
  | "morte"
  | "vittoria";

export type NomeSet =
  | "corona_alba_eterna"
  | "velo_ombre_eterne"
  | "patto_drago_primordiale";

export type ProbabilitàLoot = "comune_non_comune" | "raro_leggendario" | "niente";

export type TipoEffetto = "passivo" | "attivo" | "trigger";

// ─── Oggetti ──────────────────────────────────────────────────────────────────

export interface BonusStats {
  attacco?: number;
  difesa?: number;
  punti_vita_max?: number;
}

export interface EffettoSpeciale {
  nome: string;
  descrizione: string;
  tipo: TipoEffetto;
  chiave: string;
  valore?: number;
}

export interface Oggetto {
  id: string;
  nome: string;
  descrizione: string;
  rarità: Rarità;
  slot: SlotEquipaggiamento;
  bonus: BonusStats;
  effetto_speciale?: EffettoSpeciale;
  nome_set?: NomeSet;
}

export type Equipaggiamento = Partial<Record<SlotEquipaggiamento, Oggetto>>;

// ─── Set Leggendari ───────────────────────────────────────────────────────────

export interface BonusSetLivello {
  stats: BonusStats;
  descrizione: string;
  effetto_speciale?: EffettoSpeciale;
}

export interface SetLeggendario {
  nome_set: NomeSet;
  nome: string;
  bonus_2_pezzi: BonusSetLivello;
  bonus_3_pezzi: BonusSetLivello;
  bonus_4_pezzi: BonusSetLivello;
}

export interface SetAttivo {
  nome_set: NomeSet;
  pezzi: number;
  bonus_applicati: BonusSetLivello[];
}

// ─── Personaggio ─────────────────────────────────────────────────────────────

export interface StatBase {
  attacco: number;
  difesa: number;
  punti_vita_max: number;
  punti_vita_correnti: number;
  oro: number;
}

export interface Personaggio {
  id: string;
  user_id: string;
  nome: string;
  stats: StatBase;
  equipaggiamento: Equipaggiamento;
  inventario: Oggetto[];
}

export interface StatCalcolate extends StatBase {
  effetti_attivi: EffettoSpeciale[];
  set_attivi: SetAttivo[];
}

// ─── Nemici ───────────────────────────────────────────────────────────────────

export interface Nemico {
  id: string;
  nome: string;
  attacco: number;
  difesa: number;
  punti_vita: number;
  oro_min: number;
  oro_max: number;
  loot_possibile: Oggetto[];
}

// ─── Combattimento ───────────────────────────────────────────────────────────

export interface TurnoCombattimento {
  numero: number;
  danno_giocatore: number;
  danno_nemico: number;
  hp_giocatore_dopo: number;
  hp_nemico_dopo: number;
  critico_giocatore: boolean;
  critico_nemico: boolean;
  rigenerazione_applicata?: number;
  schivata_giocatore?: boolean;
  soffio_drago?: boolean;
  furia_draconica?: boolean;
}

export interface RisultatoCombattimento {
  vittoria: boolean;
  turni: TurnoCombattimento[];
  loot?: Oggetto;
  oro_guadagnato?: number;
  hp_finale_giocatore: number;
}

// ─── Storia ───────────────────────────────────────────────────────────────────

export interface SceltaNodo {
  id: string;
  nodo_id: string;
  testo_it: string;
  testo_en: string;
  nodo_successivo_id: string;
  ordine: number;
  condizione?: string;
}

export interface NodoStoria {
  id: string;
  testo_it: string;
  testo_en: string;
  tipo: TipoNodo;
  probabilità_loot: ProbabilitàLoot;
  scelte: SceltaNodo[];
}

// ─── Sessione di Gioco ────────────────────────────────────────────────────────

export interface SessioneGioco {
  id: string;
  user_id: string;
  character_id: string;
  nodo_corrente_id: string;
  completata: boolean;
  vittoria?: boolean;
  created_at: string;
  updated_at: string;
}

// ─── Loot ─────────────────────────────────────────────────────────────────────

export interface RisultatoLoot {
  oggetto?: Oggetto;
  tipo_estratto: ProbabilitàLoot;
}
