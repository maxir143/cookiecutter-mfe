import { useMemo } from 'react';
import { useHomeTranslation } from '@i18n';
import estrategias from '@core/assets/images/estrategias.svg';
import web from '@core/assets/images/web.png';
import campanias from '@core/assets/images/campanias.png';
import conversaciones from '@core/assets/images/conversaciones.png';
import { ItemProps } from './components/item/Item';
import dataSet from '@core/assets/images/img1.png';
import alternativeData from '@core/assets/images/img2.png';
import eda from '@core/assets/images/img3.png';
import featureEngine from '@core/assets/images/img4.png';
import iaModels from '@core/assets/images/img5.png';
import creditRiskScoring from '@core/assets/images/img6.png';
import mlOps from '@core/assets/images/img7.png';
import finveroAi from '@core/assets/images/img8.png';
import geospatialRisk from '@core/assets/images/img9.png';
import autoMl from '@core/assets/images/img10.png';
import antiFraude from '@core/assets/images/img11.png';

export const useItemsProvider = (): ItemProps[] => {
  const { t } = useHomeTranslation();

  const homeTranslations = useMemo(() => {
    return {
      dataSetTitle: t('home.sectionItemList.dataSet.title'),
      dataSetMessage: t('home.sectionItemList.dataSet.message'),
      alternativeDataTitle: t('home.sectionItemList.alternativeData.title'),
      alternativeDataMessage: t('home.sectionItemList.alternativeData.message'),
      edaTitle: t('home.sectionItemList.eda.title'),
      edaMessage: t('home.sectionItemList.eda.message'),
      featureEnginneTitle: t('home.sectionItemList.featureEnginne.title'),
      featureEnginneMessage: t('home.sectionItemList.featureEnginne.message'),
      aiModelsTitle: t('home.sectionItemList.aiModels.title'),
      aiModelsMessage: t('home.sectionItemList.aiModels.message'),
      credirRiskScoringTitle: t('home.sectionItemList.credirRiskScoring.title'),
      credirRiskScoringMessage: t(
        'home.sectionItemList.credirRiskScoring.message',
      ),
      mlOpsTitle: t('home.sectionItemList.mlOps.title'),
      mlOpsMessage: t('home.sectionItemList.mlOps.message'),
      fiverIaTitle: t('home.sectionItemList.fiverIa.title'),
      fiverIaMessage: t('home.sectionItemList.fiverIa.message'),
      geospatialRiskTitle: t('home.sectionItemList.geospatialRisk.title'),
      geospatialRiskMessage: t('home.sectionItemList.geospatialRisk.message'),
      autoMlTitle: t('home.sectionItemList.autoMl.title'),
      autoMlMessage: t('home.sectionItemList.autoMl.message'),
      antiFraudTitle: t('home.sectionItemList.antiFraud.title'),
      antiFraudMessage: t('home.sectionItemList.antiFraud.message'),
    };
  }, [t]);

  return useMemo<ItemProps[]>(() => {
    return [
      {
        title: homeTranslations.dataSetTitle,
        image: dataSet,
        message: homeTranslations.dataSetMessage,
      },
    ];
  }, [t]);
};
