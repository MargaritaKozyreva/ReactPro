import React from 'react';
import { PokemonRequest } from '../../components/interface/pokemons';
import useData from '../../components/utils/src/hookHelpers/useData/useData';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonRequest>('getPokemon', { id });

  if (isLoading) {
    return <div>...Spinner</div>;
  }
  return <div>This is pokemon equal {data?.name_clean}</div>;
};

export default Pokemon;
