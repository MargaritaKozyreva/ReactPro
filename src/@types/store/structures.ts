export interface TabProps {
  title: string;
  isActive: Boolean;
}

export interface HeaderProps {
  tabs: Array<TabProps>;
}
