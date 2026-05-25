export const dynamic = "force-dynamic";

import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { notFound } from "next/navigation";
import GameClient from "@/components/game/GameClient";
import type { Locale } from "@/i18n";

const VALID_SLOTS = ["1", "2", "3"] as const;
type ValidSlot = (typeof VALID_SLOTS)[number];

export default async function GameSlotPage({
  params,
}: {
  params: { locale: Locale; slot: string };
}) {
  const { locale, slot } = params;

  if (!VALID_SLOTS.includes(slot as ValidSlot)) notFound();

  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  return <GameClient slot={slot} />;
}
