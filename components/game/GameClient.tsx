'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { getNodo, NODO_INIZIALE } from '@/lib/story-data'

export default function GameClient({ slot }: { slot: string }) {
  const locale = useLocale()

  const [mounted, setMounted] = useState(false)
  const [nodoId, setNodoId] = useState<string>(NODO_INIZIALE)
  const [hp, setHp] = useState(100)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const saved = localStorage.getItem('cda_save_' + slot)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.nodoId) setNodoId(parsed.nodoId)
      } catch(e) {}
    }
  }, [mounted, slot])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem('cda_save_' + slot, JSON.stringify({ nodoId }))
  }, [nodoId, mounted, slot])

  if (!mounted) return <div className="min-h-screen" />

  const nodo = getNodo(nodoId)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-gray-400">Slot {slot}</span>
          <span className="text-sm text-red-400">HP: {hp}</span>
        </div>

        <p className="text-gray-200 leading-relaxed mb-8 text-base">
          {locale === 'it' ? nodo.testo_it : nodo.testo_en}
        </p>

        <div className="flex flex-col gap-3">
          {nodo.scelte.map((scelta, idx) => (
            <button
              key={scelta.proseguiA}
              onClick={() => setNodoId(scelta.proseguiA)}
              className="text-left px-5 py-3 rounded border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-amber-600 transition-colors text-gray-100"
            >
              <span className="text-amber-500 font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
              {locale === 'it' ? scelta.testo_it : scelta.testo_en}
            </button>
          ))}
        </div>

        <button
          onClick={() => { setNodoId(NODO_INIZIALE); setHp(100) }}
          className="mt-8 text-xs text-gray-600 hover:text-gray-400 underline"
        >
          Ricomincia dall&apos;inizio
        </button>
      </div>
    </div>
  )
}
