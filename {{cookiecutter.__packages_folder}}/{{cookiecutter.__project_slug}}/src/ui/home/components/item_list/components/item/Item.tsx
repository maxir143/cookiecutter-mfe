import { useMemo } from 'react';
import { useHomeTranslation } from '@i18n';
import { ButtonTextIcon } from '@core/buttons/ButtonTextIcon';

export interface ItemProps {
  image: string;
  title: string;
  message: string;
}

export const Item: React.FC<ItemProps> = ({ image, message, title }) => {
  const { t } = useHomeTranslation();

  const homeTranslations = useMemo(() => {
    return {
      knowMore: t('home.sectionItemList.knowMore'),
    };
  }, [t]);

  return (
    <div className="item border border-2 border-decision-lilac-murmur-gray p-3 d-flex justify-content-between flex-column mt-3">
      <div className="d-flex justify-content-center">
        <img src={image} alt="icono alusivo al item de menu" />
      </div>
      <div>
        <h4 className="mb-2">{title}</h4>
        <p className="message mb-4 text-justify">{message}</p>
      </div>
      {/* <ButtonTextIcon
        iconName="ArrowRight"
        iconWidth={21}
        text={homeTranslations.knowMore}
      /> */}
    </div>
  );
};
