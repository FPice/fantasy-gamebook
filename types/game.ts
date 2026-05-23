// ─── Enumerations ────────────────────────────────────────────────────────────

export type Locale = "it" | "en";

export type CharacterClass =
  | "warrior"
  | "mage"
  | "rogue"
  | "cleric"
  | "ranger";

export type AbilityScore =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export type EquipmentSlot =
  | "head"
  | "chest"
  | "hands"
  | "legs"
  | "feet"
  | "mainHand"
  | "offHand"
  | "neck"
  | "ring1"
  | "ring2";

export type ItemRarity = "common" | "uncommon" | "rare" | "epic" | "legendary";

export type ItemType =
  | "weapon"
  | "armor"
  | "consumable"
  | "key"
  | "quest"
  | "misc";

export type DamageType =
  | "physical"
  | "fire"
  | "ice"
  | "lightning"
  | "poison"
  | "necrotic"
  | "holy";

export type StatusEffect =
  | "poisoned"
  | "stunned"
  | "burning"
  | "frozen"
  | "blessed"
  | "cursed"
  | "regenerating";

export type ChoiceOutcomeType =
  | "navigate"
  | "combat"
  | "check"
  | "loot"
  | "event";

export type GameSessionStatus = "active" | "completed" | "abandoned";

export type SaveSlot = 1 | 2 | 3;

// ─── Localised Content ───────────────────────────────────────────────────────

export interface LocalisedText {
  it: string;
  en: string;
}

// ─── Stats & Abilities ───────────────────────────────────────────────────────

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface DerivedStats {
  maxHp: number;
  currentHp: number;
  maxMp: number;
  currentMp: number;
  attackBonus: number;
  defenseBonus: number;
  initiative: number;
  speed: number;
}

export interface StatusEffectInstance {
  effect: StatusEffect;
  duration: number;
  magnitude: number;
  sourceId?: string;
}

// ─── Items & Inventory ───────────────────────────────────────────────────────

export interface ItemStats {
  damage?: number;
  damageType?: DamageType;
  defense?: number;
  bonuses?: Partial<AbilityScores & DerivedStats>;
}

export interface Item {
  id: string;
  name: LocalisedText;
  description: LocalisedText;
  type: ItemType;
  rarity: ItemRarity;
  slot?: EquipmentSlot;
  stats?: ItemStats;
  value: number;
  weight: number;
  stackable: boolean;
  maxStack?: number;
  iconUrl?: string;
}

export interface InventoryEntry {
  item: Item;
  quantity: number;
}

export interface Equipment {
  head?: Item;
  chest?: Item;
  hands?: Item;
  legs?: Item;
  feet?: Item;
  mainHand?: Item;
  offHand?: Item;
  neck?: Item;
  ring1?: Item;
  ring2?: Item;
}

// ─── Character ───────────────────────────────────────────────────────────────

export interface Character {
  id: string;
  userId: string;
  name: string;
  class: CharacterClass;
  level: number;
  experience: number;
  experienceToNextLevel: number;
  abilityScores: AbilityScores;
  derivedStats: DerivedStats;
  equipment: Equipment;
  inventory: InventoryEntry[];
  gold: number;
  statusEffects: StatusEffectInstance[];
  skills: string[];
  knownSpells: string[];
  createdAt: string;
  updatedAt: string;
}

// ─── Narrative & Sections ────────────────────────────────────────────────────

export interface DiceCheck {
  ability: AbilityScore;
  difficulty: number;
  successOutcome: string;
  failureOutcome: string;
}

export interface CombatEncounter {
  enemyIds: string[];
  victorySection: string;
  defeatSection: string;
  fleeSection?: string;
}

export interface LootTable {
  items: Array<{ itemId: string; chance: number; quantity: [number, number] }>;
  gold?: [number, number];
}

export interface ChoiceRequirement {
  type: "item" | "ability" | "stat" | "flag";
  value: string;
  threshold?: number;
}

export interface Choice {
  id: string;
  text: LocalisedText;
  targetSection: string;
  outcomeType: ChoiceOutcomeType;
  requirements?: ChoiceRequirement[];
  diceCheck?: DiceCheck;
  combat?: CombatEncounter;
  loot?: LootTable;
  hidden?: boolean;
}

export interface GameSection {
  id: string;
  title: LocalisedText;
  body: LocalisedText;
  imageUrl?: string;
  choices: Choice[];
  isEnding?: boolean;
  endingType?: "victory" | "defeat" | "neutral";
  onEnterFlags?: string[];
  onEnterItems?: string[];
  musicTrack?: string;
  ambientSound?: string;
}

// ─── Enemies ─────────────────────────────────────────────────────────────────

export interface Enemy {
  id: string;
  name: LocalisedText;
  description: LocalisedText;
  level: number;
  hp: number;
  mp: number;
  abilityScores: AbilityScores;
  attacks: Array<{
    name: LocalisedText;
    damage: [number, number];
    damageType: DamageType;
    accuracy: number;
  }>;
  loot?: LootTable;
  experience: number;
  imageUrl?: string;
  isBoss?: boolean;
}

// ─── Combat ──────────────────────────────────────────────────────────────────

export interface CombatantState {
  id: string;
  name: string;
  currentHp: number;
  maxHp: number;
  currentMp: number;
  maxMp: number;
  statusEffects: StatusEffectInstance[];
  initiative: number;
}

export interface CombatLog {
  round: number;
  actorId: string;
  action: string;
  result: string;
  damage?: number;
  isCritical?: boolean;
}

export interface CombatState {
  isActive: boolean;
  round: number;
  turnOrder: string[];
  currentTurnIndex: number;
  playerState: CombatantState;
  enemies: CombatantState[];
  log: CombatLog[];
  outcome?: "victory" | "defeat" | "fled";
}

// ─── Game Session ─────────────────────────────────────────────────────────────

export interface GameFlags {
  [flagName: string]: boolean | number | string;
}

export interface GameSession {
  id: string;
  userId: string;
  characterId: string;
  saveSlot: SaveSlot;
  currentSectionId: string;
  visitedSections: string[];
  flags: GameFlags;
  playtime: number;
  status: GameSessionStatus;
  combat?: CombatState;
  createdAt: string;
  updatedAt: string;
}

// ─── User Profile ─────────────────────────────────────────────────────────────

export interface UserProfile {
  id: string;
  username: string;
  avatarUrl?: string;
  preferredLocale: Locale;
  totalPlaytime: number;
  achievements: string[];
  isDonor: boolean;
  donorTier?: "supporter" | "champion" | "legend";
  createdAt: string;
}

// ─── Game Engine Types ────────────────────────────────────────────────────────

export interface DiceRoll {
  sides: number;
  count: number;
  modifier: number;
  result: number;
  rolls: number[];
}

export interface CheckResult {
  roll: DiceRoll;
  total: number;
  difficulty: number;
  success: boolean;
  margin: number;
}

export interface NavigationResult {
  success: boolean;
  section?: GameSection;
  error?: string;
}

export interface ActionResult {
  type: ChoiceOutcomeType;
  navigateTo?: string;
  combat?: CombatState;
  checkResult?: CheckResult;
  loot?: InventoryEntry[];
  flagsSet?: GameFlags;
  message?: LocalisedText;
}
