import React from 'react';
import Tab from '../Tab';
import style from './Header.module.scss';
import { ReactComponent as Logo } from './assets/Logo.svg';
import * as struct from '../../@types/store/structures';

const Header: React.FC<struct.HeaderProps> = (props: struct.HeaderProps): JSX.Element => {
  const { tabs, activePage } = props;

  return (
    <div className={style.root}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Logo />
        </div>

        <div className={style.menuWrap}>
          {tabs.map((tab, i) => (
            <Tab key={tab.id} {...tab} activePage={activePage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
