import React from 'react';
import style from './Pokedex.module.scss';
import Content from '../../components/Content';
import PokemonContainer from './PokemonContainer';

type PokedexProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
}

const PokedexPage: React.FC<PokedexProps> = (): JSX.Element => {


  return (
    <div className={style.root}>
      <Content>
        <PokemonContainer />
      </Content>
    </div>
  );
};

export default PokedexPage
