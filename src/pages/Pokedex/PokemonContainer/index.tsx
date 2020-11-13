import React from 'react';
import PokemonList from '../PokemonList';
import Text from '../../../components/Text';
import usePokemons from '../../../components/utils/src/hookHelpers/usePokemons';

const PokemonContainer: React.FC = (): JSX.Element => {
  const { isLoading, isError, data } = usePokemons(30);

  return isLoading ? (
    <div>Loading...</div>
  ) : isError ? (
    <div>Something has wrong...</div>
  ) : (
    <div>
      <Text type="p" size="xl" design="default">
        {data.total} <b>Pokemons</b> for your to choose your favorite
      </Text>
      <PokemonList {...data} />
    </div>
  );
};

export default PokemonContainer;
