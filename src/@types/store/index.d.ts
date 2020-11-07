import * as struct from './structures';

export interface StoreState {
  activePage: string;
  tabs: Array<struct.TabProps> | struct.TabProps[];
}
