import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import getData from '../Services/mock-service';
import * as s from '../../@types/store';

import HomePage from '../../pages/Home';
import PokedexPage from '../../pages/Pokedex';
import Header from '../Header';
import EmptyPage from '../../pages/EmptyPage';
import Footer from '../Footer';

const App: React.FC = (): JSX.Element => {
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

  const setPageInStore = (page: string) => {
    setState((prevState) => {
      return {
        ...prevState,
        activePage: page,
      };
    });
  };

  return (
    <BrowserRouter>
      <Route
        render={(props) => {
          const { history } = props;

          const setPage = (page: string, link: string) => {
            setPageInStore(page);
            history.push(link);
          };

          return (
            <>
              <Header {...state} setPageInStore={setPageInStore} />
              <Route path="/" exact render={() => <HomePage setPage={() => setPage('Pokedex', './pokedex')} />} />
              <Route path="/home" render={() => <HomePage setPage={() => setPage('Pokedex', './pokedex')} />} />
              <Route path="/pokedex" render={() => <PokedexPage />} />
              <Route render={() => EmptyPage} />
              <Footer />
            </>
          );
        }}
      />
    </BrowserRouter>
  );
};
export default App;
