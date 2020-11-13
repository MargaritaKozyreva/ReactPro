import React from 'react';
import PokemonCard from '../PokemonCard';

import * as s from '../../../@types/store/structures';

import style from './PokemonList.module.scss';

interface Props {
  pokemons: Array<s.dataProps>;
}

const PokemonList: React.FC<Props> = (props): JSX.Element => {
  const { pokemons } = props;
  {
    return (
      <div className={style.root}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    );
  }
};

PokemonList.defaultProps = {};

export default PokemonList;
