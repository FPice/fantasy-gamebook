"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getNode, STORY_START_ID } from "@/lib/story-data";
import type { NodoStoria } from "@/types/game";

interface GameSave {
  nodo_corrente_id: string;
}

function saveKey(slot: string) {
  return `cda_save_${slot}`;
}

export default function GameClient({ slot }: { slot: string }) {
  const t = useTranslations("game");
  const locale = useLocale();
  const [nodo, setNodo] = useState<NodoStoria | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const loadSave = useCallback((): GameSave => {
    try {
      const raw = localStorage.getItem(saveKey(slot));
      if (raw) return JSON.parse(raw) as GameSave;
    } catch {}
    return { nodo_corrente_id: STORY_START_ID };
  }, [slot]);

  const persistSave = useCallback(
    (nodo_id: string) => {
      localStorage.setItem(saveKey(slot), JSON.stringify({ nodo_corrente_id: nodo_id }));
    },
    [slot]
  );

  useEffect(() => {
    const save = loadSave();
    const found = getNode(save.nodo_corrente_id) ?? getNode(STORY_START_ID)!;
    setNodo(found);
    setHistory([found.id]);
  }, [loadSave]);

  const scegli = (nextId: string) => {
    const next = getNode(nextId);
    if (!next) return;
    persistSave(next.id);
    setNodo(next);
    setHistory((h) => [...h, next.id]);
  };

  const restart = () => {
    localStorage.removeItem(saveKey(slot));
    const start = getNode(STORY_START_ID)!;
    setNodo(start);
    setHistory([start.id]);
  };

  if (!nodo) {
    return (
      <div className="container max-w-2xl py-12 text-center">
        <p className="text-muted-foreground">{t("common.loading", { defaultValue: "Caricamento..." })}</p>
      </div>
    );
  }

  const testoNodo = locale === "it" ? nodo.testo_it : nodo.testo_en;
  const isTerminal = nodo.tipo === "vittoria" || nodo.tipo === "morte";

  const tipoLabel: Record<string, string> = {
    storia: "",
    combattimento: "⚔️",
    tesoro: "💰",
    morte: "💀",
    vittoria: "🏆",
  };

  return (
    <div className="container max-w-2xl py-12">
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href={`/${locale}/game`}>{t("common.back", { defaultValue: "Indietro" })}</Link>
        </Button>
        <span className="text-xs text-muted-foreground">
          {t("saveSlot", { slot })}
        </span>
      </div>

      <div className="border border-abyss-800 rounded-lg p-8 mb-6">
        {tipoLabel[nodo.tipo] && (
          <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
            {tipoLabel[nodo.tipo]} {nodo.tipo}
          </span>
        )}
        <p className="text-lg leading-relaxed">{testoNodo}</p>
      </div>

      {isTerminal ? (
        <div className="flex gap-3">
          <Button onClick={restart} className="bg-abyss-700 hover:bg-abyss-600">
            {t("newGame")}
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${locale}/game`}>{t("loadGame")}</Link>
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground mb-1">{t("chooseAction")}</p>
          {nodo.scelte
            .sort((a, b) => a.ordine - b.ordine)
            .map((scelta) => {
              const testo = locale === "it" ? scelta.testo_it : scelta.testo_en;
              return (
                <Button
                  key={scelta.id}
                  variant="outline"
                  className="justify-start text-left h-auto py-3 px-4 border-abyss-700 hover:bg-abyss-800"
                  onClick={() => scegli(scelta.nodo_successivo_id)}
                >
                  {testo}
                </Button>
              );
            })}
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-8 text-right">
        {t("saveGame")}: {t("saveSlot", { slot })}
      </p>
    </div>
  );
}
