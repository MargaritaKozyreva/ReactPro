import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { useRoutes, useRedirect } from 'hookrouter';
import routes from '../../routes';
import ErrorPage from '../../pages/Error';

const App: React.FC = (): JSX.Element => {
  const routeResult = useRoutes(routes);
  useRedirect('/', '/home');

  const MainPage = (
    <>
      <Header />
      {routeResult}
      <Footer />
    </>
  );

  const content = routeResult ? MainPage : <ErrorPage />;
  return content;
};
export default App;
