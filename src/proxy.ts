import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, hasLocale } from "@/i18n/dictionaries";

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  // Parse "en-US,en;q=0.9,es;q=0.8" → ["en-US", "en", "es"]
  const preferred = acceptLanguage
    .split(",")
    .map((s) => s.split(";")[0].trim().toLowerCase());

  for (const lang of preferred) {
    // Exact match (e.g. "es")
    if (hasLocale(lang)) return lang;
    // Prefix match (e.g. "en-US" → "en")
    const prefix = lang.split("-")[0];
    if (hasLocale(prefix)) return prefix;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip if pathname already starts with a supported locale
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
