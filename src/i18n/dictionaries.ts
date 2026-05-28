import "server-only";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "es";

export const hasLocale = (lang: string): lang is Locale => lang in dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale]();
