import React from 'react';
import { Link } from 'react-router-dom';
import * as struct from '../../@types/store/structures';
import style from './Tab.module.scss';

const Tab: React.FC<struct.TabProps> = (props: struct.TabProps): JSX.Element => {
  const { value, link, activePage, setPageInStore } = props;
  const linkStyle = activePage === value ? `${style.menuLink} ${style.activeLink}` : style.menuLink;

  return (
    <Link to={link} className={linkStyle} onClick={() => setPageInStore(value, link)}>
      {value}
    </Link>
  );
};

export default Tab;
