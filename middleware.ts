import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { locales, defaultLocale } from "./i18n";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

const protectedRoutes = ["/game", "/profile"];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Strip locale prefix to check route protection
  const pathnameWithoutLocale = locales.reduce(
    (acc, locale) => acc.replace(new RegExp(`^/${locale}`), ""),
    pathname
  );

  const isProtected = protectedRoutes.some((route) =>
    pathnameWithoutLocale.startsWith(route)
  );

  if (isProtected) {
    let response = NextResponse.next({ request });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => request.cookies.getAll(),
          setAll: (cookiesToSet) => {
            cookiesToSet.forEach(({ name, value, options }) => {
              request.cookies.set(name, value);
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      const locale = locales.find((l) => pathname.startsWith(`/${l}`)) ?? defaultLocale;
      return NextResponse.redirect(new URL(`/${locale}/auth`, request.url));
    }

    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
