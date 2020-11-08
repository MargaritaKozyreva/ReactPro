import React from 'react';

import Content from '../../components/Content';
import style from './Home.module.scss';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

type HomeProps = HTMLAttributeProps;

interface HTMLAttributeProps {
  [key: string]: any;
  setPage: () => void;
}

const HomePage: React.FC<HomeProps> = (props): JSX.Element => {
  const { setPage } = props;
  return (
    <div className={style.root}>
      <Content>
        <Heading design="default" size="normal">
          <b>Find</b> all your favotite <b>Pokemon</b>
        </Heading>
        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
        <Button onClick={setPage} design="success" size="normal">
          See pokemons
        </Button>
      </Content>
      <div className={style.contentParallax}>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
