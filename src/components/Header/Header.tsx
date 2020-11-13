import React from 'react';
import Tab from '../Tab';
import style from './Header.module.scss';
import { ReactComponent as Logo } from './assets/Logo.svg';

import { GENERAL_MENU } from '../../routes';

const Header: React.FC = (): JSX.Element => {

  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>

        <div className={style.menuWrap}>
          {GENERAL_MENU.map((tab) => (
            <Tab key={tab.title} {...tab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
