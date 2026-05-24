"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import type { RisultatoLoot, Oggetto, Equipaggiamento } from "@/types/game";

interface Props {
  open: boolean;
  loot: RisultatoLoot | null;
  equipaggiamento: Equipaggiamento;
  locale: string;
  onResolved: (action: "equip" | "keep" | "discard") => void;
}

export default function LootModal({ open, loot, equipaggiamento, locale, onResolved }: Props) {
  const t = useTranslations("game");
  const [revealed, setRevealed] = useState(false);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (!open) {
      setRevealed(false);
      setFlipping(false);
      return;
    }
    setRevealed(false);
    setFlipping(true);
    const timer = setTimeout(() => {
      setFlipping(false);
      setRevealed(true);
    }, 650);
    return () => clearTimeout(timer);
  }, [open, loot?.oggetto?.id]);

  if (!open || !loot?.oggetto) return null;

  const item = loot.oggetto;
  const replacedItem = equipaggiamento[item.slot];
  const it = locale === "it";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
      <div className="w-full max-w-sm flex flex-col gap-4 animate-slide-up">
        <p className="text-center text-sm text-muted-foreground">{t("loot.found")}</p>

        {/* Card */}
        <div
          className={`rounded-lg border-2 p-5 flex flex-col gap-3 transition-all duration-300 border-rarity-${item.rarità} bg-rarity-${item.rarità} ${
            flipping ? "animate-loot-flip opacity-50" : "opacity-100"
          }`}
        >
          {revealed && (
            <>
              <div className="flex items-start justify-between">
                <div>
                  <p className={`text-lg font-fantasy font-semibold rarity-${item.rarità}`}>
                    {item.nome}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{item.descrizione}</p>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full border border-rarity-${item.rarità} rarity-${item.rarità} shrink-0`}
                >
                  {t(`rarity.${item.rarità}`)}
                </span>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-2 text-sm">
                {item.bonus.attacco ? (
                  <span className="text-orange-400 font-medium">+{item.bonus.attacco} ATK</span>
                ) : null}
                {item.bonus.difesa ? (
                  <span className="text-blue-400 font-medium">+{item.bonus.difesa} DEF</span>
                ) : null}
                {item.bonus.punti_vita_max ? (
                  <span className="text-red-400 font-medium">+{item.bonus.punti_vita_max} HP</span>
                ) : null}
              </div>

              {item.effetto_speciale && (
                <p className="text-xs text-muted-foreground italic border-t border-abyss-800/40 pt-2">
                  ✦ {item.effetto_speciale.descrizione}
                </p>
              )}

              {replacedItem && (
                <p className="text-xs text-muted-foreground/70">
                  {t("loot.replaces", { item: replacedItem.nome })}
                </p>
              )}

              {/* Slot */}
              <p className="text-xs text-muted-foreground">
                {t(`slot.${item.slot}`)}
              </p>
            </>
          )}

          {!revealed && (
            <div className="h-24 flex items-center justify-center">
              <p className="text-abyss-400 text-2xl">✦</p>
            </div>
          )}
        </div>

        {/* Actions */}
        {revealed && (
          <div className="flex gap-2 animate-slide-up">
            <Button
              className="flex-1 bg-abyss-700 hover:bg-abyss-600 text-xs"
              size="sm"
              onClick={() => onResolved("equip")}
            >
              {t("loot.equip")}
            </Button>
            <Button
              variant="outline"
              className="flex-1 text-xs border-abyss-700"
              size="sm"
              onClick={() => onResolved("keep")}
            >
              {t("loot.keep")}
            </Button>
            <Button
              variant="ghost"
              className="flex-1 text-xs text-muted-foreground"
              size="sm"
              onClick={() => onResolved("discard")}
            >
              {t("loot.discard")}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
