import { TabNavIds } from './constants/tabnav';

export interface TabNavContentSection {
  title: string;
  message: string;
  imageSrc: string;
  isInvert?: boolean;
  link: string;
}

export interface TabNavContent {
  title: string;
  subtitle: string;
  sections: TabNavContentSection[];
}

export interface TabNavItem {
  iconName: string;
  text: string;
  tabId: TabNavIds;
  content: TabNavContent;
}
