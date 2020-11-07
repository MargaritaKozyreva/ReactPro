export interface TabProps {
  id: number;
  value: string;
  link: string;
  activePage: string;
}

export interface HeaderProps {
  activePage: string;
  tabs: Array<TabProps>;
}
