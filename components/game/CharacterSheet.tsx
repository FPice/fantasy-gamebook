"use client";

import { useTranslations } from "next-intl";
import { Sword, Shield, Heart, Coins, Package } from "lucide-react";
import type { StatBase, StatCalcolate, Equipaggiamento, SlotEquipaggiamento } from "@/types/game";

const SLOT_ORDER: SlotEquipaggiamento[] = ["arma", "testa", "corpo", "gambe", "anello", "amuleto"];

interface Props {
  stats: StatBase;
  statsCalcolate: StatCalcolate;
  equipaggiamento: Equipaggiamento;
  locale: string;
  onOpenInventory: () => void;
}

export default function CharacterSheet({
  stats,
  statsCalcolate,
  equipaggiamento,
  locale,
  onOpenInventory,
}: Props) {
  const t = useTranslations("game");
  const hpPct = Math.max(0, Math.min(100, (stats.punti_vita_correnti / stats.punti_vita_max) * 100));
  const hpColor = hpPct > 60 ? "bg-green-500" : hpPct > 30 ? "bg-yellow-500" : "bg-red-500";

  return (
    <div className="rounded-lg border border-abyss-800 bg-card p-4 flex flex-col gap-4 sticky top-4">
      {/* HP bar */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Heart className="h-3 w-3 text-red-400" />
            {t("hpLabel")}
          </span>
          <span className="text-xs font-medium">
            {stats.punti_vita_correnti}/{stats.punti_vita_max}
          </span>
        </div>
        <div className="h-2 rounded-full bg-abyss-900 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-700 ${hpColor}`}
            style={{ width: `${hpPct}%` }}
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        <StatBox icon={<Sword className="h-3 w-3" />} label={t("attack")} value={statsCalcolate.attacco} />
        <StatBox icon={<Shield className="h-3 w-3" />} label={t("defense")} value={statsCalcolate.difesa} />
        <StatBox icon={<Coins className="h-3 w-3" />} label={t("gold")} value={stats.oro} />
      </div>

      {/* Equipment slots */}
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
          {t("equipment")}
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {SLOT_ORDER.map((slot) => {
            const item = equipaggiamento[slot];
            return (
              <div
                key={slot}
                className={`rounded border px-2 py-1.5 text-xs ${
                  item
                    ? `border-rarity-${item.rarità} bg-rarity-${item.rarità}`
                    : "border-abyss-800/60 bg-abyss-950/30"
                }`}
                title={item?.descrizione}
              >
                <p className="text-muted-foreground/60 text-[10px] uppercase tracking-wide">
                  {t(`slot.${slot}`)}
                </p>
                <p className={`truncate mt-0.5 ${item ? `rarity-${item.rarità}` : "text-muted-foreground/40"}`}>
                  {item ? item.nome : t("emptySlotLabel")}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Inventory button */}
      <button
        onClick={onOpenInventory}
        className="flex items-center justify-center gap-2 text-xs text-abyss-300 hover:text-abyss-200 border border-abyss-800 hover:border-abyss-600 rounded-md py-2 transition-colors"
      >
        <Package className="h-3.5 w-3.5" />
        {t("openInventory")}
      </button>
    </div>
  );
}

function StatBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded border border-abyss-800 bg-abyss-950/40 p-2 text-center">
      <div className="flex items-center justify-center gap-0.5 text-muted-foreground mb-1">
        {icon}
        <span className="text-[10px] uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-sm font-bold text-abyss-300">{value}</p>
    </div>
  );
}
