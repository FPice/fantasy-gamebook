import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";

const TIER_KEYS = ["supporter", "champion", "legend"] as const;

export default function DonatePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);

  const t = useTranslations("donate");

  return (
    <div className="container max-w-5xl py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gradient-abyss">{t("title")}</h1>
        <p className="text-xl text-muted-foreground mb-2">{t("subtitle")}</p>
        <p className="text-sm text-muted-foreground max-w-xl mx-auto">{t("description")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {TIER_KEYS.map((tier) => (
          <div
            key={tier}
            className="border border-abyss-800 rounded-lg p-6 flex flex-col gap-4 hover:border-abyss-500 transition-colors"
          >
            <div>
              <h2 className="text-xl font-bold text-abyss-300">
                {t(`tiers.${tier}.name`)}
              </h2>
              <p className="text-3xl font-bold mt-1">{t(`tiers.${tier}.price`)}</p>
            </div>

            <ul className="flex flex-col gap-2 flex-1">
              {(t.raw(`tiers.${tier}.perks`) as string[]).map((perk) => (
                <li key={perk} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-abyss-400 mt-0.5">✓</span>
                  {perk}
                </li>
              ))}
            </ul>

            <Button className="bg-abyss-700 hover:bg-abyss-600 w-full">
              {t(`tiers.${tier}.name`)}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
