import React from 'react';
import PokemonCard from '../PokemonCard';
import style from './PokemonList.module.scss';
import { IPokemons } from '../../../components/interface/pokemons';

const PokemonList: React.FC<IPokemons> = (props): JSX.Element => {
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
