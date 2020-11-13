import React, { useState, useEffect } from 'react';
import * as s from '../../../../../@types/store';

const usePokemons = (limit: number = 10) => {
  const initialState: s.StoreState = {
    isLoading: true,
    isError: false,
    data: {
      total: 0,
      pokemons: [],
    },
  };

  const [state, setState] = useState(initialState);
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const responce = await fetch('http://zar.hosthot.ru/api/v1/pokemons?limit=' + limit);
        const data = await responce.json();
        console.log(data);
        loadPokemons(data);
      } catch (e) {
        catchError();
      } finally {
        finallyHandler();
      }
    };

    const loadPokemons = (res: any) => {
      setState((prevState) => {
        return {
          ...prevState,
          isLoading: false,
          isError: false,
          data: {
            ...prevState.data,
            total: res.total,
            pokemons: res.pokemons,
          },
        };
      });
    };

    const catchError = () => {
      setState((prevState) => {
        return {
          ...prevState,
          isLoading: false,
          isError: true,
        };
      });
    };

    const finallyHandler = () => {
      setState((prevState) => {
        return {
          ...prevState,
          isLoading: false,
        };
      });
    };

    getPokemons();
  }, []);

  return state;
};

export default usePokemons;
