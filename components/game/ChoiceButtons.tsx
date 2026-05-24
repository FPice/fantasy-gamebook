"use client";

import { useTranslations } from "next-intl";
import { Sword, Shield, Eye, Footprints } from "lucide-react";
import type { SceltaNodo } from "@/types/game";

const ICONS = [Sword, Shield, Eye, Footprints];

interface Props {
  choices: SceltaNodo[];
  locale: string;
  disabled?: boolean;
  onChoose: (choice: SceltaNodo) => void;
}

export default function ChoiceButtons({ choices, locale, disabled, onChoose }: Props) {
  const t = useTranslations("game");

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
        {t("chooseAction")}
      </p>
      {choices.map((choice, i) => {
        const Icon = ICONS[i % ICONS.length];
        const text = locale === "it" ? choice.testo_it : choice.testo_en;
        return (
          <button
            key={choice.id}
            disabled={disabled}
            onClick={() => onChoose(choice)}
            style={{ animationDelay: `${i * 60}ms` }}
            className="animate-choice-appear opacity-0 flex items-center gap-3 w-full text-left rounded-lg border border-abyss-800 bg-card hover:border-abyss-600 hover:bg-abyss-900/40 px-4 py-3 text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed group"
          >
            <Icon className="h-4 w-4 shrink-0 text-abyss-400 group-hover:text-abyss-300 transition-colors" />
            <span>{text}</span>
          </button>
        );
      })}
    </div>
  );
}
