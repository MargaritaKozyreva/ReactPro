import React, { useState, useEffect } from 'react';
import getData from '../../../components/Services/mock-service';
import PokemonList from '../PokemonList';

import * as s from '../../../@types/store'

interface Props {
  success: boolean;
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const PokemonContainer: React.FC = (): JSX.Element => {

  const initialState: s.StoreState = {
    success: false,
    isLoading: true,
    isError: false,
    data: {},
  };

  const [state, setState] = useState<Props>(initialState);

  useEffect(() => {
    getData().then((data) =>
      setState(() => {
        return {
          success: true,
          isLoading: false,
          isError: false,
          data,
        };
      }),
    );
  }, []);

  const { success, isLoading, isError, data } = state;

  return !isLoading ? <PokemonList {...state} /> : <div>..loading</div>;
};

export default PokemonContainer;
