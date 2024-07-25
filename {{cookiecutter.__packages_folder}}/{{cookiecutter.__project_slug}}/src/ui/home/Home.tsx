import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHomeTranslation } from '@i18n';
import { AppProps } from '@custom_types/home/app.interface';
import sampleChatImage from '@core/assets/images/home_frame.svg';
import { Welcome } from '@core/welcome/welcome';

export const Home: React.FC<AppProps> = () => {
  const { t } = useHomeTranslation();

  const navigate = useNavigate();

  const homeTranslations = useMemo(() => {
    return {
      serviceName: t('home.serviceName'),
      description: t('home.description'),
    };
  }, [t]);

  return (
    <Welcome
      image={{
        props: {
          src: sampleChatImage,
          alt: homeTranslations.serviceName,
        },
      }}
      copy={{
        description: homeTranslations.description,
      }}
      button={{
        text: 'Ir al servicio',
        props: {
          onClick: () => navigate('/home'),
        },
      }}
    />
  );
};
