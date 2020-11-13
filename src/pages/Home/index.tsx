import React from 'react';

import Content from '../../components/Content';
import style from './Home.module.scss';

import Button from '../../components/Button';
import Text from '../../components/Text';
import Parallax from '../../components/Parallax';
import { navigate } from 'hookrouter';

import { LinkEnum } from '../../routes'

type HomeProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
}

const HomePage: React.FC<HomeProps> = (props): JSX.Element => {
  return (
    <div className={style.root}>
      <Content>
        <Text type="span" size="xxl">
          <b>Find</b> all your
          <br />
          favotite
          <br />
          <b>Pokemon</b>
        </Text>
        <Text type="p" size="l">
          You can know the type of Pokemon,
          <br />
          its strengths, disadvantages and
          <br />
          abilities
        </Text>
        <Button design="success" size="m" onClick={() => navigate(LinkEnum.POKEDEX)}>
          See pokemons
        </Button>{' '}
        <div className={style.contentParallax}>
          <Parallax />
        </div>
      </Content>
    </div>
  );
};

export default HomePage;
