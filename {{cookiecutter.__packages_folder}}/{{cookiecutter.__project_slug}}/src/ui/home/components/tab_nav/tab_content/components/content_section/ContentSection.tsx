import { PrimaryButtonIcons } from '@core/buttons/PrimaryButtonIcon';
import { useCommonTranslation, useHomeTranslation } from '@i18n';
import { NavLink } from 'react-router-dom';
import { useMemo } from 'react';

export interface ContentSectionProps {
  title: string;
  message: string;
  imageSrc: string;
  isInvert?: boolean;
  link: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  message,
  imageSrc,
  isInvert,
  link,
}) => {
  const { t: tCommon } = useCommonTranslation();

  const { t: tHome } = useHomeTranslation();

  const commonTranslations = useMemo(
    () => ({
      here: tCommon('here'),
    }),
    [tCommon],
  );

  const homeTranslations = useMemo(
    () => ({
      goToTheSection: tHome('home.tabNav.goToTheSection'),
    }),
    [tHome],
  );

  return (
    <div
      className="content-section d-flex justify-content-between align-items-center"
      style={{ gap: '15%' }}
    >
      <div
        className={`${isInvert ? 'order-2' : ''}`}
        style={{ flexBasis: '50%' }}
      >
        <h2>{title}</h2>
        <p
          style={{ fontSize: '.875rem', fontWeight: 400, textAlign: 'justify' }}
          className="my-4"
        >
          {message + ' '}
          <NavLink to={link} className="text-black">
            {commonTranslations.here}
          </NavLink>
          .
        </p>
        <div className="d-flex justify-content-end">
          <PrimaryButtonIcons
            text={homeTranslations.goToTheSection}
            iconName="ArrowRight"
            className="bg-decision-azul-neutro-s50 text-white"
            wFull={false}
          />
        </div>
      </div>
      <img
        src={imageSrc}
        alt="Screenshot de seccion de pantalla"
        className="w-100"
        style={{ flexBasis: '50%' }}
      />
    </div>
  );
};
