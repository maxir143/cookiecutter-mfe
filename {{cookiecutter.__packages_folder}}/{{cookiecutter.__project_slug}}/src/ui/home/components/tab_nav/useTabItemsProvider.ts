import { useMemo } from 'react';
import { useHomeTranslation } from '@i18n';
import segmentacionFrame from '@core/assets/images/segmentacion_frame.png';
import plantillasFrame from '@core/assets/images/plantillas_frame.png';
import flujosFrame from '@core/assets/images/flujos_frame.png';
import webCobranzaFrame from '@core/assets/images/web_cobranza_frame.png';
import campaniasFrame from '@core/assets/images/campanias_frame.png';
import conversacionesFrame from '@core/assets/images/conversaciones_frame.png';
import { TabNavIds } from './constants/tabnav';
import { TabNavItem } from './tab_nav.interface';

export const useTabItemsProvider = () => {
  const { t } = useHomeTranslation();

  const homeTranslations = useMemo(() => {
    return {
      estrategiasTabText: t('home.tabNav.estrategias.tabText'),
      estrategiasContentTitle: t('home.tabNav.estrategias.content.title'),
      estrategiasContentSubTitle: t('home.tabNav.estrategias.content.subtitle'),
      estrategiasContentSecSegmentacionTitle: t(
        'home.tabNav.estrategias.content.sections.segmentacion.title',
      ),
      estrategiasContentSecSegmentacionMessage: t(
        'home.tabNav.estrategias.content.sections.segmentacion.message',
      ),
      estrategiasContentSecPantillasTitle: t(
        'home.tabNav.estrategias.content.sections.pantillas.title',
      ),
      estrategiasContentSecPantillasMessage: t(
        'home.tabNav.estrategias.content.sections.pantillas.message',
      ),
      estrategiasContentSecFlujosTitle: t(
        'home.tabNav.estrategias.content.sections.flujos.title',
      ),
      estrategiasContentSecFlujosMessage: t(
        'home.tabNav.estrategias.content.sections.flujos.message',
      ),
      webCobranzaTabText: t('home.tabNav.webCobranza.tabText'),
      webCobranzaContentTitle: t('home.tabNav.webCobranza.content.title'),
      webCobranzaContentSubTitle: t('home.tabNav.webCobranza.content.subtitle'),
      webCobranzaContentSecMainMessage: t(
        'home.tabNav.webCobranza.content.sections.main.message',
      ),
      campaniasTabText: t('home.tabNav.campanias.tabText'),
      campaniasContentTitle: t('home.tabNav.campanias.content.title'),
      campaniasContentSubTitle: t('home.tabNav.campanias.content.subtitle'),
      campaniasContentSecMainMessage: t(
        'home.tabNav.campanias.content.sections.main.message',
      ),
      conversationsTabText: t('home.tabNav.conversations.tabText'),
      conversationsContentTitle: t('home.tabNav.conversations.content.title'),
      conversationsContentSubTitle: t(
        'home.tabNav.conversations.content.subtitle',
      ),
      conversationsContentSecMainMessage: t(
        'home.tabNav.conversations.content.sections.main.message',
      ),
    };
  }, [t]);

  return useMemo<TabNavItem[]>(() => {
    return [
      {
        tabId: TabNavIds.ESTRATEGIAS,
        iconName: 'Extension',
        text: homeTranslations.estrategiasTabText,
        content: {
          title: homeTranslations.estrategiasContentTitle,
          subtitle: homeTranslations.estrategiasContentSubTitle,
          sections: [
            {
              title: homeTranslations.estrategiasContentSecSegmentacionTitle,
              message:
                homeTranslations.estrategiasContentSecSegmentacionMessage,
              imageSrc: segmentacionFrame,
              link: '/',
            },
            {
              title: homeTranslations.estrategiasContentSecPantillasTitle,
              message: homeTranslations.estrategiasContentSecPantillasMessage,
              imageSrc: plantillasFrame,
              isInvert: true,
              link: '/',
            },
            {
              title: homeTranslations.estrategiasContentSecFlujosTitle,
              message: homeTranslations.estrategiasContentSecFlujosMessage,
              imageSrc: flujosFrame,
              link: '/',
            },
          ],
        },
      },
      {
        tabId: TabNavIds.WEB_COBRANZA,
        iconName: 'Money',
        text: homeTranslations.webCobranzaTabText,
        content: {
          title: homeTranslations.webCobranzaContentTitle,
          subtitle: homeTranslations.webCobranzaContentSubTitle,
          sections: [
            {
              title: '',
              message: homeTranslations.webCobranzaContentSecMainMessage,
              imageSrc: webCobranzaFrame,
              link: '/',
            },
          ],
        },
      },
      {
        tabId: TabNavIds.CAMPANIAS,
        iconName: 'Campaign',
        text: homeTranslations.campaniasTabText,
        content: {
          title: homeTranslations.campaniasContentTitle,
          subtitle: homeTranslations.campaniasContentSubTitle,
          sections: [
            {
              title: '',
              message: homeTranslations.campaniasContentSecMainMessage,
              imageSrc: campaniasFrame,
              link: '/',
            },
          ],
        },
      },
      {
        tabId: TabNavIds.CONVERSACIONES,
        iconName: 'QuestionAnswer',
        text: homeTranslations.conversationsTabText,
        content: {
          title: homeTranslations.conversationsContentTitle,
          subtitle: homeTranslations.conversationsContentSubTitle,
          sections: [
            {
              title: '',
              message: homeTranslations.conversationsContentSecMainMessage,
              imageSrc: conversacionesFrame,
              link: '/',
            },
          ],
        },
      },
    ];
  }, [t]);
};
