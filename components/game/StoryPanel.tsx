"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import type { NodoStoria } from "@/types/game";

interface Props {
  node: NodoStoria;
  locale: string;
  onComplete: () => void;
}

const NODE_TYPE_STYLE: Record<string, string> = {
  storia: "bg-abyss-900/60 text-abyss-300 border-abyss-700",
  combattimento: "bg-red-950/60 text-red-300 border-red-800",
  tesoro: "bg-yellow-950/60 text-yellow-300 border-yellow-800",
  morte: "bg-gray-950/60 text-gray-400 border-gray-700",
  vittoria: "bg-green-950/60 text-green-300 border-green-800",
};

export default function StoryPanel({ node, locale, onComplete }: Props) {
  const t = useTranslations("game");
  const text = locale === "it" ? node.testo_it : node.testo_en;
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onCompleteRef.current();
      }
    }, 22);
    return () => clearInterval(interval);
  }, [node.id, text]);

  function skip() {
    if (done) return;
    setDisplayed(text);
    setDone(true);
    onCompleteRef.current();
  }

  const badgeStyle = NODE_TYPE_STYLE[node.tipo] ?? NODE_TYPE_STYLE.storia;

  return (
    <div
      className="relative rounded-lg border border-abyss-800 bg-card p-6 cursor-pointer select-none animate-slide-up"
      onClick={skip}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${badgeStyle}`}>
          {t(`nodeType.${node.tipo}`)}
        </span>
        {!done && (
          <span className="text-xs text-muted-foreground ml-auto opacity-60">
            {t("typeToSkip")}
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed font-fantasy min-h-[80px]">
        {displayed}
        {!done && (
          <span className="inline-block w-[2px] h-[1em] bg-abyss-400 ml-0.5 animate-typewriter-blink align-middle" />
        )}
      </p>
    </div>
  );
}
