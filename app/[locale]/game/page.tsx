export const dynamic = "force-dynamic";

import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import type { Locale } from "@/i18n";
import GameLobbyClient from "@/components/game/GameLobbyClient";

export default async function GamePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8 text-gradient-abyss">
        Nuova partita / Carica partita
      </h1>
      <GameLobbyClient locale={locale} />
    </div>
  );
}
