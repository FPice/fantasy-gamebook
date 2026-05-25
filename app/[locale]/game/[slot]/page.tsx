export const dynamic = "force-dynamic";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import GameClient from "@/components/game/GameClient";

export default async function GameSlotPage({
  params,
}: {
  params: { locale: string; slot: string };
}) {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) redirect(`/${params.locale}/auth`);

  const slot = ["1", "2", "3"].includes(params.slot) ? params.slot : "1";

  return <GameClient slot={slot} />;
}
