"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Nemico, RisultatoCombattimento } from "@/types/game";

interface Props {
  open: boolean;
  enemy: Nemico | null;
  result: RisultatoCombattimento | null;
  locale: string;
  onComplete: () => void;
}

export default function CombatModal({ open, enemy, result, locale, onComplete }: Props) {
  const t = useTranslations("game.combat");
  const [visibleTurns, setVisibleTurns] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [diceSpinning, setDiceSpinning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!open || !result) {
      setVisibleTurns(0);
      setShowResult(false);
      setDiceSpinning(false);
      return;
    }

    setVisibleTurns(0);
    setShowResult(false);
    setDiceSpinning(true);

    const startDelay = setTimeout(() => {
      setDiceSpinning(false);
      let idx = 0;
      intervalRef.current = setInterval(() => {
        idx++;
        setVisibleTurns(idx);
        if (idx >= result.turni.length) {
          clearInterval(intervalRef.current!);
          setTimeout(() => setShowResult(true), 400);
        }
      }, 350);
    }, 900);

    return () => {
      clearTimeout(startDelay);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [open, result]);

  if (!open || !enemy || !result) return null;

  const it = locale === "it";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-md flex flex-col rounded-lg border border-red-900 bg-background animate-slide-up max-h-[85vh]">
        {/* Header */}
        <div className="border-b border-red-900/60 px-5 py-3 flex items-center justify-between">
          <h2 className="text-base font-semibold font-fantasy text-red-300">{t("title")}</h2>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">{it ? "vs." : "vs."}</span>
            <span className="text-red-300 font-medium">{enemy.nome}</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
          {/* Dice rolling animation */}
          {diceSpinning && (
            <div className="flex flex-col items-center justify-center py-8 gap-3">
              <Dices className="h-10 w-10 text-abyss-400 animate-dice-spin" />
              <p className="text-sm text-muted-foreground">{t("diceRolling")}</p>
            </div>
          )}

          {/* Combat turns */}
          {!diceSpinning && (
            <div className="flex flex-col gap-1.5 text-xs">
              {result.turni.slice(0, visibleTurns).map((turn) => (
                <div key={turn.numero} className="flex flex-col gap-0.5 border-b border-abyss-800/40 pb-1.5 last:border-0">
                  <p className="text-muted-foreground/60 text-[10px] uppercase">
                    {t("turn", { n: turn.numero })}
                    {turn.furia_draconica && <span className="ml-1 text-orange-400"> ⚡ Furia!</span>}
                    {turn.soffio_drago && <span className="ml-1 text-orange-400"> 🔥 Soffio!</span>}
                  </p>
                  <p className="text-orange-300">
                    → {turn.danno_giocatore} dmg
                    {turn.critico_giocatore && <span className="ml-1 text-yellow-400">{t("critical_hit")}</span>}
                  </p>
                  {turn.danno_nemico > 0 && (
                    <p className="text-red-400">
                      ← {turn.danno_nemico} dmg
                      {turn.critico_nemico && <span className="ml-1 text-yellow-400">{t("critical_hit")}</span>}
                      {turn.schivata_giocatore && <span className="ml-1 text-abyss-300">{t("dodge")}</span>}
                    </p>
                  )}
                  {turn.rigenerazione_applicata && (
                    <p className="text-green-400">♥ +{turn.rigenerazione_applicata} HP</p>
                  )}
                  <p className="text-muted-foreground text-[10px]">
                    HP: {turn.hp_giocatore_dopo}/{" "}
                    <span className="text-red-400/70">{enemy.nome}: {turn.hp_nemico_dopo}</span>
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Result */}
          {showResult && (
            <div className={`rounded-lg border p-4 text-center animate-slide-up ${
              result.vittoria
                ? "border-green-800 bg-green-950/40"
                : "border-red-800 bg-red-950/40"
            }`}>
              <p className={`font-fantasy font-semibold mb-1 ${result.vittoria ? "text-green-300" : "text-red-300"}`}>
                {result.vittoria
                  ? t("combatVictory", { enemy: enemy.nome })
                  : t("combatDefeat", { enemy: enemy.nome })}
              </p>
              {result.vittoria && result.oro_guadagnato && (
                <p className="text-xs text-yellow-400">+{result.oro_guadagnato} {it ? "oro" : "gold"}</p>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                {t("hpLost")}: {result.turni.reduce((s, t) => s + t.danno_nemico, 0)}
              </p>

              <Button
                size="sm"
                onClick={onComplete}
                className="mt-3 bg-abyss-700 hover:bg-abyss-600"
              >
                {t("proceed")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
