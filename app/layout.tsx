import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cronache dell'Abisso | Chronicles of the Abyss",
  description: "Un libro game fantasy multilingua | A multilingual fantasy gamebook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
