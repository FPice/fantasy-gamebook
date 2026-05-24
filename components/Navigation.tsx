"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { createClient } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n";

interface NavigationProps {
  locale: Locale;
}

export function Navigation({ locale }: NavigationProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/game`, label: t("play") },
    { href: `/${locale}/profile`, label: t("profile") },
    { href: `/${locale}/donate`, label: t("donate") },
  ];

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(`/${locale}/auth`);
    router.refresh();
  }

  return (
    <nav className="border-b border-abyss-900 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link
          href={`/${locale}`}
          className="text-lg font-bold text-gradient-abyss"
        >
          CdA
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-abyss-300 ${
                pathname === href
                  ? "text-abyss-300 font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <button
            onClick={handleSignOut}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("signOut")}
          </button>
        </div>
      </div>
    </nav>
  );
}
