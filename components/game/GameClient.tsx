'use client';

import { useState, useEffect } from 'react';
import { getNodo, NODO_INIZIALE } from '@/lib/story-data';
import type { NodoStoria } from '@/types/game';
import type { Locale } from '@/i18n';

interface CharacterStats {
  attacco: number;
  difesa: number;
  punti_vita_correnti: number;
  punti_vita_max: number;
}

const DEFAULT_STATS: CharacterStats = {
  attacco: 10,
  difesa: 5,
  punti_vita_correnti: 100,
  punti_vita_max: 100,
};

interface GameClientProps {
  slot: number;
  locale: Locale;
}

export default function GameClient({ slot, locale }: GameClientProps) {
  const [mounted, setMounted] = useState(false);
  const [nodoId, setNodoId] = useState<string>(NODO_INIZIALE);
  const [stats] = useState<CharacterStats>(DEFAULT_STATS);

  const storageKey = `cda_save_${slot}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = getNodo(saved);
      if (parsed) setNodoId(saved);
    }
    setMounted(true);
  }, [storageKey]);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  const nodo: NodoStoria | undefined = getNodo(nodoId);

  if (!nodo) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Nodo non trovato: {nodoId}</p>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded"
            onClick={() => {
              setNodoId(NODO_INIZIALE);
              localStorage.removeItem(storageKey);
            }}
          >
            Ricomincia
          </button>
        </div>
      </div>
    );
  }

  const testo = locale === 'en' ? nodo.testo_en : nodo.testo_it;

  function handleScelta(nodoSuccessivoId: string) {
    localStorage.setItem(storageKey, nodoSuccessivoId);
    setNodoId(nodoSuccessivoId);
  }

  const isItalian = locale !== 'en';

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-3xl py-8 px-4">
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="border border-border rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">
              {isItalian ? 'Attacco' : 'Attack'}
            </div>
            <div className="text-xl font-bold text-primary">{stats.attacco}</div>
          </div>
          <div className="border border-border rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">
              {isItalian ? 'Difesa' : 'Defense'}
            </div>
            <div className="text-xl font-bold text-primary">{stats.difesa}</div>
          </div>
          <div className="border border-border rounded-lg p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">HP</div>
            <div className="text-xl font-bold text-primary">
              {stats.punti_vita_correnti}/{stats.punti_vita_max}
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg p-6 mb-6">
          <div className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
            {nodo.tipo}
          </div>
          <p className="text-base leading-relaxed">{testo}</p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {nodo.scelte.map((scelta) => {
            const testoScelta = locale === 'en' ? scelta.testo_en : scelta.testo_it;
            return (
              <button
                key={scelta.id}
                onClick={() => handleScelta(scelta.nodo_successivo_id)}
                className="w-full text-left px-5 py-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-sm"
              >
                <span className="font-medium text-muted-foreground mr-2">
                  {scelta.ordine}.
                </span>
                {testoScelta}
              </button>
            );
          })}
        </div>

        <div className="mt-6 text-xs text-muted-foreground text-center">
          {isItalian ? `Slot ${slot}` : `Slot ${slot}`}
          {' · '}
          <button
            className="underline hover:text-foreground"
            onClick={() => {
              localStorage.removeItem(storageKey);
              setNodoId(NODO_INIZIALE);
            }}
          >
            {isItalian ? 'Ricomincia' : 'Restart'}
          </button>
        </div>
      </div>
    </div>
  );
}
