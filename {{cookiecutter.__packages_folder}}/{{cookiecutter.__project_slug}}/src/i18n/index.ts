import i18n from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationI18next,
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { enUS, es } from 'date-fns/locale';

const dateLocales = { en: enUS, es };

if (typeof window !== 'undefined') {
  (window as any).__localeData__ = dateLocales;
}

i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${namespace}/${language}.json`),
    ),
  )
  .init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    parseMissingKeyHandler: (key) => '',
  });

i18n.on('languageChanged', (locale) => {
  if (typeof window !== 'undefined') {
    (window as any).__localeId__ = locale;
  }
});

export default i18n;

export function useHomeTranslation() {
  return useTranslationI18next('finvero/home', {
    useSuspense: false,
  });
}

export function useCommonTranslation() {
  return useTranslationI18next('finvero/common', {
    useSuspense: false,
  });
}
