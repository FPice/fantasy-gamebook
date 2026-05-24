import { createServerSupabaseClient } from "@/lib/supabase";
import { redirect } from "next/navigation";
import type { Locale } from "@/i18n";
import GameClient from "./GameClient";

export default async function GameSlotPage({
  params: { locale, slot },
}: {
  params: { locale: Locale; slot: string };
}) {
  const slotNum = parseInt(slot, 10);
  if (isNaN(slotNum) || slotNum < 1 || slotNum > 3) redirect(`/${locale}/game`);

  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  return <GameClient locale={locale} userId={session.user.id} slot={slotNum} />;
}
