export const dynamic = "force-dynamic";

import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import type { Locale } from "@/i18n";

export default async function GamePage({
  params,
}: {
  params: { locale: Locale };
}) {
  const { locale } = params;

  const supabase = await createServerSupabaseClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  const isItalian = locale !== "en";

  return (
    <div className="container max-w-4xl py-12 px-4">
      <h1 className="text-3xl font-bold mb-2">
        {isItalian ? "Scegli uno slot di salvataggio" : "Choose a save slot"}
      </h1>
      <p className="text-muted-foreground mb-8">
        {isItalian
          ? "Seleziona uno slot per iniziare o continuare la tua avventura."
          : "Select a slot to start or continue your adventure."}
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        {([1, 2, 3] as const).map((slot) => (
          <div
            key={slot}
            className="border border-border rounded-lg p-6 flex flex-col gap-4"
          >
            <div className="text-sm text-muted-foreground">
              {isItalian ? `Slot ${slot}` : `Slot ${slot}`}
            </div>
            <div className="text-sm flex-1">
              {isItalian ? "Slot vuoto" : "Empty slot"}
            </div>
            <Link
              href={`/${locale}/game/${slot}`}
              className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              {isItalian ? "Nuova Partita" : "New Game"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
