import { LOCALES } from '@constants/locale';

export interface AppProps {
  locale?: LOCALES;
  changeLocale?: (locale: LOCALES) => void;
}
