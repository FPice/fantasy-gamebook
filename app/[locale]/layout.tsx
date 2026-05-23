import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { locales, type Locale } from "@/i18n";
import { Navigation } from "@/components/Navigation";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    title: {
      default: t("appName"),
      template: `%s | ${t("appName")}`,
    },
    description: t("tagline"),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark">
      <body className={`${inter.variable} font-sans bg-background text-foreground min-h-screen`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation locale={locale as Locale} />
          <main className="flex-1">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
