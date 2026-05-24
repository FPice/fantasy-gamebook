"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { NODI_STORIA, NODO_INIZIALE_ID, OGGETTI_POOL } from "@/lib/story-data";
import { applicaLoot, combatti, calcolaStatPersonaggio } from "@/lib/game-engine";
import type {
  StatBase,
  Equipaggiamento,
  Oggetto,
  SceltaNodo,
  Nemico,
  RisultatoCombattimento,
  RisultatoLoot,
} from "@/types/game";
import StoryPanel from "@/components/game/StoryPanel";
import ChoiceButtons from "@/components/game/ChoiceButtons";
import CharacterSheet from "@/components/game/CharacterSheet";
import InventoryModal from "@/components/game/InventoryModal";
import CombatModal from "@/components/game/CombatModal";
import LootModal from "@/components/game/LootModal";

// ── Types ─────────────────────────────────────────────────────────────────────

type GamePhase = "reading" | "choosing" | "combat" | "loot" | "end";

interface GameState {
  nodoCorrenteId: string;
  stats: StatBase;
  equipaggiamento: Equipaggiamento;
  inventario: Oggetto[];
  scelteFatte: number;
  finita: boolean;
  tipoFine?: "vittoria" | "sconfitta";
  timestamp: number;
}

interface Props {
  locale: string;
  userId: string;
  slot: number;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const INITIAL_STATS: StatBase = {
  attacco: 10,
  difesa: 8,
  punti_vita_max: 100,
  punti_vita_correnti: 100,
  oro: 3,
};

const NEMICI: Nemico[] = [
  { id: "goblin_meschino", nome: "Goblin Meschino", attacco: 8, difesa: 4, punti_vita: 30, oro_min: 2, oro_max: 8, loot_possibile: [] },
  { id: "scheletro_tarlato", nome: "Scheletro Tarlato", attacco: 12, difesa: 6, punti_vita: 45, oro_min: 3, oro_max: 15, loot_possibile: [] },
  { id: "orco_pigro", nome: "Orco Pigro", attacco: 16, difesa: 10, punti_vita: 70, oro_min: 5, oro_max: 20, loot_possibile: [] },
  { id: "troll_spelacchiato", nome: "Troll Spelacchiato", attacco: 20, difesa: 14, punti_vita: 95, oro_min: 8, oro_max: 30, loot_possibile: [] },
  { id: "signore_oscuro_jr", nome: "Signore Oscuro (Jr.)", attacco: 28, difesa: 18, punti_vita: 130, oro_min: 15, oro_max: 50, loot_possibile: [] },
];

function getEnemy(scelteFatte: number): Nemico {
  return NEMICI[Math.min(Math.floor(scelteFatte / 8), NEMICI.length - 1)];
}

function createNewGame(): GameState {
  return {
    nodoCorrenteId: NODO_INIZIALE_ID,
    stats: { ...INITIAL_STATS },
    equipaggiamento: {},
    inventario: [],
    scelteFatte: 0,
    finita: false,
    timestamp: Date.now(),
  };
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function GameClient({ locale, userId, slot }: Props) {
  const t = useTranslations("game");
  const storageKey = `cda_save_${slot}`;

  const [gameState, setGameState] = useState<GameState>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(storageKey);
        if (saved) return JSON.parse(saved) as GameState;
      } catch {
        // corrupted save — start fresh
      }
    }
    return createNewGame();
  });

  const [phase, setPhase] = useState<GamePhase>("reading");
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [currentEnemy, setCurrentEnemy] = useState<Nemico | null>(null);
  const [combatResult, setCombatResult] = useState<RisultatoCombattimento | null>(null);
  const [currentLoot, setCurrentLoot] = useState<RisultatoLoot | null>(null);

  const currentNode = useMemo(
    () => NODI_STORIA.find((n) => n.id === gameState.nodoCorrenteId) ?? NODI_STORIA[0],
    [gameState.nodoCorrenteId]
  );

  const statsCalcolate = useMemo(
    () =>
      calcolaStatPersonaggio({
        id: "player",
        user_id: userId,
        nome: "Eroe",
        stats: gameState.stats,
        equipaggiamento: gameState.equipaggiamento,
        inventario: gameState.inventario,
      }),
    [userId, gameState.stats, gameState.equipaggiamento, gameState.inventario]
  );

  // Persist to localStorage on every state change
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(gameState));
    } catch {
      // storage full — ignore
    }
  }, [gameState, storageKey]);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const handleTypewriterComplete = useCallback(() => {
    const { tipo } = currentNode;

    if (tipo === "morte") {
      setGameState((prev) => ({ ...prev, finita: true, tipoFine: "sconfitta" }));
      setPhase("end");
      return;
    }
    if (tipo === "vittoria") {
      setGameState((prev) => ({ ...prev, finita: true, tipoFine: "vittoria" }));
      setPhase("end");
      return;
    }
    if (tipo === "combattimento") {
      const enemy = getEnemy(gameState.scelteFatte);
      const result = combatti(statsCalcolate, enemy);
      setCurrentEnemy(enemy);
      setCombatResult(result);
      setPhase("combat");
      return;
    }

    const lootResult = applicaLoot(currentNode.probabilità_loot, OGGETTI_POOL);
    if (lootResult.oggetto) {
      setCurrentLoot(lootResult);
      setPhase("loot");
    } else {
      setPhase("choosing");
    }
  }, [currentNode, gameState.scelteFatte, statsCalcolate]);

  const handleCombatComplete = useCallback(() => {
    if (!combatResult) return;

    if (!combatResult.vittoria) {
      setGameState((prev) => ({
        ...prev,
        stats: { ...prev.stats, punti_vita_correnti: 0 },
        finita: true,
        tipoFine: "sconfitta",
      }));
      setPhase("end");
      return;
    }

    setGameState((prev) => ({
      ...prev,
      stats: {
        ...prev.stats,
        punti_vita_correnti: combatResult.hp_finale_giocatore,
        oro: prev.stats.oro + (combatResult.oro_guadagnato ?? 0),
      },
    }));

    const lootResult = applicaLoot(currentNode.probabilità_loot, OGGETTI_POOL);
    if (lootResult.oggetto) {
      setCurrentLoot(lootResult);
      setPhase("loot");
    } else {
      setPhase("choosing");
    }
  }, [combatResult, currentNode]);

  const handleLootResolved = useCallback(
    (action: "equip" | "keep" | "discard") => {
      if (action === "equip" && currentLoot?.oggetto) {
        const item = currentLoot.oggetto;
        setGameState((prev) => {
          const replaced = prev.equipaggiamento[item.slot];
          return {
            ...prev,
            equipaggiamento: { ...prev.equipaggiamento, [item.slot]: item },
            inventario: replaced ? [...prev.inventario, replaced] : prev.inventario,
          };
        });
      } else if (action === "keep" && currentLoot?.oggetto) {
        const item = currentLoot.oggetto;
        setGameState((prev) => ({ ...prev, inventario: [...prev.inventario, item] }));
      }
      setCurrentLoot(null);
      setPhase("choosing");
    },
    [currentLoot]
  );

  const handleChoiceMade = useCallback((choice: SceltaNodo) => {
    setGameState((prev) => ({
      ...prev,
      nodoCorrenteId: choice.nodo_successivo_id,
      scelteFatte: prev.scelteFatte + 1,
      timestamp: Date.now(),
    }));
    setPhase("reading");
    setCombatResult(null);
    setCurrentLoot(null);
    setCurrentEnemy(null);
  }, []);

  const handleEquipFromInventory = useCallback((item: Oggetto) => {
    setGameState((prev) => {
      const replaced = prev.equipaggiamento[item.slot];
      const newInventario = prev.inventario.filter((i) => i.id !== item.id);
      return {
        ...prev,
        equipaggiamento: { ...prev.equipaggiamento, [item.slot]: item },
        inventario: replaced ? [...newInventario, replaced] : newInventario,
      };
    });
  }, []);

  const handleRestart = useCallback(() => {
    const fresh = createNewGame();
    setGameState(fresh);
    setPhase("reading");
    setCombatResult(null);
    setCurrentLoot(null);
    setCurrentEnemy(null);
    setInventoryOpen(false);
  }, []);

  // ── Render ───────────────────────────────────────────────────────────────────

  if (phase === "end") {
    return (
      <EndScreen
        gameState={gameState}
        locale={locale}
        slot={slot}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row gap-4 p-4 container max-w-6xl">
      {/* Main content */}
      <main className="flex-1 flex flex-col gap-4 min-w-0">
        <StoryPanel
          node={currentNode}
          locale={locale}
          onComplete={handleTypewriterComplete}
        />

        {phase === "choosing" && (
          <ChoiceButtons
            choices={currentNode.scelte}
            locale={locale}
            onChoose={handleChoiceMade}
          />
        )}

        {phase === "reading" && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground/40 px-1">
            <span className="animate-abyss-pulse">●</span>
            <span>{locale === "it" ? "Lettura in corso..." : "Reading..."}</span>
          </div>
        )}
      </main>

      {/* Sidebar */}
      <aside className="lg:w-72 shrink-0">
        <CharacterSheet
          stats={gameState.stats}
          statsCalcolate={statsCalcolate}
          equipaggiamento={gameState.equipaggiamento}
          locale={locale}
          onOpenInventory={() => setInventoryOpen(true)}
        />
      </aside>

      {/* Modals */}
      <CombatModal
        open={phase === "combat"}
        enemy={currentEnemy}
        result={combatResult}
        locale={locale}
        onComplete={handleCombatComplete}
      />

      <LootModal
        open={phase === "loot"}
        loot={currentLoot}
        equipaggiamento={gameState.equipaggiamento}
        locale={locale}
        onResolved={handleLootResolved}
      />

      <InventoryModal
        open={inventoryOpen}
        onClose={() => setInventoryOpen(false)}
        inventario={gameState.inventario}
        equipaggiamento={gameState.equipaggiamento}
        locale={locale}
        onEquip={handleEquipFromInventory}
      />
    </div>
  );
}

// ── End Screen ────────────────────────────────────────────────────────────────

function EndScreen({
  gameState,
  locale,
  slot,
  onRestart,
}: {
  gameState: GameState;
  locale: string;
  slot: number;
  onRestart: () => void;
}) {
  const t = useTranslations("game");
  const it = locale === "it";
  const isVictory = gameState.tipoFine === "vittoria";
  const itemsFound =
    Object.values(gameState.equipaggiamento).filter(Boolean).length +
    gameState.inventario.length;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-md flex flex-col gap-6 animate-slide-up">
        {/* Title */}
        <div className="text-center">
          <h1
            className={`text-4xl font-fantasy font-bold mb-2 ${
              isVictory ? "text-gradient-abyss" : "text-gray-400"
            }`}
          >
            {isVictory ? t("end.victory") : t("end.defeat")}
          </h1>
          <p className="text-sm text-muted-foreground">{t("end.journey")}</p>
        </div>

        {/* Stats */}
        <div className="rounded-lg border border-abyss-800 bg-card p-5 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-abyss-300">{gameState.scelteFatte}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("end.choicesMade")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-yellow-400">{gameState.stats.oro}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("end.goldEarned")}</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-abyss-300">{itemsFound}</p>
            <p className="text-xs text-muted-foreground mt-1">{t("end.itemsFound")}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button
            onClick={onRestart}
            className="w-full py-3 rounded-lg bg-abyss-700 hover:bg-abyss-600 text-sm font-medium transition-colors"
          >
            {t("end.restart")}
          </button>
          <Link
            href={`/${locale}/game`}
            className="w-full py-3 rounded-lg border border-abyss-800 hover:border-abyss-600 text-sm text-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("end.backToLobby")}
          </Link>
        </div>
      </div>
    </div>
  );
}
