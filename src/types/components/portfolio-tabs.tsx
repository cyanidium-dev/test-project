export interface IPortfolioTabs {
  tabs: {
    href: string;
    text: string;
  }[];
  activeTab: string;
  onTabChange: (tabName: string) => void;
}