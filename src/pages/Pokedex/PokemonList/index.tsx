import React from 'react';
import PokemonCard from '../PokemonCard';

import * as s from '../../../@types/store/structures';

import style from './PokemonList.module.scss';

interface Props {
  children?: React.ReactNode;
  data: {
    pokemons: Array<s.dataProps>;
  };
}

const PokemonList: React.FC<Props> = (props): JSX.Element => {
  const { data } = props;
  {
    return (
      <div className={style.root}>
        {data.pokemons.map((pokemon) => (
          <PokemonCard {...pokemon} />
        ))}
      </div>
    );
  }
};

PokemonList.defaultProps = {};

export default PokemonList;
