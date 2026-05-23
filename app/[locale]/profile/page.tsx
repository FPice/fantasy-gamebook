import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase";
import { ProfileClient } from "./ProfileClient";
import type { Locale } from "@/i18n";

export default async function ProfilePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect(`/${locale}/auth`);

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const { data: characters } = await supabase
    .from("characters")
    .select("*")
    .eq("user_id", user.id);

  return (
    <ProfileClient
      locale={locale}
      email={user.email ?? ""}
      profile={profile}
      characters={characters ?? []}
    />
  );
}
