import React from 'react';
import style from './Pokedex.module.scss';
import Content from '../../components/Content';
import Heading from '../../components/Heading';

type PokedexProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
}

const PokedexPage: React.FC<PokedexProps> = (): JSX.Element => {
  return (
    <div className={style.root}>
      <Content>
        <Heading design="default" size="normal">
          800 <b>pokemons</b> for your to choose your favorite
        </Heading>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
      </Content>
    </div>
  );
};

export default PokedexPage;
