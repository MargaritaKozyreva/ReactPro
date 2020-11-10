import React from 'react';

import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import LegendariesPage from './pages/Legendaries';
import DocumentationPage from './pages/Documentation';
import EmptyPage from './pages/Empty';

export interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/home',
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <DocumentationPage />,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
