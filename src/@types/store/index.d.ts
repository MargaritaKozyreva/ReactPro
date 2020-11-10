import * as struct from './structures';

export interface StoreState {
  success: boolean,
  isLoading: boolean,
  isError: boolean,
  data: {
    pokemons: Array<struct.dataProps>
  } | {},
}


