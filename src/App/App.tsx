import React, { useState, useEffect } from 'react';

import style from './App.module.scss';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import getData from '../Services/mock-service';

import * as s from '../@types/store';

const App: React.FC = () => {
  const initialState = {
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
    <div className={style.app}>
      <Header tabs={state.tabs} />
      <div className={style.wrapper}>
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default App;
