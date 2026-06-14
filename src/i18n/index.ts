/**
 * i18n utilities and exports
 */

import { en, type TranslationKeys } from './en';
import { ar } from './ar';
import { type LanguageCode, defaultLang, languages, getLangFromUrl, getAlternateUrl, getLanguageConfig } from './config';

const translations: Record<LanguageCode, TranslationKeys> = {
  en,
  ar,
};

export function useTranslations(lang: LanguageCode) {
  return translations[lang] ?? translations[defaultLang];
}

export function t(lang: LanguageCode, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[lang] ?? translations[defaultLang];
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

export {
  type LanguageCode,
  type TranslationKeys,
  defaultLang,
  languages,
  getLangFromUrl,
  getAlternateUrl,
  getLanguageConfig,
  en,
  ar,
};
