export interface TabProps {
  id: number;
  value: string;
  link: string;
  activePage: string;
  setPageInStore: (page: string, link: string) => void;
}

export interface HeaderProps {
  activePage: string;
  tabs: Array<TabProps>;
  push?: any;
  setPageInStore: (page: string, link: string) => void;
}
