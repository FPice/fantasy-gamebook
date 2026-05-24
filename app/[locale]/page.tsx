import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const t = useTranslations("home");
  const tNav = useTranslations("nav");

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <section className="text-center px-4 py-24 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient-abyss animate-abyss-pulse">
          {t("heroTitle")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          {t("heroSubtitle")}
        </p>
        <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t("heroDescription")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-abyss-600 hover:bg-abyss-500">
            <Link href={`/${locale}/game`}>{t("startAdventure")}</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href={`/${locale}/auth`}>{tNav("signIn")}</Link>
          </Button>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        {(["choices", "combat", "story"] as const).map((feature) => (
          <div
            key={feature}
            className="rounded-lg border border-abyss-800 bg-card p-6 hover:border-abyss-600 transition-colors"
          >
            <h3 className="text-lg font-semibold mb-2 text-abyss-300">
              {t(`features.${feature}`)}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(`features.${feature}Desc`)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
