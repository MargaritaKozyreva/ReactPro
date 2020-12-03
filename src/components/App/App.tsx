import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { useRoutes, useRedirect } from 'hookrouter';
import routes, {LinkEnum} from '../../routes';
import EmptyPage from '../../pages/Empty';

const App: React.FC = (): JSX.Element => {

  const routeResult = useRoutes(routes);
  useRedirect('/', LinkEnum.HOME);

  return routeResult ? (
    <>
      <Header />
      {routeResult}
      <Footer />
    </>
  ) : (
    <EmptyPage />
  );
};
export default App;
