"use client";

import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import type { Oggetto, Equipaggiamento } from "@/types/game";

interface Props {
  open: boolean;
  onClose: () => void;
  inventario: Oggetto[];
  equipaggiamento: Equipaggiamento;
  locale: string;
  onEquip: (item: Oggetto) => void;
}

export default function InventoryModal({
  open,
  onClose,
  inventario,
  equipaggiamento,
  locale,
  onEquip,
}: Props) {
  const t = useTranslations("game");

  if (!open) return null;

  const equipped = Object.values(equipaggiamento).filter(Boolean) as Oggetto[];
  const allItems = [...equipped.map((i) => ({ ...i, _equipped: true })), ...inventario.map((i) => ({ ...i, _equipped: false }))];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-2xl max-h-[80vh] flex flex-col rounded-lg border border-abyss-800 bg-background animate-slide-up">
        <div className="flex items-center justify-between border-b border-abyss-800 px-5 py-3">
          <h2 className="text-base font-semibold font-fantasy">{t("inventory")}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-y-auto p-4">
          {allItems.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">
              {locale === "it" ? "Inventario vuoto." : "Inventory is empty."}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {allItems.map((item, idx) => (
                <ItemCard
                  key={`${item.id}-${idx}`}
                  item={item}
                  equipped={item._equipped}
                  locale={locale}
                  onEquip={() => onEquip(item)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ItemCard({
  item,
  equipped,
  locale,
  onEquip,
}: {
  item: Oggetto;
  equipped: boolean;
  locale: string;
  onEquip: () => void;
}) {
  const t = useTranslations("game");
  const rarityLabel = t(`rarity.${item.rarità}`);
  const slotLabel = t(`slot.${item.slot}`);

  return (
    <div
      className={`rounded-lg border p-3 flex flex-col gap-2 border-rarity-${item.rarità} bg-rarity-${item.rarità}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className={`text-sm font-medium rarity-${item.rarità}`}>{item.nome}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{item.descrizione}</p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className={`text-[10px] px-1.5 py-0.5 rounded border border-rarity-${item.rarità} rarity-${item.rarità}`}>
            {rarityLabel}
          </span>
          <span className="text-[10px] text-muted-foreground">{slotLabel}</span>
        </div>
      </div>

      {/* Bonus */}
      <div className="flex flex-wrap gap-2 text-xs">
        {item.bonus.attacco ? (
          <span className="text-orange-400">+{item.bonus.attacco} ATK</span>
        ) : null}
        {item.bonus.difesa ? (
          <span className="text-blue-400">+{item.bonus.difesa} DEF</span>
        ) : null}
        {item.bonus.punti_vita_max ? (
          <span className="text-red-400">+{item.bonus.punti_vita_max} HP</span>
        ) : null}
      </div>

      {item.effetto_speciale && (
        <p className="text-[11px] text-muted-foreground italic">
          ✦ {item.effetto_speciale.descrizione}
        </p>
      )}

      {!equipped && (
        <button
          onClick={onEquip}
          className="text-xs text-center py-1.5 rounded border border-abyss-700 hover:border-abyss-500 hover:bg-abyss-900/40 transition-colors mt-auto"
        >
          {t("loot.equip")}
        </button>
      )}
      {equipped && (
        <span className="text-[10px] text-center text-abyss-400 border border-abyss-800 rounded py-1.5">
          {locale === "it" ? "Equipaggiato" : "Equipped"}
        </span>
      )}
    </div>
  );
}
