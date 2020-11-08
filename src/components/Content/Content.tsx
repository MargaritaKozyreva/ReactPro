import React from 'react';
import Layout from '../Layout';
import style from './Content.module.scss';

const Content: React.FC = ({ children }): JSX.Element => {
  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <Layout>{children}</Layout>
      </div>
    </div>
  );
};

export default Content;
