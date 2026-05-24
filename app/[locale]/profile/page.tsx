import { useTranslations } from "next-intl";
import { createServerSupabaseClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import type { Locale } from "@/i18n";

export default async function ProfilePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const supabase = await createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect(`/${locale}/auth`);

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", session.user.id)
    .single();

  return <ProfileView profile={profile} />;
}

function ProfileView({ profile }: { profile: unknown }) {
  const t = useTranslations("profile");

  return (
    <div className="container max-w-3xl py-12">
      <h1 className="text-3xl font-bold mb-8 text-gradient-abyss">{t("title")}</h1>

      <div className="border border-abyss-800 rounded-lg p-6 bg-card">
        <p className="text-muted-foreground text-sm">{t("noSaves")}</p>
      </div>
    </div>
  );
}
