import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
import getData from '../../components/Services/mock-service';

import style from './Home.module.scss';
import * as s from '../../@types/store';

const HomePage: React.FC = (): JSX.Element => {
  const initialState = {
    activePage: 'Home',
    tabs: [],
  };

  const [state, setState] = useState<s.StoreState>(initialState);

  useEffect(() => {
    getData().then((data) =>
      setState((prevState) => {
        return {
          ...prevState,
          tabs: data.tabs,
        };
      }),
    );
  }, []);

  return (
    <div className={style.root}>
      <Header {...state} />
      <div className={style.wrap}>
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
