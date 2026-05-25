export const dynamic = "force-dynamic";

import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import GameClient from "@/components/game/GameClient";
import type { Locale } from "@/i18n";

export default async function GameSlotPage({
  params,
}: {
  params: { locale: Locale; slot: string };
}) {
  const { locale, slot } = params;

  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  const slotNumber = parseInt(slot, 10);
  const validSlot = [1, 2, 3].includes(slotNumber) ? slotNumber : 1;

  return <GameClient slot={validSlot} locale={locale} />;
}
