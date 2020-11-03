import * as struct from './structures';

export interface StoreState {
  tabs: Array<struct.TabProps> | struct.TabProps[];
}
