export const dynamic = "force-dynamic";

import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Locale } from "@/i18n";

export default async function GameSlotPage({
  params: { locale, slot },
}: {
  params: { locale: Locale; slot: string };
}) {
  setRequestLocale(locale);

  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  const slotNumber = parseInt(slot, 10);
  if (isNaN(slotNumber) || slotNumber < 1 || slotNumber > 3) {
    redirect(`/${locale}/game`);
  }

  return <GameView locale={locale} slot={slotNumber} />;
}

function GameView({ locale, slot }: { locale: Locale; slot: number }) {
  const t = useTranslations("game");

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button asChild variant="ghost" size="sm">
          <Link href={`/${locale}/game`}>{t("loadGame")}</Link>
        </Button>
        <h1 className="text-3xl font-bold text-gradient-abyss">
          {t("saveSlot", { slot })}
        </h1>
      </div>

      <div className="border border-abyss-800 rounded-lg p-8 bg-card">
        <p className="text-muted-foreground text-sm">{t("emptySlot")}</p>
      </div>
    </div>
  );
}
