import * as Icon from '@core/assets/icons';
import { TabNavIds } from '@ui/home/components/tab_nav/constants/tabnav';

export interface TabItemProps {
  iconName: string;
  text: string;
  tabId: TabNavIds;
  isActive: boolean;
  handleSelectedTab: (tabId: TabNavIds) => void;
}

export const TabItem: React.FC<TabItemProps> = ({
  iconName,
  tabId,
  text,
  handleSelectedTab,
  isActive,
}) => {
  const CurrentIcon = Icon[iconName as keyof typeof Icon];

  return (
    <button
      className={`tab-item py-2 px-3 d-flex align-items-center justify-content-center ${
        isActive ? 'bg-decision-lilac-murmur-gray' : ''
      }`}
      onClick={() => handleSelectedTab(tabId)}
    >
      <div className="icon me-2 text-decision-azul-ultramar-p40 flex-shrink-0">
        <CurrentIcon />
      </div>
      <p className="text text-nowrap">{text}</p>
    </button>
  );
};
