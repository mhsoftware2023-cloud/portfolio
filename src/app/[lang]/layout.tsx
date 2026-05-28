import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../globals.css";
import { locales, hasLocale, getDictionary } from "@/i18n/dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const isEs = hasLocale(lang) && lang === "es";
  return {
    title: isEs
      ? "mhsoftware — Estudio de Desarrollo de Software"
      : "mhsoftware — Software Development Studio",
    description: isEs
      ? "mhsoftware crea aplicaciones web y móviles modernas. Código limpio, gran UX, entrega confiable."
      : "mhsoftware builds modern web and mobile applications. Clean code, great UX, reliable delivery.",
  };
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const resolvedLang = hasLocale(lang) ? lang : "es";
  const dict = await getDictionary(resolvedLang);

  return (
    <html lang={resolvedLang} className={`${geist.variable} scroll-smooth`}>
      <body className="antialiased">
        <Navbar dict={dict.nav} lang={resolvedLang} />
        <main>{children}</main>
        <Footer dict={dict.footer} />
      </body>
    </html>
  );
}
