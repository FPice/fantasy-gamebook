"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

const LOCALE_LABELS: Record<Locale, string> = {
  it: "IT",
  en: "EN",
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1 border border-abyss-800 rounded-md overflow-hidden text-xs">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-2 py-1 transition-colors ${
            locale === currentLocale
              ? "bg-abyss-700 text-white"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {LOCALE_LABELS[locale]}
        </button>
      ))}
    </div>
  );
}
