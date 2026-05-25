'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Props {
  locale: string
}

export default function GameLobbyClient({ locale }: Props) {
  const [saves, setSaves] = useState<Record<number, boolean>>({ 1: false, 2: false, 3: false })
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    setSaves({
      1: !!localStorage.getItem('cda_save_1'),
      2: !!localStorage.getItem('cda_save_2'),
      3: !!localStorage.getItem('cda_save_3'),
    })
  }, [mounted])

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {([1, 2, 3] as const).map((slot) => (
        <div
          key={slot}
          className="border border-abyss-800 rounded-lg p-6 flex flex-col gap-4"
        >
          <p className="text-muted-foreground text-sm">Slot {slot}</p>
          <p className="text-sm">{saves[slot] ? 'Partita in corso' : 'Slot vuoto'}</p>
          <Button
            asChild
            className="mt-auto bg-abyss-700 hover:bg-abyss-600"
          >
            <Link href={`/${locale}/game/${slot}`}>
              {saves[slot] ? 'Continua' : 'Nuova partita'}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
