import React from 'react';
import { ContentSection } from './components/content_section/ContentSection';
import segmentacionFrame from '@core/assets/images/segmentacion_frame.png';
import { TabNavContent } from '@ui/home/components/tab_nav/tab_nav.interface';

export const TabContent: React.FC<TabNavContent> = ({
  title,
  subtitle,
  sections,
}) => {
  return (
    <div>
      <h2 className="text-center mb-3">{title}</h2>
      <h6 className="text-center mb-5 pb-5" style={{ fontWeight: 400 }}>
        {subtitle}
      </h6>
      {sections.map((section) => (
        <ContentSection {...section} />
      ))}
    </div>
  );
};
