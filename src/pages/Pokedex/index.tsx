import React from 'react';
import style from './Pokedex.module.scss';
import Content from '../../components/Content';
import Text from '../../components/Text';
import PokemonContainer from './PokemonContainer';

type PokedexProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
}

const PokedexPage: React.FC<PokedexProps> = (): JSX.Element => {
  return (
    <div className={style.root}>
      <Content>
        <Text type="p" size="xl" design="default" textAlign="center">
          800 <b>Pokemons</b> for your to choose your favorite
        </Text>
        <PokemonContainer/>
      </Content>
    </div>
  );
};

export default PokedexPage;
