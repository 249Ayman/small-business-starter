/**
 * Internationalization Configuration
 * Supports English (LTR) and Arabic (RTL)
 */

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    dir: 'ltr',
    locale: 'en-US',
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    locale: 'ar-SD',
  },
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLang: LanguageCode = 'en';

export const showDefaultLang = true;

export function getLangFromUrl(url: URL): LanguageCode {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as LanguageCode;
  return defaultLang;
}

export function getLanguageConfig(lang: LanguageCode) {
  return languages[lang];
}

export function getAlternateUrl(currentUrl: URL, targetLang: LanguageCode): string {
  const [, currentLang, ...rest] = currentUrl.pathname.split('/');
  if (currentLang in languages) {
    return `/${targetLang}/${rest.join('/')}`;
  }
  return `/${targetLang}${currentUrl.pathname}`;
}
