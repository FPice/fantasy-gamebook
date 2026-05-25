"use client";

import { useState, useEffect } from "react";

interface GameClientProps {
  userId: string;
  locale: string;
}

export default function GameClient({ userId, locale }: GameClientProps) {
  const [mounted, setMounted] = useState(false);
  const [savedData, setSavedData] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const data = localStorage.getItem(`game_save_${userId}`);
    setSavedData(data);
  }, [userId]);

  if (!mounted) return <div className="min-h-screen bg-background" />;

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl py-12">
        {savedData ? (
          <p className="text-sm text-muted-foreground">Save data loaded.</p>
        ) : (
          <p className="text-sm text-muted-foreground">No save data found.</p>
        )}
      </div>
    </div>
  );
}
