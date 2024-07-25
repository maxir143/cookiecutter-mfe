import finveroLogoAzul from '@core/assets/images/finvero_logo_azul.svg';
import { Menu } from './components/menu/Menu';
import { AppProps } from '@custom_types/home/app.interface';

export const Navbar: React.FC<AppProps> = ({ locale, changeLocale }) => {
  return (
    <nav className="navbar px-5 py-3 d-flex justify-content-between align-items-center">
      <img src={finveroLogoAzul} className="logo" alt="Logo de finvero azul" />
      <Menu locale={locale} changeLocale={changeLocale} />
    </nav>
  );
};
