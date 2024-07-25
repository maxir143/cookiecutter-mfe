import { useMemo, useState } from 'react';
import { TabItem } from './components/tab_item/TabItem';
import { TabContent } from './tab_content/TabContent';
import { indexBy } from '@lib/indexers';
import { useTabItemsProvider } from './useTabItemsProvider';
import { TabNavItem } from './tab_nav.interface';
import { TabNavIds } from './constants/tabnav';

export const TabNav = () => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState<TabNavIds>(
    TabNavIds.ESTRATEGIAS,
  );

  const tabNavItems = useTabItemsProvider();

  const indexedTabNavItems = useMemo(
    () => indexBy<TabNavItem>(tabNavItems, 'tabId'),
    [tabNavItems],
  );

  const handleSelectedTab = (tabId: TabNavIds) => setCurrentSelectedTab(tabId);

  const { content } = indexedTabNavItems[currentSelectedTab];

  return (
    <div className="mt-5">
      <div className="row justify-content-center mb-5">
        {tabNavItems.map((item) => (
          <div className="col-auto">
            <TabItem
              isActive={item.tabId === currentSelectedTab}
              handleSelectedTab={handleSelectedTab}
              {...item}
            />
          </div>
        ))}
      </div>
      <TabContent {...content} />
    </div>
  );
};
