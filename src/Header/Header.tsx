import React from 'react';
import Tab from '../Tab';
import style from './Header.module.scss';
import logo from './logo.svg';
import * as struct from '../@types/store/structures';

const Header: React.FC<struct.HeaderProps> = (props: struct.HeaderProps): JSX.Element => {
  const { tabs } = props;

  return (
    <div className={style.headerContent}>
      <div className={style.header}>
        <img src={logo} alt="logo" />
        <div className={style.tabs}>
          {tabs.map((tab, i) => (
            <Tab key={tab.title} {...tab} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
