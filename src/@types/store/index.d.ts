import * as struct from './structures';

export interface StoreState {
  isLoading: boolean,
  isError: boolean,
  data: {
    total: number,
    pokemons: Array<struct.dataProps>
  },
}


