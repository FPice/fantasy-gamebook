import type {
  Character,
  GameSection,
  GameSession,
  Choice,
  ActionResult,
  CheckResult,
  CombatState,
  CombatantState,
  DiceRoll,
  Enemy,
  InventoryEntry,
  Item,
  AbilityScore,
  StatusEffectInstance,
} from "@/types/game";

// ─── Dice ─────────────────────────────────────────────────────────────────────

export function rollDice(sides: number, count = 1, modifier = 0): DiceRoll {
  const rolls = Array.from({ length: count }, () =>
    Math.floor(Math.random() * sides) + 1
  );
  const result = rolls.reduce((a, b) => a + b, 0) + modifier;
  return { sides, count, modifier, result, rolls };
}

export function d20(modifier = 0): DiceRoll {
  return rollDice(20, 1, modifier);
}

export function abilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

// ─── Checks ───────────────────────────────────────────────────────────────────

export function performAbilityCheck(
  character: Character,
  ability: AbilityScore,
  difficulty: number
): CheckResult {
  const score = character.abilityScores[ability];
  const modifier = abilityModifier(score);
  const roll = d20(modifier);
  const success = roll.result >= difficulty;
  return {
    roll,
    total: roll.result,
    difficulty,
    success,
    margin: roll.result - difficulty,
  };
}

// ─── Character Progression ────────────────────────────────────────────────────

const XP_PER_LEVEL: Record<number, number> = {
  1: 0,
  2: 300,
  3: 900,
  4: 2700,
  5: 6500,
  6: 14000,
  7: 23000,
  8: 34000,
  9: 48000,
  10: 64000,
};

export function experienceToNextLevel(level: number): number {
  return XP_PER_LEVEL[level + 1] ?? Infinity;
}

export function shouldLevelUp(character: Character): boolean {
  return character.experience >= character.experienceToNextLevel;
}

export function calculateDerivedStats(character: Character): Character["derivedStats"] {
  const { constitution, dexterity, strength, intelligence } = character.abilityScores;
  const conMod = abilityModifier(constitution);
  const dexMod = abilityModifier(dexterity);
  const strMod = abilityModifier(strength);
  const intMod = abilityModifier(intelligence);

  const baseHp = 10 + conMod * character.level;
  const baseMp = 5 + intMod * character.level;

  return {
    maxHp: Math.max(1, baseHp),
    currentHp: Math.min(character.derivedStats.currentHp, Math.max(1, baseHp)),
    maxMp: Math.max(0, baseMp),
    currentMp: Math.min(character.derivedStats.currentMp, Math.max(0, baseMp)),
    attackBonus: strMod + Math.floor(character.level / 2),
    defenseBonus: dexMod + Math.floor(character.level / 4),
    initiative: dexMod,
    speed: 30 + dexMod * 5,
  };
}

// ─── Status Effects ───────────────────────────────────────────────────────────

export function tickStatusEffects(
  effects: StatusEffectInstance[]
): StatusEffectInstance[] {
  return effects
    .map((e) => ({ ...e, duration: e.duration - 1 }))
    .filter((e) => e.duration > 0);
}

export function applyStatusEffect(
  effects: StatusEffectInstance[],
  newEffect: StatusEffectInstance
): StatusEffectInstance[] {
  const existing = effects.findIndex((e) => e.effect === newEffect.effect);
  if (existing >= 0) {
    const updated = [...effects];
    updated[existing] = newEffect;
    return updated;
  }
  return [...effects, newEffect];
}

// ─── Inventory ────────────────────────────────────────────────────────────────

export function addToInventory(
  inventory: InventoryEntry[],
  item: Item,
  quantity = 1
): InventoryEntry[] {
  const existing = inventory.findIndex((e) => e.item.id === item.id);

  if (existing >= 0 && item.stackable) {
    const updated = [...inventory];
    updated[existing] = {
      ...updated[existing],
      quantity: updated[existing].quantity + quantity,
    };
    return updated;
  }

  return [...inventory, { item, quantity }];
}

export function removeFromInventory(
  inventory: InventoryEntry[],
  itemId: string,
  quantity = 1
): InventoryEntry[] {
  return inventory
    .map((e) =>
      e.item.id === itemId ? { ...e, quantity: e.quantity - quantity } : e
    )
    .filter((e) => e.quantity > 0);
}

export function hasItem(inventory: InventoryEntry[], itemId: string): boolean {
  return inventory.some((e) => e.item.id === itemId && e.quantity > 0);
}

// ─── Choice Resolution ────────────────────────────────────────────────────────

export function isChoiceAvailable(
  choice: Choice,
  character: Character,
  flags: GameSession["flags"]
): boolean {
  if (!choice.requirements) return true;

  return choice.requirements.every((req) => {
    switch (req.type) {
      case "item":
        return hasItem(character.inventory, req.value);
      case "flag":
        return Boolean(flags[req.value]);
      case "stat":
        return (
          (character.derivedStats as Record<string, number>)[req.value] >=
          (req.threshold ?? 0)
        );
      case "ability":
        return (
          (character.abilityScores as Record<string, number>)[req.value] >=
          (req.threshold ?? 0)
        );
      default:
        return true;
    }
  });
}

export function resolveChoice(
  choice: Choice,
  character: Character,
  session: GameSession
): ActionResult {
  switch (choice.outcomeType) {
    case "navigate":
      return { type: "navigate", navigateTo: choice.targetSection };

    case "check": {
      if (!choice.diceCheck)
        return { type: "navigate", navigateTo: choice.targetSection };
      const result = performAbilityCheck(
        character,
        choice.diceCheck.ability,
        choice.diceCheck.difficulty
      );
      return {
        type: "check",
        checkResult: result,
        navigateTo: result.success
          ? choice.diceCheck.successOutcome
          : choice.diceCheck.failureOutcome,
      };
    }

    case "combat": {
      if (!choice.combat)
        return { type: "navigate", navigateTo: choice.targetSection };
      const combatState = initCombat(character, []);
      return { type: "combat", combat: combatState };
    }

    case "loot": {
      return { type: "loot", loot: [], navigateTo: choice.targetSection };
    }

    default:
      return { type: "navigate", navigateTo: choice.targetSection };
  }
}

// ─── Combat ───────────────────────────────────────────────────────────────────

export function initCombat(
  character: Character,
  enemies: Enemy[]
): CombatState {
  const playerInitiative = rollDice(20, 1, abilityModifier(character.abilityScores.dexterity)).result;

  const playerState: CombatantState = {
    id: character.id,
    name: character.name,
    currentHp: character.derivedStats.currentHp,
    maxHp: character.derivedStats.maxHp,
    currentMp: character.derivedStats.currentMp,
    maxMp: character.derivedStats.maxMp,
    statusEffects: [],
    initiative: playerInitiative,
  };

  const enemyStates: CombatantState[] = enemies.map((enemy) => ({
    id: enemy.id,
    name: enemy.name.it,
    currentHp: enemy.hp,
    maxHp: enemy.hp,
    currentMp: enemy.mp,
    maxMp: enemy.mp,
    statusEffects: [],
    initiative: rollDice(20, 1, abilityModifier(enemy.abilityScores.dexterity)).result,
  }));

  const allCombatants = [playerState, ...enemyStates].sort(
    (a, b) => b.initiative - a.initiative
  );

  return {
    isActive: true,
    round: 1,
    turnOrder: allCombatants.map((c) => c.id),
    currentTurnIndex: 0,
    playerState,
    enemies: enemyStates,
    log: [],
  };
}

export function isCombatOver(state: CombatState): boolean {
  const playerDead = state.playerState.currentHp <= 0;
  const allEnemiesDead = state.enemies.every((e) => e.currentHp <= 0);
  return playerDead || allEnemiesDead;
}

export function getCombatOutcome(
  state: CombatState
): "victory" | "defeat" | null {
  if (state.playerState.currentHp <= 0) return "defeat";
  if (state.enemies.every((e) => e.currentHp <= 0)) return "victory";
  return null;
}
