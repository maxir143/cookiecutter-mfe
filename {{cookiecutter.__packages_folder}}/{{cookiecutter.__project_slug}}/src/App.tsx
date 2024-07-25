import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useCommonTranslation } from '@i18n';
import { Home } from '@ui/home/Home';
import { AppProps } from '@custom_types/home/app.interface';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import '@core/home.scss';

export default ({ locale, changeLocale }: AppProps) => {
  const { i18n } = useCommonTranslation();

  useEffect(() => {
    if (!locale) {
      return;
    }

    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home locale={locale} changeLocale={changeLocale} />}
      />
      <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
    </Routes>
  );
};
