import { useTranslations } from "next-intl";
import { createServerSupabaseClient } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Locale } from "@/i18n";

export default async function GamePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  return <GameLobby locale={locale} userId={session.user.id} />;
}

function GameLobby({ locale, userId }: { locale: Locale; userId: string }) {
  const t = useTranslations("game");

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="text-3xl font-bold mb-8 text-gradient-abyss">
        {t("newGame")} / {t("loadGame")}
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {([1, 2, 3] as const).map((slot) => (
          <div
            key={slot}
            className="border border-abyss-800 rounded-lg p-6 flex flex-col gap-4"
          >
            <p className="text-muted-foreground text-sm">
              {t("saveSlot", { slot })}
            </p>
            <p className="text-sm">{t("emptySlot")}</p>
            <Button
              asChild
              className="mt-auto bg-abyss-700 hover:bg-abyss-600"
            >
              <Link href={`/${locale}/game/${slot}`}>{t("newGame")}</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
