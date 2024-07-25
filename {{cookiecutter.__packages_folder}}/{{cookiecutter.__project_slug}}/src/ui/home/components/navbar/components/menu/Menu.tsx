import { SyntheticEvent, useMemo, useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem, MenuItemCommandEvent } from 'primereact/menuitem';
import { useCommonTranslation, useHomeTranslation } from '@i18n';
import { ChevronDown, Language } from '@core/assets/icons';
import { LOCALES } from '@constants/locale';
import { AppProps } from '@custom_types/home/app.interface';
import { deleteSession, getSession } from '@lib/session_storage';
import { useNavigate } from 'react-router-dom';

export const Menu: React.FC<AppProps> = ({ locale, changeLocale }) => {
  const menu = useRef<TieredMenu>(null);

  const navigate = useNavigate();

  const { t: tAuth } = useHomeTranslation();

  const { t: tCommon } = useCommonTranslation();

  const homeTranslations = useMemo(() => {
    return {
      // myProfile: tAuth('home.navbar.menu.myProfile'),
      // projects: tAuth('home.navbar.menu.projects'),
      spanish: tAuth('home.navbar.menu.spanish'),
      english: tAuth('home.navbar.menu.english'),
      logout: tAuth('home.navbar.menu.logout'),
    };
  }, [tAuth]);

  const commonTranslations = useMemo(() => {
    return {
      [LOCALES.ENGLISH]: tCommon('locales.english'),
      [LOCALES.SPANISH]: tCommon('locales.spanish'),
    };
  }, [tCommon]);

  const localeTranslation = useMemo(() => {
    if (!locale) {
      return commonTranslations[LOCALES.SPANISH];
    }

    return commonTranslations[locale];
  }, [locale, commonTranslations]);

  const items = useMemo<MenuItem[]>(() => {
    return [
      // {
      //   label: homeTranslations.myProfile,
      // },
      // {
      //   label: homeTranslations.projects,
      // },
      {
        label: localeTranslation,
        icon: (
          <div style={{ width: '100%', maxWidth: '24px' }} className="me-2">
            <Language />
          </div>
        ),
        items: [
          {
            label: homeTranslations.spanish,
            command: (event: MenuItemCommandEvent) => {
              changeLocale(LOCALES.SPANISH);
            },
          },
          {
            label: homeTranslations.english,
            command: (event: MenuItemCommandEvent) => {
              changeLocale(LOCALES.ENGLISH);
            },
          },
        ],
      },
      {
        label: homeTranslations.logout,
        command: () => {
          deleteSession();
          navigate('/login');
        },
      },
    ];
  }, [homeTranslations]);

  const onClickMenu = (e: SyntheticEvent<Element, Event>) => {
    menu?.current?.toggle(e);
  };

  const userName = useMemo<string>(() => {
    const sessionInfo = getSession();

    if (!sessionInfo) {
      return '- -';
    }

    // return sessionInfo.userProfile.fullName;
    return '';
  }, []);

  return (
    <div className="menu">
      <button
        className="action-btn d-flex align-items-center"
        onClick={onClickMenu}
      >
        <h3 style={{ fontWeight: 500 }} className="me-3 text-nowrap">
          {userName}
        </h3>
        <div className="icon flex-shrink-0">
          <ChevronDown />
        </div>
      </button>
      <TieredMenu model={items} ref={menu} popup className="navbar-menu" />
    </div>
  );
};
